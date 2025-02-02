import { PermissionsAndroid, Platform, ToastAndroid, Linking } from 'react-native';

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

    const sdkVersion = Platform.constants.Release; // Get android version

    // If Android 11 and above
    if(parseInt(sdkVersion, 10) >= 30) {
        try {
            const managePermission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.MANAGE_EXTERNAL_STORAGE,
                {
                    title: 'Manage External Storage Permission',
                    message: 'This app needs access to manage storage to select files.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );

            if (managePermission === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            } else {
                ToastAndroid.show(
                    'Permission denied. Go to settings to enable it manually.',
                    ToastAndroid.SHORT
                );
                Linking.openSettings(); // Direct user to settings app
                return false;
            }
        } catch (err) {
            console.warn('Manage Storage Permission Error:', err);
            return false;
        }
    } else { // For Android 10 and below
        return PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: 'Gallery Access Permission',
                message: 'This app needs access to your gallery to upload images.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        )
            .then((result) => result === PermissionsAndroid.RESULTS.GRANTED)
            .catch((err) => {
                console.warn('Gallery Permission Error:', err);
                return false;
            });
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
