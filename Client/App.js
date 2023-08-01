import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/ClientPages/Home';
import NavBar from './components/NavBar';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>hello fares </Text>
      <Text>hello fares rfd  </Text> 
    
    <Home/>
    <NavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
