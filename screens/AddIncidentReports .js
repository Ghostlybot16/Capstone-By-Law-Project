import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Ensure this points to your Firebase configuration file

const AddIncidentReports = () => {
  // Predefined incident data
  const incidents = [
    {
      title: 'Illegal Parking',
      description: 'A car is parked illegally near the main square.',
      reported_date: new Date(),
      status: 'New', // Status of the incident
      officerAssigned: 'Officer John Doe', // Assigned officer
    },
    {
      title: 'Waste Dumping',
      description: 'Illegal dumping of waste in the residential area.',
      reported_date: new Date(),
      status: 'In Progress',
      officerAssigned: 'Officer Jane Smith',
    },
    {
      title: 'Noise Complaint',
      description: 'Excessive noise coming from a nearby event.',
      reported_date: new Date(),
      status: 'Resolved',
      officerAssigned: 'Officer Alice Johnson',
    },
  ];

  // Function to add incidents to Firestore
  const addIncidentsToDatabase = async () => {
    try {
      const incidentCollection = collection(db, 'incidents');
      for (const incident of incidents) {
        await addDoc(incidentCollection, incident);
      }
      Alert.alert('Success', 'Incidents added to the database!');
    } catch (error) {
      console.error('Error adding incidents:', error.message);
      Alert.alert('Error', 'Failed to add incidents. Please try again.');
    }
  };

  // Add incidents when the component loads
  useEffect(() => {
    addIncidentsToDatabase();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adding Incidents to Database...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AddIncidentReports;
