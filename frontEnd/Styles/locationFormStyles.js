import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Darker text color
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#555', // Medium text color
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc', // Light border color
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff', // White background for inputs
    fontSize: 16,
    color: '#333', // Text color
  },
  button: {
    backgroundColor: '#007BFF', // Blue button
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White text for button
  },
});

export default styles;
