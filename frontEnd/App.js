import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../CapstoneByLawApp/Screens/landingPage.js';
import Login from '../CapstoneByLawApp/Screens/loginPage.js';
import Signup from '../CapstoneByLawApp/Screens/signUpPage.js';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        
        <Stack.Screen 
          name="LandingPage" 
          component={LandingPage} 
          options={{ headerShown: false}} />

        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Log In' }} />

        <Stack.Screen 
          name="SignUp" 
          component={Signup} 
          options={{ title: 'Sign Up' }} />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}
