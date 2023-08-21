import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal  ,FlatList , ImageBackground} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const MenuSeller = () => {
    const navigation = useNavigation()
    const [data , setData]=useState([])
    const [isDialogOpen, setDialogOpen] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')


    const fetch = () => {
      axios.get("http://192.168.169.127:3000/api/Product/getAllwhere/1") 
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

const handleCategory = (category) => {
  navigation.navigate(category); 
};


useEffect(() => {
fetch()
},[])

  return (

    <View style={styles.containerCategory}>

    <View style={styles.divider}></View>
          <View style={styles.tabContainer}>
            <View style={styles.tab}>
              <Text style={styles.tabText} onPress={()=>navigation.navigate("DessertSeller")}>Dessert</Text>
            </View>
            <View style={styles.tab}>
              <Text style={styles.tabText} onPress={()=>navigation.navigate("FoodSeller")}>Food</Text>
            </View>
            <View style={styles.tab}>
              <Text style={styles.tabText} onPress={()=>navigation.navigate("ChichaSeller")}>Chicha</Text>
            </View>
            <View style={styles.activeTab}>
              <Text style={styles.tabText} onPress={()=>navigation.navigate("DrinksSeller")}>Drinks</Text>
            </View>
          </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDialogOpen}
        onRequestClose={closeDialog}
        style={styles.model}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Product</Text>
            <TextInput
            value={nameInput}
              style={styles.input}
              placeholder="Enter the product name"
              onChangeText={setNameInput}
            />

         <TextInput
         value={price}
              style={styles.input}
              placeholder="Enter the product price"
              onChangeText={setPrice}
            />

            <TouchableOpacity style={styles.Buttons} onPress={handleEditProfile}>
              <Text style={styles.buttonText} onPress={() => {
                AddProduct(nameInput , price , image)
                closeDialog()
                }

                }>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buttons} onPress={closeDialog}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>



          </View>
        </View>
      </Modal>
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
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  
  headerBackground: {
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
    borderRadius: 10,
  },
  addToCartButton: {
    marginTop: 10,
    backgroundColor: '#E7AF2F',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  headerTextContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  restaurantName: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  subHeaderText: {
    color: 'white',
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    height: 50,
    marginTop : 10 , 
    borderBottomColor: '#E5E5E5',
  },
  categoryButton: {
    paddingHorizontal: 20,
    marginRight: 20,
  },
  // categoryButton: {
  //   paddingHorizontal: 16,
  //   paddingVertical: 8,
  //   marginRight: 10,
  //   borderWidth: 1,
  //   borderColor: '#E7AF2F',
  //   borderRadius: 20,
  // },
  activeCategory: {
    backgroundColor: '#E7AF2F', 
  },
  categoryText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContainer: {
    marginTop: 0,
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  cardImage: {
    width: 120,
    height: '100%',
  },
  cardContent: {
    flex: 1,
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    color: '#E7AF2F',
  },
  footer: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    color: 'white',
  },
});

export default MenuSeller;
