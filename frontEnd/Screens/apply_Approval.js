// Import statements
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles/apply_ApprovalStyles.js';

/*  applyApproval function accepts 2 properties 
    onLogout: function triggered when the "Log Out" button is pressed
    onContactSupport: function triggered when the "Contact Support" button is pressed */
export default function applyApproval({ onLogout, onContactSupport }) {
    return (
      <View style={styles.container}>
        
        {/* A text element showing a thank you message and informing the user to wait for next steps*/}
        <Text style={styles.title}>Thank You for your application!</Text>
        <Text style={styles.message}>
          Please wait for an approval email from the municipal office.
        </Text>
        
        {/* TouchableOpacity components that allows the buttons to be pressable and call their respective 
            functions. 
            
            Log Out button calls onLogout and logs off the user 
            Contact Support button calls onContactSupport and allows the user to contact support */}
        <TouchableOpacity style={styles.button} onPress={onLogout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onContactSupport}>
          <Text style={styles.buttonText}>Contact Support</Text>
        </TouchableOpacity>

      </View>
    );
  }
