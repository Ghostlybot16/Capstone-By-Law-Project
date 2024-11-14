// Import statements
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from '../Styles/loginPageStyles.js'; // Importing external stylesheet js file

export default function Login({ navigation }) {
  
  // State variables 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle navigation to the landing page
  const handleBack = () => {
    navigation.navigate('LandingPage'); // Navigates back to landing page 
  };

  // Function to handle login action, then navigate to Home Page
  const handleLogin = () => {
    ToastAndroid.show('Navigate to Home Page', ToastAndroid.SHORT);
    navigation.navigate('HomePage'); // Navigates to future home page (placeholder for now)
  };

  // Function to navigate to signup page 
  const handleSignUp = () => {
    ToastAndroid.show('Navigate to Sign Up Page', ToastAndroid.SHORT);
    navigation.navigate('SignUp'); // Navigates to the signup page (to be implemented)
  };

  return (
    <View style={styles.container}>
      
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          
          <Text style={styles.backText}>
            {'<'}
          </Text>

      </TouchableOpacity>

      {/* Login title */}
      <Text style={styles.title}>Log In</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#aaa"
      />

      {/* Forgot Password Link */}
      <TouchableOpacity onPress={() => ToastAndroid.show('Forgot Password', ToastAndroid.SHORT)}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login In Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <TouchableOpacity style={styles.signUpContainer} onPress={handleSignUp}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign up here</Text>
        </Text>
      </TouchableOpacity>
</View>
  );
}




