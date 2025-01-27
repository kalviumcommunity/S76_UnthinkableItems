const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
    try {
        res.send('Pong!');
    } catch (error) {
        res.status(500).send('An error occurred!');
    }
});

app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
    console.log(`Server is running at http://localhost:${port}`);
});
