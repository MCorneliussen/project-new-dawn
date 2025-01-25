const express = require('express');
const passport = require('../middlewares/passport'); // Passport for Google OAuth
const router = express.Router();

// Google OAuth Login
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'], // Request profile and email from Google
}));

// Google OAuth Callback
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth/login' }), // Redirect to login on failure
    (req, res) => {
        res.redirect('/'); // Redirect to homepage on success
    }
);

// Logout Route
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err); // Handle logout errors
        res.redirect('/'); // Redirect to homepage after logout
    });
});

module.exports = router;
