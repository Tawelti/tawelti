import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Modal, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Cloud = () => {
  const [picture, setPicture] = useState('');
  const [modal, setModal] = useState(false);

  const _uploadImage = (photo) => {
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', '_DemoEmployee');
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
        setPicture(data.url);
        setModal(false);
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

      if (!result.cancelled) {
        const uri = result.uri;
        const type = 'image/jpg';
        const name = result.fileName;
        const source = { uri, type, name };
        console.log(source);
        _uploadImage(source);
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

      if (!result.cancelled) {
        const uri = result.uri;
        const type = 'image/jpg';
        const name = result.fileName;
        const source = { uri, type, name };
        console.log(source);
        _uploadImage(source);
      }
    } catch (error) {
      console.log('Error taking photo:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.bottomButtonContainer}>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 6,
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
  bottomButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10, // Change 'top' to 'bottom' here
  },
});


export default Cloud;
