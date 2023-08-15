import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Button, Text } from "react-native";
import axios from "axios";
import Cloud from "./Cloud"; 

const NewPlace = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [mapLocation, setMapLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [images, setImages] = useState("");
  const [patentImage, setPatentImage] = useState("");


  const AddButton = async () => {
    try {
      const data = {
        name,
        description,
        phone,
        mapLocation,
        latitude,
        longitude,
        images,
        patentImage,
      };

      const response = await axios.post(
        "http://192.168.1.77:3000/api/places/create/:Seller_id",
        data
      );
      console.log("Response from server:", response.data);
      Alert.alert("Success", "New place added successfully!");
    } catch (error) {
      console.log("Error:", error);
      Alert.alert("Error", "Failed to add a new place. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
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
        value={description}
        onChangeText={setDescription}
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

      {/* <Button title="Add" onPress={AddButton} /> */}
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
