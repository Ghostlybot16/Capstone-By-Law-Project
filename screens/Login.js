import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Ensure this points to your Firebase configuration file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      window.alert('Error: Please fill in all fields.');
      return;
    }

    try {
      // Firebase authentication login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // User successfully logged in
      console.log('Logged in user:', userCredential.user);
      window.alert('Success: Login successful!');

      // Navigate to the TabsLayout (Dashboard is the default tab)
      navigation.navigate('Tabs');
    } catch (error) {
      // Handle errors from Firebase
      switch (error.code) {
        case 'auth/user-not-found':
          window.alert('Error: No user found with this email.');
          break;
        case 'auth/invalid-credential':
          window.alert('Error: Incorrect password or email.');
          break;
        case 'auth/invalid-email':
          window.alert('Error: Invalid email format.');
          break;
        default:
          window.alert('Error: Something went wrong. Please try again.');
          console.error('Login error:', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>Municipality By-Law Enforcement</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#0047ab',
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0047ab',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#0047ab',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export default Login;
