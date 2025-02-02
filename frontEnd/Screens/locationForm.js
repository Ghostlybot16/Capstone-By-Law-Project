import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ToastAndroid } from 'react-native';
import styles from '../Styles/locationFormStyles.js';

export default function LocationForm({ route, navigation }) {
    const { location } = route.params || {}; // Get location data from navigation props or handle undefined

    useEffect(() => {
        if (!location) {
            console.log('No location data received');
        } else {
            console.log('Received location:', location);
        }
    }, [location]);

    const [formData, setFormData] = useState({
        address: location?.address || '',
        intersection: location?.intersection || '',
        postalCode: location?.postalCode || '',
        latitude: location?.latitude || '',
        longitude: location?.longitude || '',
    });

    const handleSubmit = () => {
        if (!formData.address.trim() || !formData.postalCode.trim() || !formData.intersection.trim()){
            console.error('Form Data:', formData);
            ToastAndroid.show('Address, Intersection and Postal Code are required.', ToastAndroid.SHORT);
            return;
        }
        console.log('Submitted location data:', formData);
        navigation.navigate('ReportViolationP2', { location: formData }); // Navigate back to the previous screen (reportViolationsP2)
    };

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Location Form</Text>

            <Text style={styles.label}>Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={formData.address}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, address: text }))}
            />

            <Text style={styles.label}>Closest Intersection</Text>
            <TextInput
                style={styles.input}
                placeholder="e.g. Markham Road and Kingston Road"
                value={formData.intersection}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, intersection: text }))}
            />

            <Text style={styles.label}>Postal Code</Text>
            <TextInput
                style={styles.input}
                placeholder="Postal Code"
                value={formData.postalCode}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, postalCode: text }))}
            />

            <Text style={styles.label}>Latitude</Text>
            <TextInput
                style={styles.input}
                placeholder="Latitude"
                value={formData.latitude.toString()}
                editable={false} // Read only if GPS data is available
            />

            <Text style={styles.label}>Longitude</Text>
            <TextInput
                style={styles.input}
                placeholder="Longitude"
                value={formData.longitude.toString()}
                editable={false}
            />

            <Button
                title="Submit Location"
                onPress={handleSubmit}
            />
        </View>
    );
}
