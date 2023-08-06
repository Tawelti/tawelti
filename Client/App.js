import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import LoadingScreen from './components/LoadingScreen';
import SignUpScreen from './components/signInUp/SignUpScreen';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import Cloud from './components/SellerComponents/Cloud';
import NewPlace from './components/SellerComponents/Place';
import SignInScreen from './components/signInUp/SignInScreen';
import GoogleMap from './components/map/GoogleMap';

const Stack = createStackNavigator();

export default function App() {
  return (

   <NavigationContainer>
  <StatusBar style="auto" /> 
   <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Loading"
  >
    <Stack.Screen name="Loading" component={LoadingScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="SignIN" component={SignInScreen} />
  </Stack.Navigator> 
</NavigationContainer>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,


    alignItems: 'center',
    justifyContent: 'center',
  },
});

