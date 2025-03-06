const express = require('express');
const logger = require('./middleware/logger'); // Import middleware

const app = express();

// Middleware
app.use(express.json()); // Enables parsing of JSON request bodies
app.use(logger); // Apply custom logger middleware globally

module.exports = app;
