import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const IncidentReports = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Incident Reports</Text>

      {/* Reports Summary */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>15</Text>
            <Text style={styles.summaryLabel}>New Incidents</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>75</Text>
            <Text style={styles.summaryLabel}>Ongoing Cases</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>200</Text>
            <Text style={styles.summaryLabel}>Resolved Cases</Text>
          </View>
        </View>
      </View>

      {/* Recent Incidents */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recent Incidents</Text>
        <TouchableOpacity style={styles.reportItem}>
          <Text style={styles.reportTitle}>Illegal Construction</Text>
          <Text style={styles.reportDetails}>Reported: Jan 3, 2025</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportItem}>
          <Text style={styles.reportTitle}>Waste Dumping</Text>
          <Text style={styles.reportDetails}>Reported: Jan 2, 2025</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View All Incidents</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#007bff',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  summaryItem: {
    alignItems: 'center',
    flex: 1,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  reportItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  reportDetails: {
    fontSize: 14,
    color: '#666',
  },
  viewMore: {
    fontSize: 14,
    color: '#007bff',
    textAlign: 'right',
    marginTop: 10,
  },
});

export default IncidentReports;
