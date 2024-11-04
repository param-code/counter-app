/** @format */

// Importing necessary modules and packages
const express = require("express");
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

// End of code.
