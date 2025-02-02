import ImagePicker from 'react-native-image-crop-picker';
import { requestCameraPermission, requestGalleryPermission } from './appPermissions.js';
import { ToastAndroid } from 'react-native';

export const openGallery = async (setMediaFiles) => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
        ToastAndroid.show('Gallery Permission Denied', ToastAndroid.SHORT);
        return;
    }

    try {
        const images = await ImagePicker.openPicker({
            multiple: true,
            mediaType: 'any',
        });

        const formattedFiles = images.map((image) => ({
            uri: image.path,
            type: image.mime,
            name: image.filename || `image-${Date.now()}`,
        }));

        setMediaFiles((prevFiles) => {
            const existingUris = prevFiles.map(file => file.uri);
            const newFiles = formattedFiles.filter(file => !existingUris.includes(file.uri));
            return [...prevFiles, ...newFiles];
        });

    } catch (err) {
        console.log('Error or User Cancelled: ', err);
    }
};

export const openCamera = async (setMediaFiles) => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
        ToastAndroid.show('Camera Permission Denied', ToastAndroid.SHORT);
        return;
    }

    try {
        const image = await ImagePicker.openCamera({
            mediaType: 'mixed',
            cropping: false,
        });

        const formattedFile = {
            uri: image.path,
            type: image.mime,
            name: image.filename || `image-${Date.now()}`,
        };

        setMediaFiles((prevFiles) => {
            const existingUris = prevFiles.map(file => file.uri);
            return existingUris.includes(formattedFile.uri) ? prevFiles : [...prevFiles, formattedFile];
        });

    } catch (err) {
        console.log('Error or User Cancelled: ', err);
    }
};


