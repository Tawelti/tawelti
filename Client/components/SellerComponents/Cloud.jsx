import React, { useState } from 'react';
import { View, Button, StyleSheet, Modal, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Cloudinary from 'react-native-cloudinary'

const Cloud = () => {
  const [picture, setPicture] = useState('');
  const [modal, setModal] = useState(false);

  const _uploadImage = (photo, setImageUrl) => {
    const data = new FormData();
    data.append('file', {
      uri: photo.assets[0].uri,
      type: 'image/jpg',
      name: 'image.jpg',
    });
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
        setImageUrl(data.url);
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
        _uploadImage(result, setPicture);
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title={picture ? 'Image Uploaded' : 'Upload Image'}
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
              <Button title="Camera" style={styles.input} onPress={_takePhoto} />
              <Button title="Gallery" style={styles.input} onPress={handleGalleryAccess} />
            </View>
            <Button title="Cancel" style={styles.input} onPress={() => setModal(false)} />
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 6,
  },
  buttonContainer: {
    justifyContent: 'center', 
    alignItems: 'center',     
    marginBottom: 50,        
  },
  buttonModalView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    height: 120,
  },
});

export default Cloud;
