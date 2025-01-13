import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReportDetailsScreen = ({ route }) => {
  const { report } = route.params; // Get the passed report data

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Information</Text>
      <View style={styles.field}>
        <Text style={styles.label}>Citizen Full Name:</Text>
        <Text style={styles.value}>{report.citizenName || 'N/A'}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{report.email || 'N/A'}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Violation Type:</Text>
        <Text style={styles.value}>{report.byLaw}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Violation Location:</Text>
        <Text style={styles.value}>{report.location || 'N/A'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
});

export default ReportDetailsScreen;
