import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './pages/ClientPages/Home';
import AllCoffe from './pages/ClientPages/AllCoffe';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="allCoffe" component={AllCoffe} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
     
   
    <NavBar/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7AF2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
