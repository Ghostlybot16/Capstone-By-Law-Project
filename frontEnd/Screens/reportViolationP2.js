import React, { useState }from 'react';
import { View, Text, TextInput, ScrollView, ToastAndroid, Image, FlatList, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { requestGalleryPermission, requestCameraPermission } from '../utils/appPermissions.js';
import styles from '../Styles/reportViolationP2-Styles.js';
import Button from '../Components/ButtonPress.js';

export default function ReportViolationP2({ onBack }) {

  // Declare a state variable 'mediaFiles' to store the list of uploaded images or videos
  // 'setMediaFiles' is the function used to update the state
  const [mediaFiles, setMediaFiles] = useState([]);

  // Open Gallery
  const openGallery = async () => {

    // Check if the user has permissions to access the gallery
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      ToastAndroid.show('Gallery Permission Denied', ToastAndroid.SHORT);
      return;
    }

    try {
      const images = await ImagePicker.openPicker({
        multiple: true, // Allow selection of multiple images
        mediaType: 'any', // Allow both photos and videos
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

  // Open Camera
  const openCamera = async () => {

    // Check if the user has permissions to access the camera
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      ToastAndroid.show('Camera Permission Denied', ToastAndroid.SHORT);
      return;
    }

    try {
      const image = await ImagePicker.openCamera({
        mediaType: 'mixed', // Allow both image and video capture
        cropping: false, // Disable cropping
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

    // const cameraOptions = {
    //   mediaType: 'mixed', // Allow both image and video capture
    //   cameraType: 'back', // Use the back camera by default
    //   saveToPhotos: true, // Save captured media to the photos app
    // };

    // launchCamera(cameraOptions, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled camera');
    //   } else if (response.errorCode) {
    //     console.log('Camera Error: ', response.errorMessage);
    //   } else if (response.assets) {
    //     // Process captured media
    //     const media = response.assets[0];
    //     const formattedFile = {
    //       uri: media.uri,
    //       type: media.type,
    //       name: media.fileName || `media-${Date.now()}`,
    //     };
    //     setMediaFiles((prevFiles) => [...prevFiles, formattedFile]);
    //   }
    // });

  };

  // Remove a selected image
  const removeImage = (uri) => {
    setMediaFiles((prevFiles) => prevFiles.filter(file => file.uri !== uri));
  };

  const handleSubmit = () => {
    if (mediaFiles.length === 0) {
      ToastAndroid.show('Please uploaded atleast one media file before submitting.', ToastAndroid.SHORT);
      return;
    }

    // Show a toast message saying "Report Submitted" when submit button is pressed
    ToastAndroid.show('Report Submitted', ToastAndroid.SHORT);
    console.log('Report Submitted', mediaFiles); // Log message for debugging
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      {/* App header */}
      <Text style={styles.header}>Report a Violation</Text>
      <Text style={styles.step}>Step 2</Text>

      <Text style={styles.sectionTitle}>Illegal Parking</Text>
      <Text style={styles.sectionDescription}>
        Please provide the required details about the restricted zone, and include any signs or markings
      </Text>

      <Text style={styles.label}>By-Law Citation</Text>
      <TextInput style={styles.input} placeholder="PK-103" />

      <Text style={styles.label}>Time of Violation</Text>
      <TextInput style={styles.input} placeholder="Enter Time" />

      <Text style={styles.label}>Obstruction Caused</Text>
      <TextInput style={styles.input} placeholder="Details on Obstruction" />

      <Text style={styles.label}>Vehicle Information</Text>
      <TextInput style={styles.input} placeholder="License Plate Number" />
      <TextInput style={styles.input} placeholder="Vehicle Make/Model" />
      <TextInput style={styles.input} placeholder="Vehicle Color" />

      {mediaFiles.length === 0 ? (
        <Text style={styles.placeholderText}>No images uploaded. Tap "Upload Images" to add.</Text>
      ) : (
        // Display uploaded images,  Use FlatList to render the list of uploaded images or videos
        <FlatList
          data={mediaFiles}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (

            <View style={styles.imageContainer}>
              {/* Uploaded Image */}
            <Image source={{ uri: item.uri }} style={styles.uploadedImage} />

             {/* Remove button */}
            <TouchableOpacity
              style={styles.removeButtonContainer}
              onPress={() => removeImage(item.uri)}
              >
                <Text style={styles.removeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          horizontal // Make the FlatList horizontal so the uploaded media files are displayed in a row
          style={styles.mediaPreviewContainer}
       />
      )}


      {/* Buttons for Upload Images, Add Location, Back and Submit */}
      <View style={styles.buttonContainer}>
        <Button
          label="Upload Images"
          theme="primary"
          onPress={openGallery}
        />
        <Button
          label="Open Camera"
          theme="primary"
          onPress={openCamera}
        />

      {/* Add Location Button */}
        <Button
          label="Add Location"
          theme="primary"
          onPress={() => console.log('Add Location')}
        />
      <Button
          label="Back"
          theme="primary"
          onPress={onBack}
        />
        <Button
          label="Submit"
          theme="primary"
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
}
