import Geolocation from '@react-native-community/geolocation'; // Import Geolocation for GPS
import { requestLocationPermission } from './appPermissions'; // Import request location permission function for location permission for the app
import { ToastAndroid } from 'react-native';

/**
 * Function to handle fetching the user's current GPS location
 * @param {Function} setLocation - Function to update the location state
 * @param {Function} setManualLocation - Function to allow manual location input
 * @param {Function} setLoading - Function to handle loading state
 */
export const handleAddLocation = async (setLocation, setManualLocation, setLoading) => {

    // Set loading to true to show that location fetching is in progress
    setLoading(true);

    const hasPermission = await requestLocationPermission();

    if(!hasPermission) {
        ToastAndroid.show('Location Permission Denied. Please enter location manually.', ToastAndroid.SHORT);
        setManualLocation(true); // Allow manual entry of location information
        setLoading(false);
        return;
    }

    Geolocation.getCurrentPosition(

        // Call back function executes when location is successfully retrieved.
        (position) => {
            const { latitude, longitude } = position.coords; // Extract long and lat info from position data
            setLocation({
                latitude: latitude.toFixed(6),
                longitude: longitude.toFixed(6),
            });
            ToastAndroid.show('Location Added Successfully.', ToastAndroid.SHORT);
            setManualLocation(false); // Disable manual entry since GPS location was retrieved successfully
            setLoading(false);
        },

        // Callback function executes when there is an error in retrieving the location information
        (error) => {
            console.error('Error fetching location:', error);
            ToastAndroid.show('Unable to fetch location data. Please enter manually.', ToastAndroid.SHORT);
            setManualLocation(true); // Enable manual entry when GPS fails
            setLoading(false);
        },
        {
            enableHighAccuracy: true, // Request high-accuracy GPS location
            timeout: 20000, // 20 seconds timeout
            maximumAge: 0, // Fetch fresh data, not cached data
        }
    );
};

/**
 * Function to handle manual entry of location information
 * @param {Object} manualLocationData - Object containing manual location details (address, intersection, postal code)
 * @param {Function} setLocation - Function to update the location state
 * @param {Function} setManualLocation - Function to disable manual location input after submission
 */
export const handleManualLocationSubmit = (manualLocationData, setLocation, setManualLocation) => {

    // Check if any the required field of address, intersection and postal code is empty
    if (!manualLocationData.address.trim() || !manualLocationData.postalCode.trim() || !manualLocationData.intersection.trim()) {
        ToastAndroid.show('All fields are required for manual location entry.', ToastAndroid.SHORT);
        return;
    }

    // Update the location state with the manually entered data
    setLocation({ ...manualLocationData });

    ToastAndroid.show('Manual Location Input Successful.',ToastAndroid.SHORT);
    setManualLocation(false);
};
