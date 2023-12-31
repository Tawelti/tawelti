import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal  ,FlatList , ImageBackground} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const MenuSeller = () => {

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
  const [nameInput, setNameInput] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [activeCategory, setActiveCategory] = useState(null);


  const fetch = () => {
    axios.get("http://192.168.234.127:3000/api/Product/getAllwhere/2") 
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
