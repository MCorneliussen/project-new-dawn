function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { // Use Passport's isAuthenticated() method
        return next(); // Proceed if user is authenticated
    }
    res.redirect('/auth/google'); // Redirect to login if not authenticated
}

module.exports = isAuthenticated;
