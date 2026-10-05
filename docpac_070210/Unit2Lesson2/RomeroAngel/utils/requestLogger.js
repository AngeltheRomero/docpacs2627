const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

// Route Handler
app.get('/', (req, res) => {
    res.send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json()); // Parses JSON data for every incoming request
app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next();
});