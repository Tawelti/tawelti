import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal , TextInput} from 'react-native';
import axios from 'axios';

const Profil = () => {
  const [data , setData] = useState([])
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [refresh , setRefresh] = useState(false)

  useEffect(() => {
    fetch()
  }, [])

  const fetch = () => {
    axios.get('http://192.168.100.6:3000/api/seller/get/1')
      .then((res) => {
        console.log(res.data[0])
        setData(res.data[0]);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProfile = (name , email) => {
    axios.put('http://192.168.100.6:3000/api/seller/update/1', {
        name: name,
        email: email,
       
      })
      .then((res) => {
       setRefresh(!refresh)
       fetch()
        console.log("here");
        console.log(res)
      })
      .then((err) => {
        console.log(err);
      });
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  const handleEditProfile = () => {
 
    console.log(' new name:', nameInput);
    closeDialog();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=0&k=20&c=8l-gOboGEFSyCFXr09EguDmV0E0bFT5usAms1wyFBh8=',
          }}
          style={styles.image}
        />
      </View>
      <TouchableOpacity onPress={openDialog}>
        <Image source={require('../../assets/p.png')} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.Username} variant="displayLarge"> {data.name}</Text>
      <Text style={styles.profileUsername}>{data.email}</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDialogOpen}
        onRequestClose={closeDialog}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Profile</Text>
            <TextInput
            value={nameInput}
              style={styles.input}
              placeholder="Enter your new name"
              onChangeText={setNameInput}
            />

         <TextInput
         value={emailInput}
              style={styles.input}
              placeholder="Enter your new email"
              onChangeText={setEmailInput}
            />
            <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
              <Text style={styles.buttonText} onPress={() => {
                updateProfile(nameInput , emailInput)
                closeDialog()
                }
                
                }>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRed} onPress={closeDialog}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#E7AF2F',
  },
  containerImage: {
    width: 100,
    height: 100,
    borderRadius: 9999,
    marginTop: '35%',
    marginLeft: '38%',
    overflow: 'hidden',
    background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  Username: {
    marginTop: '-9%',
    marginLeft: '38%',
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    wordWrap: 'break-word',
  },
  profileUsername: {
    marginTop: '3%',
    color: '#757575',
    fontSize: 12,
    fontFamily: 'Hanuman',
    fontWeight: '400',
    marginLeft: '38%',
  },
  icon: {
    marginLeft: '75%',
    marginTop: '4%',
    width: 40,
    height: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  buttonRed: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profil;
