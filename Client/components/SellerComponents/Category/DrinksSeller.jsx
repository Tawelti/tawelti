import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal  ,FlatList , ImageBackground , Animated , TextInput} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Cloud from "../Cloud.jsx"; 

const DrinksSeller = () => {

  const categoryMappings = {
    'FoodSeller': 'Food',
   'DrinksSeller': 'Drinks',
    'ChichaSeller': 'Chicha',
    'DessertSeller': 'Dessert',
  };
  const categories = Object.keys(categoryMappings);
  const navigation = useNavigation()
  const [data , setData]=useState([])
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [productname, setProductName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [activeCategory, setActiveCategory] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;


  const fetch = () => {
    axios.get("http://192.168.234.127:3000/api/Product/getAll/1/Drinks") 
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

const openDialog = () => {
  setDialogOpen(true);
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 300,
    useNativeDriver: true,
  }).start();
};

const closeDialog = () => {
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  }).start(() => {
    setDialogOpen(false);
  });
};
const handleEditProfile = () => {
  console.log(' new name:', nameInput);
  closeDialog();
};

const handleCategory = (category) => {
  navigation.navigate(category); 
};

useEffect(() => {
fetch()
},[])

const AddProduct = (productname , price , Immage) => {
  axios.post('http://192.168.234.127:3000/api/Product/create/1/Drinks', {
    productname: productname,
    price: price,
    Immage : Immage   
    })
    .then((res) => {
     fetch()
      console.log(res)
    })
    .then((err) => {
      console.log(err);
    });
};
return (

  <View style={styles.container}>
  <ImageBackground source={{uri : "https://imageio.forbes.com/specials-images/imageserve/44377845/UK-NIGHTLIFE/960x0.jpg?height=474&width=711&fit=bounds" }} style={styles.headerBackground}>
      <View style={styles.headerContent}>
        <View style={styles.headerTextContainer}>
        </View>

      </View>
    </ImageBackground>

    <ScrollView style={styles.content}>
    <FlatList
    data={categories}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.categoryContainer}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={[
          styles.categoryButton,
          activeCategory === item && styles.activeCategory,
        ]}
        onPress={() => handleCategory(item)}
      >
        <Text style={styles.categoryText}>{categoryMappings[item]}</Text>
      </TouchableOpacity>
    )}
  />
   <TouchableOpacity style={styles.addButton} onPress={AddProduct}>
        <Text style={styles.addButtonLabel}>Add New Product</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>
      {data.map((el) => (
        <View key={el.id} style={styles.card}>
          <Image source={{ uri: el.image }} style={styles.cardImage} />
          <View style={styles.cardContent}>
<Text style={styles.cardTitle}>{el.productname}</Text>
<Text style={styles.cardDescription}>{el.description}</Text>
<Text style={styles.cardPrice}>${el.price}</Text>
<TouchableOpacity
  style={styles.addToCartButton}
  onPress={() => createOrder(el.id)}
>
  <Text style={styles.addToCartButtonText}>Edit product information</Text>
</TouchableOpacity>
</View>
        </View>
      ))}
    </View>
    </ScrollView>
    <Modal
        animationType="none"
        transparent={true}
        visible={isDialogOpen}
        onRequestClose={closeDialog}
      >
        <Animated.View style={[styles.centeredView, { opacity: fadeAnim }]}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Profile</Text>
            <TextInput
              value={productname}
              style={styles.input}
              placeholder="Enter your product name"
              onChangeText={setProductName}
            />
            <TextInput
              value={price}
              style={styles.input}
              placeholder="Enter product price"
              onChangeText={setPrice}
            />
            <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRed}
              onPress={closeDialog}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
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
addButton: {
  backgroundColor: "#E7AF2F",
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 5,
  alignSelf: "center",
  marginTop: 10,
},
addButtonLabel: {
  color: "white",
  fontSize: 14,
  fontWeight: "bold",
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
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalView: {
  width: '80%',
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 20,
  alignItems: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 'bold',
  alignItems : "center"
},
input: {
  width: '100%',
  height: 40,
  borderWidth: 1,
  borderColor: '#CCCCCC',
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: 16,
},
button: {
  backgroundColor: '#2196F3',
  borderRadius: 10,
  padding: 10,
  elevation: 2,
  marginBottom: 10,
  width: '100%',
},
buttonRed: {
  backgroundColor: '#E7AF2F',
  borderRadius: 10,
  padding: 10,
  elevation: 2,
  width: '100%',
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 16,
},
addButton: {
  backgroundColor: "#E7AF2F",
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 5,
  alignSelf: "center",
  marginTop: 10,
},
addButtonLabel: {
  color: "white",
  fontSize: 14,
  fontWeight: "bold",
},
  });
export default DrinksSeller;