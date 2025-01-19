// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// const IncidentReports = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Incident Reports</Text>
//       </View>

//       {/* Reports Summary */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>Overview</Text>
//         <View style={styles.summaryRow}>
//           <View style={styles.summaryCard}>
//             <Text style={styles.summaryValue}>15</Text>
//             <Text style={styles.summaryLabel}>New Incidents</Text>
//           </View>
//           <View style={styles.summaryCard}>
//             <Text style={styles.summaryValue}>75</Text>
//             <Text style={styles.summaryLabel}>Ongoing Cases</Text>
//           </View>
//           <View style={styles.summaryCard}>
//             <Text style={styles.summaryValue}>200</Text>
//             <Text style={styles.summaryLabel}>Resolved Cases</Text>
//           </View>
//         </View>
//       </View>

//       {/* Recent Incidents */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>Recent Incidents</Text>
//         <TouchableOpacity style={styles.reportItem}>
//           <View style={styles.reportContent}>
//             <Text style={styles.reportTitle}>Illegal Construction</Text>
//             <Text style={styles.reportDetails}>Reported: Jan 3, 2025</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.reportItem}>
//           <View style={styles.reportContent}>
//             <Text style={styles.reportTitle}>Waste Dumping</Text>
//             <Text style={styles.reportDetails}>Reported: Jan 2, 2025</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.viewMore}>View All Incidents</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//   },
//   header: {
//     backgroundColor: '#0047ab', // Dark blue for header
//     paddingVertical: 20,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     marginHorizontal: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#0047ab',
//     marginBottom: 12,
//   },
//   summaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   summaryCard: {
//     backgroundColor: '#eaf3fc',
//     borderRadius: 8,
//     padding: 16,
//     alignItems: 'center',
//     flex: 1,
//     marginHorizontal: 8,
//   },
//   summaryValue: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#0047ab',
//   },
//   summaryLabel: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 8,
//     textAlign: 'center',
//   },
//   reportItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   reportContent: {
//     flex: 1,
//   },
//   reportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   reportDetails: {
//     fontSize: 14,
//     color: '#666',
//   },
//   viewMore: {
//     fontSize: 14,
//     color: '#0047ab',
//     textAlign: 'right',
//     marginTop: 10,
//     textDecorationLine: 'underline',
//   },
// });

// export default IncidentReports;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Import your Firestore configuration

const IncidentReports = () => {
  const [incidents, setIncidents] = useState([]); // State to store incidents data
  const [loading, setLoading] = useState(true); // State to handle loading

  // Fetch data from Firestore
  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'incidents'));
        const incidentData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Add document ID
          ...doc.data(), // Add document fields
        }));
        console.log(incidentData);
        setIncidents(incidentData); // Update state with fetched data
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error fetching incidents:', error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchIncidents();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0047ab" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Incident Reports</Text>
      </View>

      {/* Reports Summary */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{incidents.length}</Text>
            <Text style={styles.summaryLabel}>Total Active Incidents</Text>
          </View>
        </View>
      </View>

      {/* Recent Incidents */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recent Incidents</Text>
        {incidents.map((incident) => (
          <TouchableOpacity key={incident.id} style={styles.reportItem}>
            <View style={styles.reportContent}>
        <Text style={styles.reportTitle}>{incident.Violation_Type || 'No Title Available'}</Text>
              <Text style={styles.reportDetails}>
                Reported: {new Date(incident.reported_date.seconds * 1000).toLocaleDateString()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
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
    marginBottom: 20,
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
  summaryRow: {
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
    textAlign: 'center',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IncidentReports;
