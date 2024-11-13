import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, ToastAndroid, Image } from 'react-native';
import styles from '../Styles/signUpPageStyles.js';
import SignUpImage from '../Assets/images/avatar-icon.png';

export default function Signup({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Create refs for the input fields
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const validatePassword = (inputPassword) => {
    let error = '';
    const hasMinLength = inputPassword.length >= 6;
    const startsWithCapital = /^[A-Z]/.test(inputPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword);

    if (!hasMinLength) {
      error += '• At least 6 characters\n';
    }
    if (!startsWithCapital) {
      error += '• Starts with a capital letter\n';
    }
    if (!hasSpecialChar) {
      error += '• Contains a special character\n';
    }

    setPasswordError(error);
    return hasMinLength && startsWithCapital && hasSpecialChar;
  };

  const handleNext = () => {
    if (!validatePassword(password)) {
      ToastAndroid.show('Invalid Password: Password must meet all requirements.', ToastAndroid.LONG);
      return;
    }
    if(password !== confirmPassword) {
      ToastAndroid.show('Passwords do not match.', ToastAndroid.LONG);
    }
    // After successful sign-up, proceed to the login page 
    ToastAndroid.show('Sign up successful! Redirecting to login page...', ToastAndroid.SHORT);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Landing Page')}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Image source={SignUpImage} style={styles.profileIcon} />
      
      <Text style={styles.title}>Sign Up Application</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current.focus()}
      />
      <TextInput
        ref={emailRef}
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <TextInput
        ref={passwordRef}
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => confirmPasswordRef.current.focus()}
      />
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}

      <TextInput
        ref={confirmPasswordRef}
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        returnKeyType="done"
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}


