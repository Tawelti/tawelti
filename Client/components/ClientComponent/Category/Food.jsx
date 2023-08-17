import React  , {useState , useEffect} from 'react';
import { View, Text, Image,StyleSheet , ScrollView , TouchableOpacity, TextInput , Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const Food = () => {
    const navigation = useNavigation()
    const [data , setData]=useState([])


    const fetch = () => {
      axios.get("http://192.168.169.127:3000/api/Product/getAll/1/Food") 
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const createOrder = (productId) => {
    const Order = {
      ClientId: 1,
      Products_id: productId,
      Reservation_id: 1, 
      paymentstatus: 'false',
    };

    axios.post("http://192.168.169.127:3000/api/order/create", Order)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
  };


  useEffect(() => {
  fetch()
  },[])

  return (

    <View >
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
          <ScrollView style={styles.scrollViewContent}>
            <View style={styles.container}>
              {data.map(el => (
                <View key={el.id} style={styles.menuItem}>
                  <Image style={styles.image} source={{ uri: el.image }} />
                  <Text style={styles.itemName}>{el.productname}</Text>
                  <Text style={styles.itemPrice}>${el.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText} onPress={() => {
                    createOrder(el.id)
                    alert("added to card")
                  }}>+</Text>
                  </TouchableOpacity>
                  <View style={styles.dividerMenu}></View>
                
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row', 
        flexWrap: 'wrap',  
        justifyContent: 'space-between', 
        paddingHorizontal: 10, 
        backgroundColor : "white",
        justifyContent: 'flex-start'
      },
      menuItem: {
        width: '100%', 
        borderRadius: 15,
        marginBottom: 20,
        padding: 10,
        marginRight: 16,
        
      },
      itemName: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginBottom: 10,
        marginBottom: 2,
        flexWrap: 'wrap', 
        width: '40%', 
        marginTop : "19%"
      },
      itemPrice: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black',
        marginTop: 5,
      },
      addButton: {
        width : "26%",
        backgroundColor: '#20A090',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop : "20%",
        marginLeft : "73%"
      },
      addButtonText: {
        color: 'black',
        fontSize: 25,
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
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: '600',
      }, 
      modalView: {
        height : 500,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      button: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginBottom: 10,
      },
      buttonRed: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      }, 
      cloudContainer: {
        alignItems: 'center',
        marginTop: -300,
      },
      cloudButton: {
        backgroundColor: '#20A090',
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignItems: 'center',
      },
    Buttons : {
      backgroundColor: '#20A090',
      borderRadius: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -150,
      zIndex: 1,
    },
    dividerMenu : {
      width: "100%",
      height: "0.5%",
      top: 260,
      position: 'absolute',
      backgroundColor: '0.50px rgba(231, 175, 47, 0.75) solid'
},

    });

export default Food;