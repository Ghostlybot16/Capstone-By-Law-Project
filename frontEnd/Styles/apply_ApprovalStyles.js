import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    message: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 40,
      color: '#666',
    },
    button: {
      width: '80%',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      backgroundColor: '#4caf50',
      marginTop: 10,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
    },
  });
export default styles;
