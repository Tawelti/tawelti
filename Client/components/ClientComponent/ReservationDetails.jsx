import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ReservationDetails = () => {

  const navigation = useNavigation()

  return (
<View style={styles.containerCategory}>
<View style={styles.divider}></View>

      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <Text style={styles.tabText} onPress={()=>navigation.navigate("Booking")}>Booking</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText} onPress={()=>navigation.navigate("menu")}>Menu</Text>
        </View>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerCategory: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FCFAF9',
  },
  divider: {
    width: 320,
    height: StyleSheet.hairlineWidth,
    left: 35,
    top: 105,
    position: 'absolute',
    borderColor: '#AAAAAA',
    borderWidth: 0.5,
  },
  tabContainer: {
    width : "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top : -650,
    paddingVertical: 10,
  },
  tab: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'flex',
  },
  tabText: {
    color: '#313131',
    fontSize: 19,
    fontStyle: 'italic',
    fontWeight: '500',
    flexWrap: 'wrap',
  },
 
})
export default ReservationDetails