import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing Screens
import Dashboard from './screens/Dashboard';
import IncidentReports from './screens/IncidentReports';
import OfficerProfiles from './screens/OfficersProfiles';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import IssueTicket from './screens/IssueTicketScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
function TabsLayout() {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Incidents" component={IncidentReports} />
      <Tab.Screen name="Officers" component={OfficerProfiles} />
    </Tab.Navigator>
  );
}

// Stack Navigator for Login, Forgot Password, Tabs, and IssueTicket
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login and ForgotPassword Screens */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        {/* Tab Navigation for Dashboard and Other Tabs */}
        <Stack.Screen name="Tabs" component={TabsLayout} options={{ headerShown: false }} />

        {/* IssueTicket Screen */}
        <Stack.Screen name="IssueTicket" component={IssueTicket} options={{ title: 'Issue a Ticket' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
