import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  const handleViewReport = (reportId) => {
    navigation.navigate('ReportDetails', { reportId });
  };

  const handleIssueTicket = () => {
    navigation.navigate('IssueTicket');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Municipality Dashboard</Text>

      {/* Summary Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>20</Text>
            <Text style={styles.summaryLabel}>Active Reports</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>150</Text>
            <Text style={styles.summaryLabel}>Resolved Cases</Text>
          </View>
        </View>
      </View>

      {/* Recent Reports */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recent Reports</Text>
        <TouchableOpacity style={styles.reportItem}>
          <Text style={styles.reportTitle}>Illegal Parking</Text>
          <Text style={styles.reportDetails}>Reported: Jan 3, 2025</Text>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => handleViewReport(1)}
          >
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportItem}>
          <Text style={styles.reportTitle}>Noise Complaint</Text>
          <Text style={styles.reportDetails}>Reported: Jan 2, 2025</Text>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => handleViewReport(2)}
          >
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      {/* Issue Ticket Button */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.issueButton} onPress={handleIssueTicket}>
          <Text style={styles.buttonText}>Issue a Ticket</Text>
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
  viewButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  issueButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#4caf50',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  performerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  performanceScore: {
    fontWeight: '600',
    color: '#555',
  },
});

export default Dashboard;
