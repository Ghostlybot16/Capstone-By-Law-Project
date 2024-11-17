import React, { useState } from 'react';
import { View } from 'react-native';
import ReportViolationP1 from './Screens/reportViolationP1.js';
import ReportViolationP2 from './Screens/reportViolationP2.js';

// import Navigation from './navigation/navigation.js';
// import { enableScreens } from 'react-native-screens';

// enableScreens();

export default function App() {

  // 0 for ReportViolationP1, 1 for ReportViolationP2
  const [currentPage, setCurrentPage] = useState(0);

  const navigateToP2 = () => {
    setCurrentPage(1); // Navigate to ReportViolationP2
  };

  const navigateToP1 = () => {
    setCurrentPage(0); // Navigate back to ReportViolationP1
  };

  return (
    <View style={{ flex: 1 }}>
      {currentPage === 0 && <ReportViolationP1 onNext={navigateToP2} />}
      {currentPage === 1 && <ReportViolationP2 onBack={navigateToP1} />}
    </View>
  );
}

