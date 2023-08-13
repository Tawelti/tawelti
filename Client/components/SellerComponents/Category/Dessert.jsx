import React  , {useState , useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet , ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';




const Dessert = () => {

  const navigation = useNavigation()
  const [data , setData]= useState([])


  const fetch = () => {
      axios.get("http://192.168.191.127:3000/api/Product/getAll/1/Dessert") 
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
fetch()
  },[])
  return (

    <View style={styles.containerCategory}>
    <View style={styles.divider}></View>
    <View style={styles.tabContainer}>
      <View style={styles.tab}>
        <Text style={styles.tabText} onPress={() => navigation.navigate("Dessertt")}>Dessert</Text>
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabText} onPress={() => navigation.navigate("Food")}>Food</Text>
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabText} onPress={() => navigation.navigate("Chicha")}>Chicha</Text>
      </View>
      <View style={styles.activeTab}>
        <Text style={styles.tabText} onPress={() => navigation.navigate("Drinks")}>Drinks</Text>
      </View>
    </View>

    <ScrollView style={styles.scrollViewContent}>
      <View style={styles.container}>
        {data.map((el) => (
          <View key={el.id} style={styles.menuItem}>
            <Image style={styles.image} source={{ uri: el.image }} />
            <Text style={styles.itemName}>{el.productname}</Text>
            <Text style={styles.itemPrice}>${el.price}</Text>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Edit</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 140,
    borderRadius: 40,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '800',
    letterSpacing: 1,
    flex: 1,
    flexWrap: 'wrap',
  },
  headerImage: {
    width: "20%",
    height: "55%",
    marginRight : "100%"
  },
  menuItem: {
    width: '90%',
    height: "10.5%",
    marginTop : "1%",
    marginBottom: -55,
    

  },
  itemName: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
    marginBottom: 2,
    flexWrap: 'wrap', 
    width: '40%', 
    marginTop : "19%"
  },
  itemPrice: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: 'black',
    marginTop : 10
  },
  addButton: {
    width : "24%",
    backgroundColor: '#20A090',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : "20%",
    marginLeft : "83%"
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
  image: {
    width: 202,
    height: 206,
    left: "17%",
    top: "9%",
    position: 'absolute',
    marginLeft:"25%",
    borderRadius : 15
  },
  containerCategory: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FCFAF9',  
  },
  divider: {
    width: 320,
    height: StyleSheet.hairlineWidth,
    left: 29,
    top: 90,
    position: 'absolute',
    borderColor: '#AAAAAA',
    borderWidth: 0.5,
  },
  tabContainer: {
  width: "100%",
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 23,
  },
  tab: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'flex',
    borderBottomColor: 'transparent',
    borderBottomWidth: 2
  },
  tabText: {
    color: '#313131',
    fontSize: 19,
    fontStyle: 'italic',
    fontWeight: '500',
    flexWrap: 'wrap',
  },
  activeTab: {
    flex: 1, 
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabText: {
    color: '#E7AF2F',
    fontSize: 19,
    fontStyle: 'italic',
    fontWeight: '700',
    flexWrap: 'wrap',
  },
  containeer : {
    flexDirection: 'row', 
    flexWrap: 'wrap',  
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
  },
  dividerMenu : {
        width: "100%",
        height: "0.5%",
        top: 260,
        position: 'absolute',
        backgroundColor: '0.50px rgba(231, 175, 47, 0.75) solid'
  }
});

export default Dessert;