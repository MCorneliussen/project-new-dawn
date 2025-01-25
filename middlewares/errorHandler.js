function errorHandler(err, req, res, next) {
    console.error(err.stack); // Log the error for debugging

    // Handle 404 errors
    if (err.status === 404) {
        return res.status(404).render('errors/404', { message: err.message });
    }

    // Handle all other errors
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
        },
    });
}

module.exports = errorHandler;
