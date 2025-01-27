import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes the full screen height
    paddingHorizontal: 10, // Adjust padding for better width utilization
    paddingVertical: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24, // Removed 'px'
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  step: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 14,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#000',
  },
  uploadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows buttons to wrap to the next line if needed
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  uploadButton: {
    flex: 1, // Makes the button take an equal amount of space
    backgroundColor: '#e0e0e0',
    paddingVertical: 15, // Adjusted for smaller button size
    borderRadius: 5,
    textAlign: 'center',
  },
  locationButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 15,
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 20,
    gap: 10,
  },
  cancelButton: {
    backgroundColor: '#333',
    color: '#fff',
    paddingVertical: 15,
    borderRadius: 5,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    paddingVertical: 15,
    borderRadius: 5,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  imageContainer: {
    position: 'relative',
    marginRight: 10,
  },
  removeButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 4,
    backgroundColor: 'rgba(187, 184, 184, 0.5)',
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'rgba(254, 0, 0, 0.5)',
    fontSize: 12,
    fontWeight: 'bold',
  },
  singleLocationButton: {
    marginVertical: 10,
    alignItems: 'center',
  },
  mediaPreviewContainer: {
    marginVertical: 20,
  },
});

export default styles;
