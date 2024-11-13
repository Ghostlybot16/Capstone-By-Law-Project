import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
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
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#333',
    },
    label:{
      alignSelf: 'flex-start',
      marginLeft: 20,
      fontSize: 16,
      color: '#333',
    },
    input: {
      width: '90%',
      height: 50,
      backgroundColor: '#e0e0e0',
      borderRadius: 8,
      paddingHorizontal: 16,
      marginVertical: 10,
      color: '#333',
    },
    forgotPassword: {
      alignSelf: 'flex-start',
      marginLeft: 20,
      marginTop: 10,
      fontSize: 14,
      color: '#4CAF50',
      textDecorationLine: 'underline',
    },
    loginButton: {
      width: '90%',
      height: 50,
      backgroundColor: '#333333',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    signUpContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
    signUpText: {
      fontSize: 14,
      color: '#666',
    },
    signUpLink: {
      color: '#4CAF50',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
});
export default styles;
