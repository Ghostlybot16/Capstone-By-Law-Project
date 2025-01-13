import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '1', byLaw: 'Parking Violation', description: 'Unauthorized parking', status: 'Pending', citizenName: 'John Doe', email: 'john@example.com', location: 'Downtown' },
  { id: '2', byLaw: 'Noise Complaint', description: 'Excessive noise', status: 'Completed', citizenName: 'Jane Smith', email: 'jane@example.com', location: 'Central Park' },
  { id: '3', byLaw: 'Littering', description: 'Illegal dumping', status: 'Pending', citizenName: 'Bob Johnson', email: 'bob@example.com', location: 'Main Street' },
];

const ReportsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>All Reports</Text>
        <Ionicons name="person-circle-outline" size={40} color="#000" />
      </View>

      {/* Table */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>ID</Text>
        <Text style={styles.tableHeaderText}>By-law</Text>
        <Text style={styles.tableHeaderText}>Description</Text>
        <Text style={styles.tableHeaderText}>Status</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.id}</Text>
            <Text style={styles.tableCell}>{item.byLaw}</Text>
            <Text style={styles.tableCell}>{item.description}</Text>
            <Text style={styles.tableCell}>{item.status}</Text>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => navigation.navigate('ReportDetails', { report: item })}
            >
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
    padding: 10,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  viewButton: {
    padding: 5,
    backgroundColor: '#6a1b9a',
    borderRadius: 5,
  },
  viewButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ReportsScreen;
