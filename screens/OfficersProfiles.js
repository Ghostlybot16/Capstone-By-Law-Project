import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const OfficerProfiles = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Officer Profiles</Text>
      </View>

      {/* Officer List */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Team Overview</Text>
        <TouchableOpacity style={styles.profileItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.profileImage}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileRole}>Senior Officer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.profileImage}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Jane Smith</Text>
            <Text style={styles.profileRole}>Field Officer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.profileImage}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Alice Johnson</Text>
            <Text style={styles.profileRole}>Compliance Officer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View All Officers</Text>
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
    backgroundColor: '#0047ab', // Dark blue for a formal header
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
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  profileRole: {
    fontSize: 14,
    color: '#666',
  },
  viewMore: {
    fontSize: 14,
    color: '#0047ab',
    textAlign: 'right',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default OfficerProfiles;
