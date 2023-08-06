import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Button, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

const NewPlace = () => {
  const [name, setName] = useState("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [mapLocation, setMapLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [patentImage, setPatentImage] = useState("");

  const AddButton = async () => {
    try {
      const data = {
        name,
        images,
        description,
        phone,
        mapLocation,
        latitude,
        longitude,
        patentImage,
      };

      const response = await axios.post(
        "http://192.168.101.7:3000/api/places/create",
        data
      );

      console.log("Response from server:", response.data);
      Alert.alert("Success", "New place added successfully!");
    } catch (error) {
      console.log("Error:", error);
      Alert.alert("Error", "Failed to add a new place. Please try again.");
    }
  };

  const handleMapLocationChange = (newRegion) => {
    setMapLocation("");
    setMapRegion(newRegion);
    setLatitude(newRegion.latitude.toString());
    setLongitude(newRegion.longitude.toString());
  };

  const handleSearchLocation = () => {
    // Implement your location search logic here
    // For example, you can use Geocoding APIs to get latitude and longitude from the location name
    // For demonstration purposes, I am just setting random values for latitude and longitude
    const randomLatitude = Math.random() * 180 - 90;
    const randomLongitude = Math.random() * 360 - 180;
    setLatitude(randomLatitude.toString());
    setLongitude(randomLongitude.toString());
    setMapRegion({
      ...mapRegion,
      latitude: randomLatitude,
      longitude: randomLongitude,
    });
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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
        onSubmitEditing={handleSearchLocation} // Search for the location when the user submits the input
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

      {/* Google Map */}
      <MapView
        style={styles.map}
        region={mapRegion}
        onRegionChange={handleMapLocationChange}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          }}
        />
      </MapView>

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
  map: {
    width: 300,
    height: 200,
    marginVertical: 10,
  },
});

export default NewPlace;
