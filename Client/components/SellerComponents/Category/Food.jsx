import React  , {useState , useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet , ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Food = () => {
    const navigation = useNavigation()
    const [data , setData]=useState([])

    const fetch = () => {
      axios.get("http://192.168.208.127:3000/api/Product/getAll/1/Food") 
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
              <Text style={styles.activeTabText} onPress={()=>navigation.navigate("Dessert")}>Dessert</Text>
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
          <TouchableOpacity
        style={styles.addButtonCategory}
        onPress={() => {
         alert("hello")
        }}
      >
        <Text style={styles.addButtonTextCategory}>+</Text>
      </TouchableOpacity>
          <ScrollView style={styles.scrollViewContent}>
            <View style={styles.container}>
              {data.map(el => (
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
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 20,
        padding: 10,
      },
      itemName: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginTop: 10,
      },
      itemPrice: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black',
        marginTop: 5,
      },
      addButton: {
        backgroundColor: '#20A090',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
      },
      addButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '600',
      },
      image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 8,
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
        width: "100%",
        paddingHorizontal: 20, 
        paddingBottom: 20,
      },
      emptyProductPlaceholder: {
        width: '48%',
        height: 0, 
      },
      addButtonCategory: {
        backgroundColor: '#20A090',
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignSelf: 'center',
        marginBottom: 10,
      },
      addButtonTextCategory: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '600',
      },
    
    });
export default Food;
