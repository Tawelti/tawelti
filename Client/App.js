import { StyleSheet, View } from 'react-native';
import Home from './pages/ClientPages/Home';
import AllCoffe from './pages/ClientPages/AllCoffe';
import ALLResto from './pages/ClientPages/ALLResto';
import AllLounge from './pages/ClientPages/ALLLounge';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AllCoffe" component={AllCoffe} />
        <Stack.Screen name="ALLResto" component={ALLResto} />
        <Stack.Screen name="AllLounge" component={AllLounge} />
        </Stack.Navigator>
      </NavigationContainer>
   
   
   
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7AF2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
