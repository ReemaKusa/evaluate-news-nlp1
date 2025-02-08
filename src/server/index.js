const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../dist'))); // Ensure this path is correct

// Debugging to check if API_URL is set
if (!process.env.API_URL) {
    console.error("Error: API_URL is not defined! Check your .env file.");
    process.exit(1); // Exit if API URL is missing
} else {
    console.log(`API URL Loaded: ${process.env.API_URL}`);
}

// Serve the main index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html')); // Ensure this path is correct
});

// Use API URL from .env file
const apiUrl = process.env.API_URL;

app.post('/analyze', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text input is required' });
    }

    try {
        const fetch = (await import('node-fetch')).default; // Dynamic import
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching API:", error);
        res.status(500).json({ error: 'Error fetching data from NLPAnalyzer API' });
    }
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
    console.log(`http://localhost:${PORT}`);
});
