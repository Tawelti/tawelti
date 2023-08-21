import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';


const Navbar = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navLink}>
        <Icon name="home" size={25} color="white" onPress={()=>navigation.navigate("home")}/>
        <Text style={styles.navLinkText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
        <Icon name="history" size={25} color="white" />
        <Text style={styles.navLinkText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
      <Icon name="shopping-cart" size={25} color="white" onPress={()=>navigation.navigate("Order")} />
        <Text style={styles.navLinkText}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
        <Icon name="user" size={25} color="white" onPress={()=>navigation.navigate("ClientProfile")}/>
        <Text style={styles.navLinkText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width : "100%",
    backgroundColor: '#1D1F24',
    position: 'absolute',
    bottom: -2,
    left: 0,
    right: 0,
    borderRadius : 21
  },
  navLink: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: '100%',
  },
  navLinkText: {
    marginTop: 5,
    fontSize: 12,
    color: 'white',
  },
});

export default Navbar;
