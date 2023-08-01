import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello fares </Text>
      <Text>hello fares  dgsd</Text>
      <StatusBar style="auto" />
    
    <Home/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
