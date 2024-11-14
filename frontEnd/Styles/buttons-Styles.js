import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
      borderWidth: 4,
      borderColor: '#ffd33d',
      borderRadius: 18,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#fff',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#25292e',
      fontSize: 16,
    },
  });
export default styles;
