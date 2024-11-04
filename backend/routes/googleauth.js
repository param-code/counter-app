const express = require("express");
const passport = require("passport");

const router = express.Router();

// Route to initiate Google authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Redirect to a page after successful login (e.g., dashboard)
    res.redirect("/dashboard");
  }
);

// Logout route
router.get("/logout", (req, res) => {
  req.logout(err => {
    if (err) {
      console.error(err);
      return res.redirect("/"); // Redirect to home on error
    }
    res.redirect("/"); // Redirect to home after logout
  });
});

module.exports = router;
