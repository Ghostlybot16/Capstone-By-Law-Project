import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import JsBarcode from 'jsbarcode';
import { Canvas } from 'react-native-canvas';


const IssueTicketScreen = () => {
  const [form, setForm] = useState({
    officerName: '',
    citizenName: '',
    violationType: '',
    violationLocation: '',
    fineAmount: '',
  });

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const generateTicketNumber = () => {
    return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  };

  
const generateBarcode = async (ticketNumber) => {
  const canvas = new Canvas();
  JsBarcode(canvas, ticketNumber, {
    format: 'CODE128',
    width: 2,
    height: 100,
    displayValue: true,
  });

  const barcodeData = await canvas.toDataURL(); // Get base64 image data
  return barcodeData;
};

  const savePDF = async (htmlContent, ticketNumber) => {
    try {
      const { uri } = await Print.printToFileAsync({
        html: htmlContent,
        width: 612,
        height: 792,
      });
      const newUri = `${FileSystem.documentDirectory}ticket_${ticketNumber}.pdf`;
      await FileSystem.moveAsync({ from: uri, to: newUri });
      await shareAsync(newUri);
      Alert.alert('Success', `Ticket saved as PDF!`);
    } catch (error) {
      Alert.alert('Error', `Failed to save ticket: ${error.message}`);
    }
  };

  const handleSubmit = async () => {
    if (
      !form.officerName ||
      !form.citizenName ||
      !form.violationType ||
      !form.violationLocation ||
      !form.fineAmount
    ) {
      Alert.alert('Error', 'Please fill out all fields!');
      return;
    }

    const ticketNumber = generateTicketNumber();
    const barcodeImage = generateBarcode(ticketNumber);

    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .ticket {
              width: 100%;
              max-width: 400px;
              margin: 0 auto;
              padding: 20px;
              border: 2px solid #000;
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .ticket-number {
              font-size: 18px;
              font-weight: bold;
              text-align: center;
              color: red;
            }
            .field {
              margin: 10px 0;
            }
            .label {
              font-weight: bold;
            }
            .barcode {
              text-align: center;
              margin: 20px 0;
            }
            .fine-amount {
              font-size: 20px;
              color: red;
              text-align: center;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="ticket">
            <div class="header">
              <h1>Traffic Violation Ticket</h1>
            </div>
            <div class="ticket-number">Ticket #${ticketNumber}</div>
            <div class="field">
              <span class="label">Officer:</span> ${form.officerName}
            </div>
            <div class="field">
              <span class="label">Citizen:</span> ${form.citizenName}
            </div>
            <div class="field">
              <span class="label">Violation:</span> ${form.violationType}
            </div>
            <div class="field">
              <span class="label">Location:</span> ${form.violationLocation}
            </div>
            <div class="fine-amount">
              Fine Amount: $${form.fineAmount}
            </div>
            <div class="barcode">
              <img src="${barcodeImage}" alt="Ticket Barcode" />
            </div>
          </div>
        </body>
      </html>
    `;

    await savePDF(htmlContent, ticketNumber);

    setForm({
      officerName: '',
      citizenName: '',
      violationType: '',
      violationLocation: '',
      fineAmount: '',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Issue a Ticket</Text>

      <TextInput
        style={styles.input}
        placeholder="Officer Name"
        value={form.officerName}
        onChangeText={(text) => handleInputChange('officerName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Citizen Name"
        value={form.citizenName}
        onChangeText={(text) => handleInputChange('citizenName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Violation Type"
        value={form.violationType}
        onChangeText={(text) => handleInputChange('violationType', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Violation Location"
        value={form.violationLocation}
        onChangeText={(text) => handleInputChange('violationLocation', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fine Amount"
        keyboardType="numeric"
        value={form.fineAmount}
        onChangeText={(text) => handleInputChange('fineAmount', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Generate Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IssueTicketScreen;
