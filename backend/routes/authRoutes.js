const express = require("express");
const passport = require("passport");
const {
  signup,
  login,
  logout,
  googleCallback,
} = require("../controllers/authController");
const { verifyJWT } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", verifyJWT, logout);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  googleCallback
);

module.exports = router;
