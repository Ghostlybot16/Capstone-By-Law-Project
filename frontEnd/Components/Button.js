import React from 'react';
import { View, Pressable, Text, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/ionicons'; // Import FontAwesome icons
import styles from '../Styles/buttons-Styles.js'; // Import styles js file

// Button function accepts label and theme as properties 
export default function Button({ label, theme }) {
  
    // Function handle the button press. It shows a toast message 
    const handlePress = () => {
        ToastAndroid.show('You pressed a button.', ToastAndroid.SHORT); // Displays a toast message on button press
  };

    // Check to see if theme is "primary" 
    if (theme === 'primary') {
        
        // If theme is primary, display the button with the correct style 
        return (
      
            <View style={[styles.buttonContainer]}>
                <Pressable style={[styles.button]} onPress={handlePress}>

                <Ionicons
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                />

                <Text style={[styles.buttonLabel]}>{label}</Text>
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
