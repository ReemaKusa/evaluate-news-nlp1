
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");  // Add this to serve static files

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, '/dist')));


const apiUrl = "https://kooye7u703.execute-api.us-east-1.amazonaws.com/NLPAnalyzer";

app.post("/analyze", async (req, res) => {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: req.body.text })
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error("Error fetching API:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

// Serve index.html on the root route
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/dist/index.html"));
});

app.listen(8081, () => console.log("Server running on port 8081"));
