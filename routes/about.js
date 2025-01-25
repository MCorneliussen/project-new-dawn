const express = require('express'); // Express for routing
const router = express.Router(); // Initialize Express router


// About route - Displays information about the project
router.get('/', (req, res) => {
    res.render('pages/about');
});

module.exports = router;
