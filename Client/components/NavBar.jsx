import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navLink}>
        <Icon name="home" size={20} color="#333" />
        <Text style={styles.navLinkText} onPress={()=>navigation.navigate("home")}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
        <Icon name="search" size={20} color="#333"/>
        <Text style={styles.navLinkText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
        <Icon name="history" size={20} color="#333" />
        <Text style={styles.navLinkText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
        <Icon name="user" size={20} color="#333" />
        <Text style={styles.navLinkText} onPress={()=>navigation.navigate("ClentProfile")} >Profile</Text>
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
    backgroundColor: '#f1f1f1',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    color: '#333',
  },
});

export default Navbar;
