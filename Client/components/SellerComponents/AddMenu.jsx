import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';



const AddMenu = () => {
   

  

  useEffect(() => {
    
  }, []);




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

    <Button title="Add" onPress={AddButton} />
  </View>
  );
};




export default AddMenu;
