// Import the required modules
require("dotenv").config();
const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const cors = require("cors");
const { verifyJWT } = require("backend/middlewares/auth.middleware.js");
const Todo = require("../models/Todo.js");

// CORS setup (frontend URL)
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true, // To allow cookies (for session management)
  })
);

// MongoDB connection
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Setup session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration for Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if the user exists in the database
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          // If user exists, return the user
          return done(null, user);
        } else {
          // If user doesn't exist, create a new user
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
          });
          await user.save(); // Save the new user in the database
          return done(null, user);
        }
      } catch (err) {
        console.error(err);
        return done(err, null);
      }
    }
  )
);

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication
    res.redirect("/profile"); // Redirect to your profile or dashboard page
  }
);

// Route for user logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/"); // Redirect to home after logout
  });
});

// Middleware to check if user is authenticated
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login"); // Redirect to login if not authenticated
}

// Example: Profile route (only accessible if logged in)
router.get("/profile", isLoggedIn, (req, res) => {
  res.send(`Welcome ${req.user.name}!`);
});
// const { verifyJWT } = require("backend/middlewares/auth.middleware");

// Route for user login (with email/password)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `All fields are required!`,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us. Please SignUp to Continue.`,
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      user._doc.token = token;
      user._doc.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Successfully!`,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Login Failure, Please Try Again!`,
    });
  }
});

// Route for user signup (with email/password)
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    if (!email.includes("@gmail.com")) {
      return res.status(400).send({
        success: false,
        message: "Invalid Email!",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match. Please try again.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please login to continue.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered, Please try again!",
    });
  }
});

router.post("/logout", verifyJWT, async (req, res) => {
  try {
    console.log("req.user:", req.user);
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: {
          token: 1,
        },
      },
      {
        new: true,
      }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    res
      .status(200)
      .clearCookie("token", options)
      .json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred during logout" });
  }
});

router.post("/addTodo", verifyJWT, async (req, res) => {
  try {
    const { task, userId } = req.body;

    console.log(req.body);
    if (!task || !userId) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    const newTodo = await Todo.create({
      task,
      userId,
    });

    return res.status(200).json({
      success: true,
      newTodo,
      message: "Todo added successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Cannot add todo",
    });
  }
});

router.get("/todos/:userId", verifyJWT, async (req, res) => {
  try {
    const { userId } = req.params;

    // Find todos that match the provided userId
    const todos = await Todo.find({ userId });

    if (!todos || todos.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No todos found for this user",
      });
    }

    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Error fetching todos",
    });
  }
});

router.delete("/todos/:id", verifyJWT, async (req, res) => {
  try {
    const todoId = req.params.id;

    const deletedTodo = await Todo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while deleting the todo" });
  }
});

module.exports = router;
