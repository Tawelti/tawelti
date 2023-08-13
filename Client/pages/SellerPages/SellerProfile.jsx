import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profil from '../../components/SellerComponents/profil';
import Reservations from '../../components/SellerComponents/reservations';
import NewPlace from './../../components/SellerComponents/Place';
import Places from './../../components/SellerComponents/Places';
import Menu from "../../components/SellerComponents/Menu"
import Drinks from '../../components/SellerComponents/Category/Drinks';
import Food from '../../components/SellerComponents/Category/Food';
import Chicha from '../../components/SellerComponents/Category/Chicha';
import Dessertt from '../../components/SellerComponents/Category/Dessertt';



const Stack = createStackNavigator()

const SellerProfile = () => {

  return ( 
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}  >
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="Places" component={Places} />
      <Stack.Screen name="Reservations" component={Reservations} />
      <Stack.Screen name="NewPlace" component={NewPlace} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Drinks" component={Drinks} />
      <Stack.Screen name="Dessertt" component={Dessertt} />
      <Stack.Screen name="Chicha" component={Chicha} />
    </Stack.Navigator>
    
  </NavigationContainer>
  );
};




export default SellerProfile;
