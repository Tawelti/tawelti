import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput , Button , Animated } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Places from './Places';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profil = () => {
  const navigation = useNavigation()
  const [data , setData] = useState([])
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [refresh , setRefresh] = useState(false)
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [id,setId]=useState(0)



  useEffect(() => {
    fetch()
    getemail()
  }, [])

  const getemail = async () => {
    try {
      const email = await AsyncStorage.getItem('userEmail')
      if (email) {
        const response = await axios.get(`http://192.168.11.45:3000/api/seller/email/${email}`);
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
  const fetch = () => {

    axios.get(`http://192.168.11.45:3000:3000/api/seller/get/${id}`)
      .then((res) => {
        console.log(res.data[0])
        setData(res.data[0]);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetch()
  }, [])

  const updateProfile = (name , email) => {
    axios.put(`http://192.168.11.45:3000:3000/api/seller/update/${id}`, {
        name: name,
        email: email,
       
      })
      .then((res) => {
        setRefresh(!refresh)
       fetch()
        console.log(res)
      })
      .then((err) => {
        console.log(err);
      });
  };
  const updateProfileImage = (name , email) => {
    axios.put(`http://192.168.11.45:3000/api/seller/updateImage/${id}`, {
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
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  
  const closeDialog = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setDialogOpen(false);
    });
  };
  
  const openLogoutPopup = () => {
    setLogoutPopupOpen(true)
  };

  const closeLogoutPopup = () => {
    setLogoutPopupOpen(false)
  };
  const handleEditProfile = () => {
    console.log(' new name:', nameInput);
    closeDialog();
  };
  
    
    return (
      <View style={styles.container}>
      <View style={styles.containerCoverture}>
        <View style={styles.containerImage}>
          <Image source={{ uri: data.image }} style={styles.image} />
        </View>
        <TouchableOpacity onPress={openDialog}>
          <Image source={require('../../assets/p.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText} variant="displayLarge">
            {data.name}
          </Text>
          <Text style={styles.profileUsername}>{data.email}</Text>
        </View>
      </View>
  
      {isLogoutPopupOpen && (
        <View style={styles.logoutPopup}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closePopupButton} onPress={closeLogoutPopup}>
            <Text style={styles.closePopupButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    
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
            <TouchableOpacity style={styles.button} onPress={ () => {
              updateProfile(nameInput , emailInput)
              closeDialog()
              }}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRed} onPress={closeDialog}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("AddPlaceScreen")}>
        <View style={styles.addButtonContainer}>
          <Text style={styles.addButtonLabel}>Add Place</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.calendarContainer}>
      </View>
  
      <View style={styles.containerPlaces}>
        <Places/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutPopup: {
    position: 'absolute',
    top: '10%',
    right: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    zIndex: 2,
    elevation: 5,
  },
  logoutButton: {
    backgroundColor: '#FF0000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closePopupButton: {
    backgroundColor: '#888888',
    borderRadius: 10,
    padding: 10,
  },
  closePopupButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  containerImage: {
    width: 100,
    height: 100,
    borderRadius: 9999,
    marginTop: '35%',
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: '#D9D9D9',
  },
  containerCoverture: {
    height: '25%',
    backgroundColor: '#E7AF2F',
    borderRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPlaces: {
    height: '100%',
width : "100%" ,
    borderRadius: 40,
    marginTop: 500,
    justifyContent: 'center',
    alignItems: 'center',
    
    overflow: 'hidden',
    backgroundColor: '#D9D9D9',
  },
  usernameContainer: {
    marginTop: 12,
    alignSelf: 'center',
    alignItems: 'center',
  },


  image: {
    width: '100%',
    height: '100%',
  },
  icon: {
    position: 'absolute',
    top: 12,
    left: 70,
    width: 34,
    height: 34,
  },


  usernameText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
  profileUsername: {
    marginTop: 2,
    color: '#757575',
    fontSize: 12,
    fontWeight: '400',
  },


  logoutPopup: {
    position: 'absolute',
    top: '10%',
    right: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    zIndex: 2,
    elevation: 5,
  },
  logoutButton: {
    backgroundColor: '#FF0000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closePopupButton: {
    backgroundColor: '#888888',
    borderRadius: 10,
    padding: 10,
  },
  closePopupButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    width: '100%',
  },
  buttonRed: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },

  addButton: {
    marginTop: 70,
    alignSelf: 'center',
    width: '70%',
  },
  addButtonContainer: {
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonLabel: {
    color: '#0B0C1A',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  calendarContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: -470,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  dayBox: {
    borderRadius: 9,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 7.5,
  },
  dayText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems : "center"
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    width: '100%',
  },
  buttonRed: {
    backgroundColor: '#E7AF2F',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },



});

export default Profil;
