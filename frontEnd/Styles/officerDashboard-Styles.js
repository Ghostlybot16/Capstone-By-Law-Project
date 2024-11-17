import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      margin: '0 auto',
      maxWidth: '800px',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#4CAF50',
    },
    subHeader: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    reportCard: {
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '10px',
      marginBottom: '15px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    reportTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    reportDetail: {
      fontSize: '14px',
      marginBottom: '5px',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '15px',
    },
    viewButton: {
      flex: '1',
      backgroundColor: '#1976D2',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginRight: '5px',
      textAlign: 'center',
    },
    resolveButton: {
      flex: '1',
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginLeft: '5px',
      textAlign: 'center',
    },
    summarySection: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    summaryTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    summaryText: {
      fontSize: '16px',
      marginBottom: '5px',
    },
});

export default styles;
