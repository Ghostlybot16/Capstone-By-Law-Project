import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportViolationP1 from './Screens/reportViolationP1.js';
import ReportViolationP2 from './Screens/reportViolationP2.js';
import LocationForm from './Screens/locationForm.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ReportViolationP1">
        <Stack.Screen
          name="ReportViolationP1"
          component={ReportViolationP1}
          options={{ title: 'Violation Step 1'}}
        />
        <Stack.Screen
          name="ReportViolationP2"
          component={ReportViolationP2}
          options={{ title: 'Violation Step 2'}}
        />
        <Stack.Screen
          name="LocationForm"
          component={LocationForm}
          options={{ title: 'Location Form'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//   // 0 for ReportViolationP1, 1 for ReportViolationP2
//   const [currentPage, setCurrentPage] = useState(0);

//   const navigateToP2 = () => {
//     setCurrentPage(1); // Navigate to ReportViolationP2
//   };

//   const navigateToP1 = () => {
//     setCurrentPage(0); // Navigate back to ReportViolationP1
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {currentPage === 0 && <ReportViolationP1 onNext={navigateToP2} />}
//       {currentPage === 1 && <ReportViolationP2 onBack={navigateToP1} />}
//     </View>
//   );
// }

