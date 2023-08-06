import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profil from '../../components/SellerComponents/profil';
import Reservations from '../../components/SellerComponents/reservations';
import NewPlace from './../../components/SellerComponents/Place';
import Places from './../../components/SellerComponents/Places';



const Stack = createStackNavigator()

const SellerProfile = () => {

  return ( 
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="Places" component={Places} />
      <Stack.Screen name="Reservations" component={Reservations} />
      <Stack.Screen name="NewPlace" component={NewPlace} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};




export default SellerProfile;
