import React, { useState } from 'react';
import { View, Text, TextInput, ToastAndroid } from 'react-native';
import axios from 'axios';
import styles from '../Styles/reportViolationP1-Styles.js';
import Button from '../Components/ButtonPress.js'; // Import button

export default function ReportViolationP1() {
    // State variables to hold the keywords input from the user & to store the processed result returned from backend
    const [keywords, setKeywords] = useState('');
    const [resultFromBackend, setResultFromBackend] = useState(null);

    // Function to handle the search when the button is pressed
    const handleSearch = async () => {
        console.log('Button pressed, initiating search...');
        ToastAndroid.show('Initiating search...', ToastAndroid.SHORT); // Show feedback when button is pressed

        try {
            // Send a POST request to the backend with keywords array
            const response = await axios.post('http://10.0.0.248:5555/searchViolations', {
                keywords: keywords.split(',').map(word => word.trim()), // Convert comma-separated string to array
            });
            console.log('Response received:', response.data);

            // Store the result from the backend
            setResultFromBackend(response.data);
            ToastAndroid.show('Search Complete!', ToastAndroid.SHORT); // Feedback upon success
        } catch (error) {
            console.error('Error fetching data:', error);
            // Show a toast message if there's an error processing the request
            ToastAndroid.show('Error processing your request. Please try again.', ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Keywords (comma-separated):</Text>

            {/* Input field for the user to enter keywords */}
            <TextInput
                style={styles.input}
                placeholder="e.g., parking, noise, fee"
                value={keywords}
                onChangeText={setKeywords}
            />

            {/* Reusable Button component that triggers handleSearch on press */}
            <Button label="Search Violations" theme="primary" onPress={handleSearch} />

            {/* Display the results if available */}
            {resultFromBackend && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>
                        Original Keywords: {resultFromBackend.original_keywords.join(', ')}
                    </Text>
                    <Text style={styles.resultText}>
                        Processed Keywords: {resultFromBackend.processed_keywords.join(', ')}
                    </Text>
                </View>
            )}
        </View>
    );
}
