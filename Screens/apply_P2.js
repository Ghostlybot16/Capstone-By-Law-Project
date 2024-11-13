// Import statements
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../Styles/apply_P2_Styles.js'; // Importing external stylsheet JS file

/*  Apply_P2 function accepts two properties 
    onSubmit: function called when the form has been submitted 
    onBack: function called when the back button is pressed */
export default function Apply_P2({ onSubmit, onBack }) {


    /*  State variables
        
        const [val1, val2]
        val1: state variable to store input values for the input field
        val2: functions to update each each state variable when the user inputs their value. 

        val2 functions are created within the TextInput tag within the View tag in the return statement*/
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [municipality, setMunicipality] = useState('');

    // handleSubmit: calls onSubmit function by passing in object values such as DOB, Address, PostalCode, Municipality
    // This function is triggered when the "Submit" button is pressed
    const handleSubmit = () => {
        onSubmit({ dateOfBirth, address, postalCode, municipality });
  };

  return (
    // returns a view container
    <View style={styles.container}>
      
      {/* When the '<' icon is pressed, the onBack function is triggered */}
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>

      {/* A view object positioned near the top right showing that this is the 2nd page within the application form */}
      <View style={styles.pageHeader}>
        <Text style={styles.pageNumber}>Page 2/2</Text>
      </View>

      {/* Heading */}
      <Text style={styles.title}>Additional Information</Text>


        {/* Form Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (DD/MM/YYYY)"
        value={dateOfBirth}
        onChangeText={setDateOfBirth} // State variable
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Postal Code"
        value={postalCode}
        onChangeText={setPostalCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Municipality (Name of City)"
        value={municipality}
        onChangeText={setMunicipality}
      />
      
      {/* Submit button that triggers the handleSubmit (calls onSubmit) function when pressed */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}


