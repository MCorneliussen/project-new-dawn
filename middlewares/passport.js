// Import required modules
const passport = require('passport'); // Passport for authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Google OAuth 2.0 strategy

// Configure Google OAuth strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID, // Google client ID from .env
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Google client secret from .env
    callbackURL: process.env.GOOGLE_CALLBACK_URL, // Redirect URI after Google login
    passReqToCallback: true, // Pass request object to the callback
}, (request, accessToken, refreshToken, profile, done) => {
    // Google sends user profile after successful login
    return done(null, profile); // Pass user profile to serializeUser
    
}));
// Serialize user data into session
passport.serializeUser((user, done) => {
    done(null, user);
});
// Deserialize user data from session
passport.deserializeUser((user, done) => {
    done(null, user);
});


// Export configured Passport instance
module.exports = passport;
