// Import Express, CORS and Axios
const express = require('express');
const cors = require('cors');
const axios = require('axios');

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
        // Connection to Flask server
        // localhost value needs to be changed to correct IPv4 value when testing
        const serviceUrl = "http://10.0.0.248:5000/processJSON";

        const serviceResponse = await axios.post(serviceUrl, { keywords });

        console.log('Service response:', serviceResponse.data);

        // Send response back to the client 
        response.json(serviceResponse.data);
    } catch (error) {
        // Error message for when communicating with NLP service fails
        console.error('Error communicating with JSON service', error);

        // Status 500 error response sent to the client with error message
        response.status(500).json({ error: 'Failed to process keywords' });
    }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    
    // localhost value needs to be changed to correct IPv4 value when testing
    console.log(`Server is running on http://10.0.0.248/${PORT}`);
});
