// Import Express, CORS and Axios
const express = require('express');
const cors = require('cors');
//const axios = require('axios');

// Initialize the express app
const app = express();
const PORT = 5555; // Port number

app.use(cors()); // Enable CORS so frontend can make requests to this backend
app.use(express.json()); // Enable JSON parsing so the backend can handle JSON data requests

// Test Route
app.get('/', (_request, response) => {
    response.send('Node backend server is running!');
});

// POST route to '/searchViolations' to handle keyword search requests
// This route sends keywords from the client to the Python NLP service for processing
app.post('/searchViolations', async (request, response) => {

    // Extract keywords from the incoming request's JSON body
    const { keywords } = request.body;

    try {
        // Temporarily skip actual NLP processing and return a placeholder response
        const processedKeywords = keywords.map(keyword => `processed_${keyword.trim()}`);

        // Send JSON response back to the client with the original and placeholder processed keywords
        response.json({
            message: 'Processed keywords received', // confirmation message
            original_keywords: keywords, // original keywords sent by the user
            processed_keywords: processedKeywords, // placeholder processed keywords
        });
    } catch (error) {
        // Error message for when communicating with NLP service fails
        console.error('Error processing keywords:', error);

        // Status 500 error response sent to the client with error message
        response.status(500).json({ error: 'Failed to process keywords' });
    }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://10.0.0.248/${PORT}`);
});
