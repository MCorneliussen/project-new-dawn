// Import required modules
require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Express for server routing
const session = require('express-session'); // To manage user sessions
const passport = require('./middlewares/passport'); // Passport for authentication
const errorHandler = require('./middlewares/errorHandler'); // Import the error handler

// Import centralized routes
const routes = require('./routes/index'); 
const aboutRoutes = require('./routes/about');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

// Initialize Express app
const app = express(); 

// Middleware to serve static files (e.g., CSS, images, JavaScript)
app.use(express.static('public'));

// Middleware to manage user sessions
app.use(session({
    secret: process.env.SESSION_SECRET, // Encryption key for session data
    resave: false, // Avoid saving unchanged sessions
    saveUninitialized: false, // Don't create empty sessions
}));

// Initialize Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// Middleware to make `user` variable globally available in templates
app.use((req, res, next) => {
    res.locals.user = req.user || null; // Assign logged-in user or null
    next(); // Ensure the request proceeds to the next middleware or route
});

// Set EJS as the view engine for rendering templates
app.set('view engine', 'ejs');

// Register centralized routes
app.use('/', routes);
app.use('/about', aboutRoutes);
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Catch-all for unmatched routes
app.use((req, res, next) => {
    const error = new Error('Page Not Found');
    error.status = 404;
    next(error); // Forward to the error handler
});

// Register the error handler
app.use(errorHandler);

// Start the server and listen on port 3000
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
