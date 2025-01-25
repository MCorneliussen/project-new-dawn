const express = require('express'); // Express for routing
const isAuthenticated = require('../middlewares/isAuthenticated'); // isAuthenticated?
const router = express.Router(); // Initialize Express router

router.get('/', isAuthenticated, (req, res) => {
    res.render('pages/profile', { user: req.user });
});

module.exports = router;
