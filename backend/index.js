/** @format */

// Importing necessary modules and packages
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const database = require("./config/database");
const passport = require("passport");
const session = require("express-session");
require("./passport"); // Import passport configuration
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { sendFeedbackEmail } = require("./controllers/othercontrollers");
const { subscribe } = require("./controllers/subscribeController");
// Loading environment variables from .env file
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const googleauth = require("./routes/googleauth");

// Visitor Schema
const visitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
});

const Visitor = mongoose.model("Visitor", visitorSchema);

// Setting up port number
const PORT = process.env.PORT || 4000;

// Connecting to database
database.dbConnect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

// Setting up routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/todo", todoRoutes);
app.use("/auth", googleauth)

// Testing the server
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

app.post("/contact", sendFeedbackEmail);
app.post("/subscribe", subscribe);

// Listening to the server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});

// Endpoint to get visitor count
// Import Node's `crypto` module to create a unique ID for each visitor
const crypto = require("crypto");

// Create a temporary set to store recent visitor IDs
const recentVisitors = new Set();

app.get("/api/visitor-count", async (req, res) => {
  // Generate a unique ID based on the visitor's IP and browser information
  const visitorId = crypto
    .createHash("md5")
    .update(req.ip + req.headers["user-agent"])
    .digest("hex");

  // If the visitor has already been counted recently, skip incrementing
  if (recentVisitors.has(visitorId)) {
    const visitor = await Visitor.findOne();
    return res.json({ count: visitor.count });
  }

  // Add the visitor to the recentVisitors set
  recentVisitors.add(visitorId);

  // Remove the visitor from the cache after 30 seconds to allow counting later if they revisit
  setTimeout(() => {
    recentVisitors.delete(visitorId);
  }, 3000); // 3 seconds

  // Increment visitor count
  let visitor = await Visitor.findOne();
  if (!visitor) {
    visitor = new Visitor({ count: 1 });
  } else {
    visitor.count += 1;
  }
  await visitor.save();

  // Send the updated count to the client
  res.json({ count: visitor.count });
});

// End of code.
