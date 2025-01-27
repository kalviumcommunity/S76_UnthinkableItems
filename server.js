const express = require('express');
const app = express();
const port = 3000;

// Route with enhanced error handling
app.get('/ping', (req, res) => {
    try {
        res.send('Pong!');
    } catch (error) {
        console.error('Error occurred in /ping route:', error); // Log error details
        res.status(500).send('An internal server error occurred!');
    }
});

// Server startup with improved error handling
app.listen(port, (err) => {
    if (err) {
        console.error(`Error starting server on port ${port}:`, err); // Detailed error message
        process.exit(1);
    }
    console.log(`Server is running at http://localhost:${port}`);
});
