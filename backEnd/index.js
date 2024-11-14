// Import Express and CORS
const express = require('express');
const cors = require('cors');

// Initialize the express app
const app = express();
const PORT = 5555; // Port number


app.use(cors()); // enable CORS so frontend can make requests to this backend
app.use(express.json()); // enable JSON parsing so the backend can handle JSON data requests

// Test Route 
app.get('/', (request, response) => {
    response.send('Backend server is running!');
});

// /searchViolations route for handling keyword searches
app.post('/searchViolations', (request, response) => {
    const keywords = request.body.keywords;
    console.log('Received keywords: ', keywords);

    // Placeholder response
    response.json({
        message: 'Search results would go here',
        keywords: keywords,
    });
});

// Start the server 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
