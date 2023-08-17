import React, { useState,useEffect } from 'react';
import { View, StyleSheet, TextInput, Alert, Button, Text, Image, ActivityIndicator, Modal,TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
// require ('dotenv').config()

const categories = [
  { label: 'Coffee', value: 'coffe' },
  { label: 'Restaurant', value: 'Restaurent' },
  { label: 'Lounge Bar', value: 'lounge' },
];
const types=[
  {label:'Normal',value:'normal'},
  {label:'VIP',value:'vip'}
]
const CloudUpload = ({ setImage, buttonText }) => {
  const [modal, setModal] = useState(false);
// console.log(setImage);
  const _uploadImage = (photo) => {
    const data = new FormData();
    data.append('file', {
      uri: photo.assets[0].uri,
      type: 'image/jpg',
      name: 'image.jpg',
    });
    // console.log(data);
    data.append('upload_preset', 'tawelti');
    data.append('cloud_name', 'dnzfcueon');
    fetch('https://api.cloudinary.com/v1_1/dnzfcueon/image/upload', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);
        console.log(data);
      })
      .catch((err) => {
        Alert.alert('Error While Uploading');
      });
  };

  const handleGalleryAccess = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log('Gallery permission denied');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1.0,
      });

      if (!result.canceled) {
        _uploadImage(result);
      }
    } catch (error) {
      console.log('Error selecting image from gallery:', error);
    }
  };

  const _takePhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        console.log('Camera permission denied');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1.0,
      });

      if (!result.canceled) {
        const assets = result.assets;
        if (assets && assets.length > 0) {
          const photo = assets[0];
          _uploadImage(photo);
        }
      }
    } catch (error) {
      console.log('Error taking photo:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.buttonContainer}>
        <Button
          title={buttonText}
          color="#E7B10A" 
          style={styles.input}
          onPress={() => setModal(true)}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.buttonModalView}>
            <Button title="Camera" color="#E7B10A" onPress={_takePhoto} />
            <Button title="Gallery" color="#E7B10A" onPress={handleGalleryAccess} />
          </View>
          <Button
            title="Cancel"
            color="#E7B10A" 
            style={styles.input}
            onPress={() => setModal(false)}
          />
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const AddPlaceScreen = () => {
  const [name, setName] = useState('');
  const [descreption, setDescreption] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(''); 
  const [mapLocation, setMapLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [images, setImages] = useState('');
  const [patentImage, setPatentImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [type,setType]=useState('')
  const navigation = useNavigation();
  const [id,setId]=useState(0)


  const geocodeAddress = async (address) => {
    try {
      setLoading(true);
const apiKey = 'AIzaSyDU7Z_rvxCYiZlr4FS7O9dsoMEohohka64'
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${apiKey}`
      );

      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        setLatitude(lat.toString());
        setLongitude(lng.toString());
      }
    } catch (error) {
      console.error(error);
      setLatitude('');
      setLongitude('');
    } finally {
      setLoading(false);
    }
  };

  const handleMapLocationChange = (newLocation) => {
    setMapLocation(newLocation);
    geocodeAddress(newLocation);
  };

  useEffect(() => {
    getemail()
  }, [])

  
  const getemail = async () => {
    try {
      const email = await AsyncStorage.getItem('userEmail')
      if (email) {
        const response = await axios.get(`http://192.168.11.229:3000/api/seller/email/${email}`);
        console.log(response.data);
        console.log(response.data.id);
        setId(response.data.id)
      } else {
        console.log('User email not found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  const AddPlace = async () => {
    try {
      const placeData = {
        name,
        descreption,
        phone,
        category:category,
        mapLocation,
        Latitude: parseFloat(latitude),
        Longitude: parseFloat(longitude),
        images,
        patentimage:patentImage,
        type,
      };
      console.log('Sending place data:', placeData);

      const apiUrl = 'http://192.168.169.127:3000/api/places/create/1';

      const response = await axios.post(apiUrl, placeData);

      if (response.status === 201) {
        console.log('New place added:', response.data.place);
        Alert.alert('Success', 'New place added successfully');
        navigation.goBack()
      } else {
        throw new Error('Failed to add a new place from throw');
      }
    } catch (error) {
      console.error('Error adding place:', error.message);
      Alert.alert('Error', 'Failed to add a new place from alert');
    }
  };
  const handleCategoryChange = (categories) => {
    setSelectedCategory(categories);
  };
  return (
    <View style={styles.container}>
      <Image source={require('../Image/Tawelti.png')} style={styles.logo} />
      <Text style={styles.headerText}>Add Your Place</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={descreption}
        onChangeText={setDescreption}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
<TextInput
        style={styles.input}
        placeholder="Map Location"
        value={mapLocation}
        onChangeText={handleMapLocationChange}
      />
    <Picker
        selectedValue={category}
        style={styles.input}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat.value} label={cat.label} value={cat.value} />
        ))}
      </Picker>
      <Picker
        selectedValue={type}
        style={styles.input}
        onValueChange={(itemValue) => setType(itemValue)}
      >
        {types.map((cat) => (
          <Picker.Item key={cat.value} label={cat.label} value={cat.value} />
        ))}
      </Picker>
      <CloudUpload 
        setImage={setImages}
        buttonText={images ? 'Image Uploaded' : 'Select Image'}
        Color="black"
      />

      <CloudUpload
        setImage={setPatentImage} 
        buttonText={patentImage ? "Patent Image Uploaded" : "Select Patent Image"}
        Color="black"
      />

<TouchableOpacity
        style={styles.addButton}
        onPress={AddPlace}
      >
        <Text style={styles.buttonText}>Add Place</Text>
        {loading && <ActivityIndicator style={styles.loadingIndicator} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    right: 110,
    top: 70,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    left:50,
    top: 0,
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    top: 50,
  },

  loadingIndicator: {
    marginTop: 10,
  },
  buttonContainer: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    top:30,
    
  },
  buttonModalView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  addButton: {
    backgroundColor: '#E7B10A',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 50,
    
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 120,
    zIndex: 1,
  },
});

export default AddPlaceScreen;
