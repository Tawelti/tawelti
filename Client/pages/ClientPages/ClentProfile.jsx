import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import axios from 'axios';
import Navbar from '../../components/NavBar';


const ClentProfile = () => {

    const [data , setData] = useState([])
    const [isDialogOpen, setDialogOpen] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [refresh , setRefresh] = useState(false)
 
  
  
    useEffect(() => {
      fetch()
    }, [])
  
    const fetch = () => {
      axios.get('http://192.168.208.127:3000/api/client/get/1')
        .then((res) => {
          console.log(res.data[0])
          setData(res.data);
          
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const updateProfile = (name , email) => {
      axios.put('http://192.168.208.127:3000/api/client/update/1', {
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
    <View style={styles.containerCoverture} >
      <View style={styles.containerImage}>
        <Image
         source={{ uri: data.image }}
          style={styles.image}
        />
      </View>
      <TouchableOpacity onPress={openDialog}>
        <Image source={require('../../assets/p.png')} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.Username} variant="displayLarge"> {data.name}</Text>
      <Text style={styles.profileUsername}>{data.email}</Text>
</View>
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
      <Navbar/>
    </View>

  

    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    
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
    marginTop: '-15%',
    marginLeft: '38%',
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    wordWrap: 'break-word',
  },
  profileUsername: {
    marginTop: '1%',
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
  calendarContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    marginTop : -260,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 24,
  },
  dayBox: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6.5,
    paddingRight: 7.5,
    borderRadius: 9,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  dayText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Titillium Web',
    fontWeight: '700',
    letterSpacing: 0.28,
    wordWrap: 'break-word',
  },
  selectedDayBox: {
    backgroundColor: '#0B0C1A',
  },
  selectedDayText: {
    color: '#FAFAFA',
  },
  nonSelectedDayBox: {
    backgroundColor: '#B5B6C4',
  },
  nonSelectedDayText: {
    color: '#0B0C1A',
  },
  containerCoverture: {
    width: '100%',
    height: '25%',
    backgroundColor: '#E7AF2F',
    borderRadius: 40,
    borderTopRightRadius: 40,
  },
  containerPlaces: {
    width: '90%',
    height: '40%',
    borderRadius : 40 ,
    marginTop: -330,
    marginLeft : 20,

    overflow: 'hidden',
    background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
  },
});

export default ClentProfile;
