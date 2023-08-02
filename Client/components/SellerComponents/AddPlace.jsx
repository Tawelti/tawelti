import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert,Button } from "react-native";

const NewPlace = () => {
  const [name, setName] = useState("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [mapLocation, setMapLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
const [patentImage,setPatentImage] =useState("")



  const AddButton = async () => {
    try {
      const data = {
        name,
        images: mainImageURL,
        description,
        phone,
        mapLocation,
        latitude,
        longitude,
        patentImage: patentImageURL,
      };

      console.log("Data:", data);
    } catch (error) {
      console.log("Error:", error);
      Alert.alert("Error", "Failed to add new place. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Images"
        value={images}
        onChangeText={setImages}
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
      <TextInput
        style={styles.input}
        placeholder="Patent Image"
        value={patentImage}
        onChangeText={setPatentImage}
      />

      <Button title="Add" onPress={AddButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 50,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
});

export default NewPlace;
