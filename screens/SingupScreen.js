import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';

const SignupPage = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = async () => {
    if (!fullName || !email || !birthdate) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://192.168.2.14:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, birthdate }),
      });

      const result = await response.json();
      if (response.status === 201) {
        Alert.alert('Success', result.message);
        navigation.navigate('Login'); // Redirect to Login page after successful signup
      } else {
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      console.error('Signup Error:', error);
      Alert.alert('Error', 'Unable to sign up. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with the municipality logo URL
          style={styles.logo}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Sign Up for Municipality Portal</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Birthdate (YYYY-MM-DD)"
          placeholderTextColor="#aaa"
          value={birthdate}
          onChangeText={setBirthdate}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9', // Light green background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#c8e6c9', // Green placeholder background
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#388e3c', // Deep green text
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#388e3c', // Green button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginText: {
    fontSize: 14,
    color: '#555',
  },
  loginLink: {
    fontSize: 14,
    color: '#388e3c', // Green link
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignupPage;
