// Import Express, CORS and Axios
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Initialize the express app
const app = express();
const PORT = 5555; // Port number


app.use(cors()); // enable CORS so frontend can make requests to this backend
app.use(express.json()); // enable JSON parsing so the backend can handle JSON data requests

// Test Route
app.get('/', (request, response) => {
    response.send('Backend server is running!');
});

// POST route to '/searchViolations' to handle keyword search requests
// This route sends keywords from the client to the Python NLP service for processing
app.post('/searchViolations', async (request, response) => {

    // Extract keywords from the incoming request's JSON body
    const { keywords } = request.body;

    try {
        // Send a POST request to the NLP service with the 'keywords' data
        // port 5000/processKeywords is the endpoint of the Flask service
        const sentKeywords = await axios.post('http://localhost:5000/processKeywords', { keywords });

        // Retrieve the response data from the NLP servicec
        const nlpProcessedKeywords = sentKeywords.data;

        // Send JSON response back to the client with the original and processed keywords
        response.json({
            message: 'Processed keywords received', // confirmation message
            original_keywords: keywords, // original keyword sent by the user
            processed_keywords: nlpProcessedKeywords.processed_keywords,// processed keyword processsed by NLP
        });
    } catch (error) {

        // Error message for when communicating with NLP service fails
        console.error('Error communicating with NLP service:', error);

        // Status 500 error response sent to the client with error message
        response.status(500).json({ error: 'Failed to process keywords' });
    }

});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
