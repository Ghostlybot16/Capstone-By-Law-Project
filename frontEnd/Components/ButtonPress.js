import React from 'react';
import { View, Pressable, Text, ToastAndroid } from 'react-native';
// import Ionicons from 'react-native-vector-icons/ionicons'; // Import FontAwesome icons
import styles from '../Styles/button-Styles.js'; // Import styles js file

// Button function accepts label and theme as properties
export default function Button({ label, theme }) {
    // Function handle the button press. It shows a toast message
    const handlePress = () => {
        ToastAndroid.show('You pressed a button.', ToastAndroid.SHORT); // Displays a toast message on button press
  };

    // Check if the theme is "primary" to apply specific styles
    if (theme === 'primary') {
      return (
          <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={handlePress}>
                  <Text style={styles.buttonLabel}>{label}</Text>
              </Pressable>
          </View>
      );
  }

  // Display a default button if theme is not "primary"
  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}
