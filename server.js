const express = require('express');
const { connectDB, getConnection } = require('./database');
const routes = require('./routes'); // Import the routes
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Use the routes with the /api prefix
app.use('/api', routes);

// Test endpoint
app.get('/ping', (req, res) => {
    res.send('Pong!');
});

// Connect to the database
connectDB();

// Root endpoint to check database connection
app.get('/', (req, res) => {
    console.log("Connected");
    res.send(getConnection());
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});