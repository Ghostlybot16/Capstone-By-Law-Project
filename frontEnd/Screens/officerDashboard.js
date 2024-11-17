import React from 'react';
import styles from '../Styles/officerDashboard-Styles.js';

export default function OfficerDashboardScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Officer Dashboard</h1>

      <h2 style={styles.subHeader}>Reports to Review</h2>

      <div style={styles.reportCard}>
        <h3 style={styles.reportTitle}>Illegal Parking</h3>
        <p style={styles.reportDetail}>
          <strong>By-Law:</strong> PK-103
        </p>
        <p style={styles.reportDetail}>
          <strong>Time:</strong> 2:30 PM, Nov 15
        </p>
        <p style={styles.reportDetail}>
          <strong>Obstruction:</strong> Blocking a driveway
        </p>
        <p style={styles.reportDetail}>
          <strong>License Plate:</strong> ABC-1234
        </p>
        <div style={styles.buttonGroup}>
          <button style={styles.viewButton}>View Details</button>
          <button style={styles.resolveButton}>Request More Information</button>
        </div>
      </div>

      <div style={styles.reportCard}>
        <h3 style={styles.reportTitle}>Noise Complaint</h3>
        <p style={styles.reportDetail}>
          <strong>By-Law:</strong> NS-202
        </p>
        <p style={styles.reportDetail}>
          <strong>Time:</strong> 11:00 PM, Nov 14
        </p>
        <p style={styles.reportDetail}>
          <strong>Description:</strong> Loud music in a residential area
        </p>
        <div style={styles.buttonGroup}>
          <button style={styles.viewButton}>View Details</button>
          <button style={styles.resolveButton}>Request More Information</button>
        </div>
      </div>

      <div style={styles.summarySection}>
        <h3 style={styles.summaryTitle}>Summary</h3>
        <p style={styles.summaryText}>Pending Reports: 5</p>
        <p style={styles.summaryText}>Resolved Reports: 15</p>
      </div>
    </div>
  );
}
