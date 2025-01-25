const express = require('express'); // Express for routing
const router = express.Router(); // Initialize Express router

// Home route - Displays homepage
router.get('/', (req, res) => {
    res.render('pages/index'); 
});

module.exports = router;
