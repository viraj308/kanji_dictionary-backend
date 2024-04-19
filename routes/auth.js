const express = require("express");
const passport = require("passport");
const User = require("../models/User");

const router = express.Router();

// Configure Passport to use email as the username field
passport.use(User.createStrategy());

router.post("/signup", (req, res, next) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    (err, user) => {
      if (err) {
        return next(err);
      }
      passport.authenticate("local")(req, res, () => {
        res.json({ message: "Sign up successful", user: user });
      });
    }
  );
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Login successful" });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Logout successful" });
});

module.exports = router;
