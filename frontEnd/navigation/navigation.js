import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Import Screens
import ReportViolationP1 from '../Screens/reportViolationP1.js';
import ReportViolationP2 from '../Screens/reportViolationP2.js';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ReportViolationP1">
            <Stack.Screen
              name="ReportViolationP1"
              component={ReportViolationP1}
              options={{ title: 'Step 1: Violation Details' }}
            />
            <Stack.Screen
              name="ReportViolationP2"
              component={ReportViolationP2}
              options={{ title: 'Step 2: Additional Information' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
