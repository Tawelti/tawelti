import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profil from '../../components/SellerComponents/profil';
import Reservations from '../../components/SellerComponents/reservations';
import NewPlace from './../../components/SellerComponents/Place';
import Places from './../../components/SellerComponents/Places';
import AddMenu from '../../components/SellerComponents/AddMenu';
import Menu from "../../components/SellerComponents/Menu"
import Drinks from '../../components/SellerComponents/Category/Drinks';
import Food from '../../components/SellerComponents/Category/Food';
import Chicha from '../../components/SellerComponents/Category/Chicha';
import Dessert from '../../components/SellerComponents/Category/Dessert';
import ProfilePayment from '../../components/SellerComponents/ProfilePayment';
import {StripeProvider} from "@stripe/stripe-react-native"

const STRIPE_KEY="pk_test_51NdUs4K6fT8eoEEp6JPAos9zSkBbl1ag3EbDAbkq4cDPlvmda1JpBFT1uRVs2koxHNlVIzNLeJvYQntDEMaMabih00FNGtROAs"
const Stack = createStackNavigator()

const SellerProfile = () => {

  return ( 
    <StripeProvider publishableKey={STRIPE_KEY}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}  >
    <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="Payment"  >
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="Places" component={Places} />
      <Stack.Screen name="Reservations" component={Reservations} />
      <Stack.Screen name="NewPlace" component={NewPlace} />
      <Stack.Screen name="AddMenu" component={AddMenu} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Drinks" component={Drinks} />
      <Stack.Screen name="Dessert" component={Dessert} />
      <Stack.Screen name="Chicha" component={Chicha} />

      <Stack.Screen name="Payment" component={ProfilePayment} />

    </Stack.Navigator>
    
  </NavigationContainer>
  </StripeProvider>
  );
};




export default SellerProfile;
