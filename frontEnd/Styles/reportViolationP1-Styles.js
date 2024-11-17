import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        marginBottom: 20,
        borderRadius: 5,
    },
    resultContainer: {
        marginTop: 20,
    },
    resultText: {
        fontSize: 14,
        marginVertical: 2,
    },
    loadingText: {
        fontSize: 16,
        color: 'blue',
        fontStyle: 'italic',
        marginVertical: 10,
    },
});

export default styles;
