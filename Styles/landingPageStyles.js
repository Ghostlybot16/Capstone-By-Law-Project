import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f4f7', // Light background color
      padding: 20,
    },
    welcomeText: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 40,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#28a745', // Green button color
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 8,
      marginTop: 10,
      width: '60%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    },
    orText: {
      fontSize: 18,
      color: '#666',
      marginVertical: 20,
      fontStyle: 'italic',
    },
  });

export default styles;
