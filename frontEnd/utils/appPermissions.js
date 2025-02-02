import { PermissionsAndroid, Platform } from 'react-native';

// Constants for permissions and dialog messages
const PERMISSIONS = {
    READ_EXTERNAL_STORAGE: PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    CAMERA: PermissionsAndroid.PERMISSIONS.CAMERA,
    ACCESS_FINE_LOCATION: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
};

const MESSAGES = {
    READ_EXTERNAL_STORAGE: {
        title: 'Gallery Access Required',
        message: 'We need access to your gallery to upload images.',
    },
    CAMERA: {
        title: 'Camera Access Required',
        message: 'We need access to your camera to take photos or videos.',
    },
    ACCESS_FINE_LOCATION: {
        title: 'Location Access Required',
        message: 'We need access to your location to add it to your report.',
    },
};

// Request gallery (read external storage) permission
export const requestGalleryPermission = async () => {
    if (Platform.OS !== 'android') {
        return true; // iOS automatically grants permissions
    }

    try {
        const granted = await PermissionsAndroid.request(
            PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: MESSAGES.READ_EXTERNAL_STORAGE.title,
                message: MESSAGES.READ_EXTERNAL_STORAGE.message,
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        );

        console.log('Gallery Permission Granted:', granted === PermissionsAndroid.RESULTS.GRANTED);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn('Gallery Permission Error', err);
        return false;
    }
};

// Request Camera Permission
export const requestCameraPermission = async () => {
    if (Platform.OS !== 'android') {
        return true; // iOS automatically grants permission
    }

    try {
        const granted = await PermissionsAndroid.request(
            PERMISSIONS.CAMERA,
            {
                title: MESSAGES.CAMERA.title,
                message: MESSAGES.CAMERA.message,
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        );

        console.log('Camera Permission Granted:', granted === PermissionsAndroid.RESULTS.GRANTED);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn('Camera Permission Error:', err);
        return false;
    }
};

// Request Location Permission
export const requestLocationPermission = async () => {
    if (Platform.OS !== 'android') {
        return true; 
    }

    try {
        const granted = await PermissionsAndroid.request(
            PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: MESSAGES.ACCESS_FINE_LOCATION.title,
                message: MESSAGES.ACCESS_FINE_LOCATION.message,
                buttonNeutral: 'Ask me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        );

        console.log('Location Permission Granted:', granted === PermissionsAndroid.RESULTS.GRANTED);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn('Location Permission Error: ', err);
        return false;
    }
};
