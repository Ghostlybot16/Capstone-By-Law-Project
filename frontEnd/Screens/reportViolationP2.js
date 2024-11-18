import React from 'react';
import { View, Text, TextInput, ScrollView, ToastAndroid } from 'react-native';
import styles from '../Styles/reportViolationP2-Styles.js';
import Button from '../Components/ButtonPress.js';

export default function ReportViolationP2({ onBack }) {
  const handleSubmit = () => {
    // Show a toast message saying "Report Submitted" when submit button is pressed
    ToastAndroid.show('Report Submitted', ToastAndroid.SHORT);
    console.log('Report Submitted'); // Log message for debugging
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

      <View style={styles.buttonContainer}>
        <Button
          label="Upload Images"
          theme="primary"
          onPress={() => console.log('Upload Images')}
        />
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
