import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      padding: 20,
    },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
    },
    backText: {
      fontSize: 24,
      color: '#000',
    },
    pageHeader: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
    pageNumber: {
      fontSize: 16,
      color: '#333',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    input: {
      width: '100%',
      padding: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginBottom: 15,
      backgroundColor: '#e0e0e0',
    },
    button: {
      width: '100%',
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
