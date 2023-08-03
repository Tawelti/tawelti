import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/ClientPages/Home';
import NavBar from './components/NavBar';
import Comments from './pages/ClientPages/Comments';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text>hello fares </Text>
      <Text>hello fares   </Text>  */}
     <Comments/>
    {/* <Home/>
    <NavBar/> */}
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
