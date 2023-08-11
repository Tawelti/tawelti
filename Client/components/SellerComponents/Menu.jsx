import React  , {useState , useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet , ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';




const Menu = () => {

  const navigation = useNavigation()
  const [data , setData]= useState([])
  

  const fetch = () => {
      axios.get("http://192.168.208.127:3000/api/Product/getAllwhere/1") 
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
          <Text style={styles.tabText} onPress={()=>navigation.navigate("Dessert")}>Dessert</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText} onPress={()=>navigation.navigate("Food")}>Food</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText} onPress={()=>navigation.navigate("Chicha")}>Chicha</Text>
        </View>
        <View style={styles.activeTab}>
          <Text style={styles.tabText} onPress={()=>navigation.navigate("Drinks")}>Drinks</Text>
        </View>
      </View>

      <ScrollView  style={styles.scrollViewContent}>
        <View style={styles.containeer}>
          {data.map((el) => (
            <View key={el.id} style={styles.menuItem}>
              <Image style={styles.image} source={{ uri: el.image }} />
              <Text style={styles.itemName}>{el.productname}</Text>
              <Text style={styles.itemPrice}>${el.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
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
    width: '100%',
    height: "12%",
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop : "5%",
    marginBottom: -10,
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
    marginTop : "20%"
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
    marginTop : "6%",
    marginLeft : "70%"
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
  image: {
    width: 204,
    height: 220,
    left: "16%",
    top: "3%",
    position: 'absolute',
    marginLeft:"25%",
    borderRadius : 40
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
    top: 130,
    position: 'absolute',
    borderColor: '#AAAAAA',
    borderWidth: 0.5,
  },
  tabContainer: {
     width: "100%",
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 60,
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
});

export default Menu;
