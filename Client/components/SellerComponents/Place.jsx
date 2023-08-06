import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Button, Text, Image } from "react-native";
import axios from "axios";
import Cloud from "./Cloud"; 

const NewPlace = () => {
  const [name, setName] = useState("");
  const [descreption, setDescreption] = useState("");
  const [phone, setPhone] = useState("");
  const [mapLocation, setMapLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [images, setImages] = useState("");
  const [patentImage, setPatentImage] = useState("");

  const AddPlace = async () => {
    try {
      const placeData = {
        name,
        descreption,
        phone,
        mapLocation,
        Latitude: parseFloat(latitude),
        Longitude: parseFloat(longitude),
        images,
        patentImage,
      };
  
      const apiUrl = 'http://192.168.240.150:3000/api/places/add/1';
  
      const response = await axios.post(apiUrl, placeData);
  
      if (response.status === 201) {
        console.log('New place added:', response.data.place);
        Alert.alert('Success', 'New place added successfully');
      } else {
        throw new Error('Failed to add a new place');
      }
    } catch (error) {
      console.error('Error adding place:', error.message);
      Alert.alert('Error', 'Failed to add a new place');
    }
  };
  

  return (
    <View style={styles.container}>
      <Image source={require("../Image/Tawelti.png")} style={styles.logo} />

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
        onChangeText={setMapLocation}
      />

      <TextInput
        style={styles.input}
        placeholder="Latitude"
        value={latitude}
        onChangeText={setLatitude}
      />

      <TextInput
        style={styles.input}
        placeholder="Longitude"
        value={longitude}
        onChangeText={setLongitude}
      />

      <Text style={styles.text}>Select Image of place</Text>
      <Cloud
        setImage={setImages} 
        buttonText={images ? "Image Uploaded" : "Select Image"}
      />

      <Text style={styles.text}>Select Patent Image</Text>
      <Cloud
        setImage={setPatentImage} 
        buttonText={patentImage ? "Patent Image Uploaded" : "Select Patent Image"}
      />

      <Button title="Add" onPress={AddPlace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 100,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    marginBottom: -15, 
  },
});

export default NewPlace;
