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
import SignInScreen from './components/signInUp/SignInScreen';
import GoogleMap from './components/map/GoogleMap';
import Home from "./pages/ClientPages/Home"
import ClentProfile from './pages/ClientPages/ClentProfile';
import AllLounge from './pages/ClientPages/AllLounge';
import AllCoffe from './pages/ClientPages/AllCoffe';
import ALLResto from './pages/ClientPages/ALLResto';
import Comments from './pages/ClientPages/Comments';
import PlaceProfil from './components/ClientComponent/PlaceProfil';
import Claim from './components/ClientComponent/Claim';
import ReservationDetails from './components/ClientComponent/ReservationDetails';
import ProfilePayment from './components/SellerComponents/ProfilePayment';
import {StripeProvider} from "@stripe/stripe-react-native"
import Profil from './components/SellerComponents/profil';
import Reservations from './components/SellerComponents/reservations';
import NewPlace from './components/SellerComponents/Place';
import Places from './components/SellerComponents/Places';
const STRIPE_KEY="pk_test_51NdUs4K6fT8eoEEp6JPAos9zSkBbl1ag3EbDAbkq4cDPlvmda1JpBFT1uRVs2koxHNlVIzNLeJvYQntDEMaMabih00FNGtROAs"

const Stack = createStackNavigator();

export default function App() {
  return (
    <StripeProvider publishableKey={STRIPE_KEY}>
   <NavigationContainer>
  <StatusBar style="auto" /> 
   <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Loading"
  >
    <Stack.Screen name="Loading" component={LoadingScreen }  />
    <Stack.Screen name="Profil" component={Profil} />
    <Stack.Screen name="Profile" component={ProfilePayment} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="SignIN" component={SignInScreen} />
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="ClentProfile" component={ClentProfile} />
    <Stack.Screen name="AllLounge" component={AllLounge} />
    <Stack.Screen name="AllCoffe" component={AllCoffe} />
    <Stack.Screen name="ALLResto" component={ALLResto} />
    <Stack.Screen name="Comments" component={Comments} />
    <Stack.Screen name="PlaceProfil" component={PlaceProfil} />
    <Stack.Screen name="Claim" component={Claim} />
    <Stack.Screen name="ReservationDetails" component={ReservationDetails} />
      </Stack.Navigator> 
</NavigationContainer>
</StripeProvider>
  );

  }

