import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Firestore configuration

const Dashboard = () => {
  const navigation = useNavigation();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reports from Firestore
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'incidents'));
        const fetchedReports = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Fetched Reports:', fetchedReports); // Log the fetched data
        setReports(fetchedReports);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reports:', error);
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  // Filter reports
  const newReports = reports.filter(
    (report) => report.Status?.trim().toLowerCase() === 'new'
  );
  const inProgressReports = reports.filter(
    (report) => report.Status?.trim().toLowerCase() === 'inprogress'
  );

  const handleViewReport = (reportId) => {
    navigation.navigate('ReportDetails', { reportId });
  };

  const handleIssueTicket = () => {
    navigation.navigate('IssueTicket');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Municipality Dashboard</Text>
      </View>

      {/* Overview Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{newReports.length}</Text>
            <Text style={styles.summaryLabel}>New Reports</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{inProgressReports.length}</Text>
            <Text style={styles.summaryLabel}>In-Progress Reports</Text>
          </View>
        </View>
      </View>

      {/* In-Progress Reports */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>In-Progress Reports</Text>
        {inProgressReports.map((report) => (
          <View key={report.id} style={styles.reportItem}>
            <View style={styles.reportContent}>
              <Text style={styles.reportTitle}>
                {report.Violation_Type?.trim() || 'No Title Available'}
              </Text>
              <Text style={styles.reportDetails}>
                Reported: {new Date(report.reported_date.seconds * 1000).toLocaleDateString()}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => handleViewReport(report.id)}
            >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* New Reports */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>New Reports</Text>
        {newReports.map((report) => (
          <View key={report.id} style={styles.reportItem}>
            <View style={styles.reportContent}>
              <Text style={styles.reportTitle}>
                {report.Violation_Type?.trim() || 'No Title Available'}
              </Text>
              <Text style={styles.reportDetails}>
                Reported: {new Date(report.reported_date.seconds * 1000).toLocaleDateString()}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => handleViewReport(report.id)}
            >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Issue Ticket Section */}
      <View style={styles.issueCard}>
        <TouchableOpacity style={styles.issueButton} onPress={handleIssueTicket}>
          <Text style={styles.issueButtonText}>Issue a Ticket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#0047ab',
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0047ab',
    marginBottom: 12,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryCard: {
    backgroundColor: '#eaf3fc',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  summaryValue: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0047ab',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  reportItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  reportContent: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reportDetails: {
    fontSize: 14,
    color: '#666',
  },
  viewButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#0047ab',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  issueCard: {
    marginHorizontal: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  issueButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  issueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
