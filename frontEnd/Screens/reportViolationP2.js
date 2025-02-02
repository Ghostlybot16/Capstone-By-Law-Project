import React, { useState, useEffect }from 'react';
import { View, Text, TextInput, ScrollView, ToastAndroid, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { openCamera, openGallery } from '../utils/cameraGalleryUtils.js';
import { handleAddLocation, handleManualLocationSubmit } from '../utils/locationUtils.js';
import styles from '../Styles/reportViolationP2-Styles.js';
import Button from '../Components/ButtonPress.js';

export default function ReportViolationP2({ navigation }) {

  // Declare a state variable 'mediaFiles' to store the list of uploaded images or videos
  // 'setMediaFiles' is the function used to update the state
  const [mediaFiles, setMediaFiles] = useState([]);

  // Remove a selected image
  const removeImage = (uri) => {
    setMediaFiles((prevFiles) => prevFiles.filter(file => file.uri !== uri));
  };

  const [location, setLocation] = useState({}); // State for location data
  const [manualLocation, setManualLocation] = useState(false); // State to toggle manual location entry
  const [manualLocationData, setManualLocationData] = useState({
    address: '',
    intersection: '',
    postalCode: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (navigation.getState()?.routes[navigation.getState().index]?.params?.location) {
        setLocation(navigation.getState().routes[navigation.getState().index].params.location);
        setManualLocation(false); // Disable manual location mode if a location is passed through GPS
      }
    });
      return unsubscribe;
  }, [navigation]);

  const handleSubmit = () => {

    // Check if atleast one media file is uploaded
    if (mediaFiles.length === 0) {
      ToastAndroid.show('Please uploaded atleast one media file before submitting.', ToastAndroid.SHORT);
      return;
    }

    // Check if location information is entered
    if(!location.latitude && !location.longitude && !manualLocationData.address) {
      ToastAndroid.show('Location details are required before submitting.', ToastAndroid.SHORT);
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
          // keyExtractor={(_, index) => index.toString()}
          keyExtractor={(item) => item.uri}
          renderItem={({ item }) => (

            <View style={styles.imageContainer}>
              {/* Uploaded Image */}
              <Image source={{ uri: item.uri }} style={styles.uploadedImage} />

              {/* Remove button */}
              <TouchableOpacity
                style={styles.removeButtonContainer}
                onPress={() => removeImage(item.uri)}>

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
          onPress={() => openGallery(setMediaFiles)}
        />
        <Button
          label="Open Camera"
          theme="primary"
          onPress={() => openCamera(setMediaFiles)}
        />

      {/* Add Location Button */}
        <Button
          label="Add Location"
          theme="primary"
          onPress={() => handleAddLocation(setLocation, setManualLocation, setLoading)}
        />

        {/* Loading indicator */}
        {loading && (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
        )}

        {manualLocation && (
          <View>

            <Text style={styles.label}>Enter Location Manually</Text>

            <TextInput
              style={styles.input}
              placeholder="Address"
              value={manualLocationData.address}
              onChangeText={(text) => setManualLocationData((prev) => ({ ...prev, address: text }))}
            />

            <TextInput
              style={styles.input}
              placeholder="Closest Intersection"
              value={manualLocationData.intersection}
              onChangeText={(text) => setManualLocationData((prev) => ({ ...prev, intersection: text }))}
            />

            <TextInput
              style={styles.input}
              placeholder="Postal Code"
              value={manualLocationData.postalCode}
              onChangeText={(text) => setManualLocationData((prev) => ({ ...prev, postalCode: text }))}
            />

            <Button label="Submit Manual Location" theme="primary" onPress={handleManualLocationSubmit} />
          </View>
        )}

        {/* Hyperlink to view location form */}
        {location.latitude && location.longitude && (
          <TouchableOpacity
            onPress={() => navigation.navigate('LocationForm', { location })}
          >
            <Text style={styles.hyperlinkText}>View/Edit Location</Text>
          </TouchableOpacity>
        )}

        {/* spacing element */}
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{ height: 10 }} />
        <Button
          label="Submit"
          theme="primary"
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
}
