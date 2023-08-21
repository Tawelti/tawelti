import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/NavBar';


const primaryColor = '#E7AF2F';
const secondaryColor = 'black';
const whiteColor = 'white';

const HomePage = () => {
  const navigation = useNavigation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [ref, setRef] = useState(false);
  const [places, setPlaces] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');

  const get = () => {
    axios.get('http://192.168.234.127:3000/api/places/getApp&type/vip')
      .then((res) => {
        setPlaces(res.data);
        const placeImages = res.data.map(place => place.images);
        setImages(placeImages);
        setRef(!ref);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeImage = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      let newIndex = prevIndex;
      if (direction === 'next') {
        newIndex = (prevIndex + 1) % images.length;
      } else if (direction === 'prev') {
        newIndex = (prevIndex - 1 + images.length) % images.length;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => changeImage('next'), 4000);
    return () => clearInterval(timer);
  }, [ref]);

  const SlideShow = ({ images }) => {
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 2000)
      return () => clearInterval(timer);
    }, [images]);

    return (
      <Image source={{ uri: images[currentImageIndex] }} style={styles.slideShowImage} />
    );
  };

  const handleSearch = () => {
    const filteredPlaces = places.filter((place) =>
      place.name.toLowerCase().includes(searchCategory.toLowerCase())
    );
    return filteredPlaces;
  };
  
  return (
    <View style={styles.container}>
    <ScrollView >

       <View style={[styles.header, { backgroundColor: primaryColor }]}>
        <Text style={[styles.headerText, { color: whiteColor }]}>Welcome to Tawelti</Text>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={[styles.subHeaderText, { color: whiteColor }]}>Find and Book Your Perfect Experience</Text>
      </View>


      <View style={styles.heroImage}>
        <SlideShow images={images} />
      </View>

      <View style={styles.heroImage}>
        <Text style={styles.heroTitle}>Discover Amazing Experiences</Text>
        <Text style={styles.heroDescription}>Book restaurants, Coffees, Lounges, and more!</Text>
        <View style={styles.searchBar}>
        <TextInput
            style={styles.searchInput}
            placeholder="Search for places..."
            value={searchCategory}
            onChangeText={(text) => setSearchCategory(text)}
          />
          <TouchableOpacity
            style={[styles.searchButton, { backgroundColor: primaryColor }]}
            onPress={() => setSearchCategory('')}
          >
            <Text style={[styles.searchButtonText, { color: whiteColor }]}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
 
      <View style={styles.featuredHeading}>
  <Text style={styles.featuredHeadingText}>Best Places to Explore</Text>
</View>
<View style={styles.featuredListings}>
  <ScrollView horizontal contentContainerStyle={styles.pinsContainer}>
    {handleSearch().map((place) => (
      <TouchableOpacity key={place.id} style={styles.featuredListing}>
        <Image source={{ uri: place.images }} style={styles.listingImage} />
        <Text style={styles.listingTitle}>{place.name}</Text>
        <Text style={styles.listingDescription}>{place.descreption}</Text>
        <Text style={styles.listingCategory}>{place.category}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>
<View style={styles.heroImage}>
  <Text style={styles.categoriesTitle}>Explore Categories</Text>
  <View style={styles.categories}>
    <TouchableOpacity style={styles.category}  onPress={()=>navigation.navigate("ALLResto")}>
      <View style={styles.categoryContainer}>
        <Image source={{uri: images[2]}} style={styles.categoryImage} />
        <Text style={styles.categoryName}>Restaurants</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate("AllCoffe")}>
      <View style={styles.categoryContainer}>
        <Image source={{uri: images[1]}} style={styles.categoryImage}  />
        <Text style={styles.categoryName}>Coffees</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category}  onPress={()=>navigation.navigate("AllLounge")}>
      <View style={styles.categoryContainer}>
        <Image source={{uri: images[0]}} style={styles.categoryImage} />
        <Text style={styles.categoryName}>Lounges</Text>
      </View>
    </TouchableOpacity>
  </View>
</View>

    </ScrollView>

    <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    marginTop: 5,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: whiteColor,
  },
  slideShowImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  listingCategory: {
    fontSize: 14,
    fontWeight: 'bold',
    color: primaryColor,
    marginTop: 5,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  imageButtons: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  imageButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  imageButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  heroImage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: whiteColor,
    padding: 20,
    margin: 10,
    borderRadius: 20,
    shadowColor: secondaryColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  heroTitle: {
    fontSize: 28,
    marginBottom: 15,
    textAlign: 'center',
    color: secondaryColor,
  },
  heroDescription: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    padding: 15,
    marginRight: 20,
    borderColor: primaryColor,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 16,
    color: secondaryColor,
  },
  searchButton: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },
  searchButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
 
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  categoriesTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: secondaryColor,
    marginBottom: 20,
    textAlign: 'center',
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20, 
    backgroundColor: 'transparent',
  },
  
  categoryContainer: {
    width: 120,
    height: 120,
    borderRadius: 15,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    backgroundColor: 'transparent',
  },
  categoryImage: {
    width: '100%',
    height: '80%',
    borderRadius: 15,
    opacity: 0.9, 
  },
  categoryName: {
    position: 'absolute',
    top: -10,
    fontSize: 16,
    fontWeight: 'bold',
    color: secondaryColor,
    textAlign: 'center',
  },
  pinsContainer: {
  justifyContent: 'space-between',

  },
  listingImage: {
    width: '100%', 
    height: 150, 
    borderRadius: 15,
    marginBottom: 10, 
  },
    featuredListings: {
      marginTop : 30
    },
    featuredListing: {
      width: 250, 
      marginRight: 20, 
      backgroundColor: whiteColor,
      borderRadius: 20,
      padding: 20,
      shadowColor: secondaryColor,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 10,
    },
    listingDetails: {
      marginTop: 10,
    },
    listingTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: secondaryColor,
    },
    listingDescription: {
      fontSize: 16,
      color: '#666',
    },
    featuredHeading: {
      alignItems: 'center',
      marginTop: 30,
    },
    featuredHeadingText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: secondaryColor,
    },
});


export default HomePage;


