import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const IssueTicketScreen = () => {
  const [form, setForm] = useState({
    officerName: '',
    citizenName: '',
    violationType: '',
    violationLocation: '',
    fineAmount: '',
  });

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (
      !form.officerName ||
      !form.citizenName ||
      !form.violationType ||
      !form.violationLocation ||
      !form.fineAmount
    ) {
      Alert.alert('Error', 'Please fill out all fields!');
      return;
    }

    Alert.alert(
      'Ticket Generated',
      `Ticket Issued Successfully!\n\nOfficer: ${form.officerName}\nCitizen: ${form.citizenName}\nViolation: ${form.violationType}\nLocation: ${form.violationLocation}\nFine: $${form.fineAmount}`
    );

    setForm({
      officerName: '',
      citizenName: '',
      violationType: '',
      violationLocation: '',
      fineAmount: '',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Issue a Ticket</Text>

      <TextInput
        style={styles.input}
        placeholder="Officer Name"
        value={form.officerName}
        onChangeText={(text) => handleInputChange('officerName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Citizen Name"
        value={form.citizenName}
        onChangeText={(text) => handleInputChange('citizenName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Violation Type"
        value={form.violationType}
        onChangeText={(text) => handleInputChange('violationType', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Violation Location"
        value={form.violationLocation}
        onChangeText={(text) => handleInputChange('violationLocation', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fine Amount"
        keyboardType="numeric"
        value={form.fineAmount}
        onChangeText={(text) => handleInputChange('fineAmount', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Generate Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IssueTicketScreen;
