import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ToastAndroid, ScrollView } from 'react-native';
import axios from 'axios';
import styles from '../Styles/reportViolationP1-Styles.js';
import Button from '../Components/ButtonPress.js'; // Import button

export default function ReportViolationP1() {
    // State variables to hold the keywords input from the user & to store the processed result returned from backend
    const [keywords, setKeywords] = useState('');
    const [resultFromBackend, setResultFromBackend] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to handle the search when the button is pressed
    const handleSearch = async () => {
        console.log('Button pressed, initiating search...');
        ToastAndroid.show('Initiating search...', ToastAndroid.SHORT); // Show feedback when button is pressed

        setLoading(true); // Set loading state to true when search starts

        try {
            // Send a POST request to the backend with keywords array
            // localhost value needs to be changed to the right correct IPv4 value when testing
            // Node server
            const response = await axios.post('http://10.0.0.248:5555/searchViolations', {
                keywords: keywords.split(',').map(word => word.trim()), // Convert comma-separated string to array
            });
            console.log('Response received:', response.data);

            // Store the result from the backend
            setResultFromBackend({ ...response.data });
            ToastAndroid.show('Search Complete!', ToastAndroid.SHORT); // Feedback upon success
        } catch (error) {
            console.error('Error fetching data:', error);
            setResultFromBackend({
                original_keywords: [],
                processed_results: [],
            });
            // Show a toast message if there's an error processing the request
            ToastAndroid.show('Error processing your request. Please try again.', ToastAndroid.SHORT);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log('resultFromBackend updated:', resultFromBackend);
    }, [resultFromBackend]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Enter Keywords (comma-separated):</Text>

            <TextInput
                style={styles.input}
                placeholder="e.g., parking, noise, fee"
                value={keywords}
                onChangeText={setKeywords}
            />

            <Button label="Search Violations" theme="primary" onPress={handleSearch} />

            {loading && (
                <Text style={styles.loadingText}>Searching... Please wait.</Text>
            )}

            {resultFromBackend ? (
                <View style={styles.resultContainer}>
                    {/* Iterate over the keys of the resultFromBackend object */}
                    {Object.keys(resultFromBackend).map((category, index) => (
                        <View key={index} style={styles.categoryContainer}>
                            <Text style={styles.categoryTitle}>{category}</Text>
                            {resultFromBackend[category].length > 0 ? (
                                resultFromBackend[category].map((item, idx) => (
                                    <View key={idx} style={styles.itemContainer}>
                                        <Text style={styles.itemText}>Article: {item.article}</Text>
                                        <Text style={styles.itemText}>Section: {item.section}</Text>
                                        <Text style={styles.itemText}>Text: {item.text}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text style={styles.itemText}>No data available in this category.</Text>
                            )}
                        </View>
                    ))}
                </View>
            ) : (
                !loading && (
                    <Text style={styles.resultText}>No results yet. Enter keywords and search.</Text>
                )
            )}
        </ScrollView>
    );

}
