import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/ClientPages/Home';
import NavBar from './components/NavBar';
import Comments from './pages/ClientPages/Comments';
import AllCoffe from './pages/ClientPages/AllCoffe';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  const Stack = createStackNavigator();
  return (
    
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllCoffe" component={AllCoffe} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
      <StatusBar style="auto" />
      {/* <Text>hello fares </Text>
      <Text>hello fares   </Text>  */}
      <Home/>
      
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