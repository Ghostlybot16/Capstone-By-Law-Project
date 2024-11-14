// Import statements
import React from 'react';

// Importing View (container), Text (to display text), TouchableOpacity (to make views response to touches)
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../Styles/landingPageStyles.js'; // Importing stylesheet


/*  The landingPage function accepts two properties, onLogin and onSignup. 
    onLogin: represents the function that is called when the user presses the Login button
    onSignup: represents the function that is called when the user pressed the Signup button
    landingPage: function calls onLogin or onSignup when the respective buttons are pressed
*/
export default function LandingPage({ navigation }) {
  
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    
    <View style={styles.container}>
      
      {/* Welcome text  */}
      <Text style={styles.welcomeText}>Welcome to the App</Text>

        {/* TouchableOpacity allows the Login button to be pressed, onLogin function called when pressed*/}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text> 
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

        {/* TouchableOpcaity allows the Sign Up button to be pressed, onSignUp function called when pressed */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}


