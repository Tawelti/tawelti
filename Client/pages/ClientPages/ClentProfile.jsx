import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet ,  Animated, Modal , TextInput} from 'react-native';
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
      axios.get('http://192.168.11.45:3000/api/client/get/1')
        .then((res) => {
          console.log(res.data[0])
          setData(res.data[0]);
          
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const updateProfile = (name , email) => {
      axios.put('http://192.168.11.45:3000/api/client/update/1', {
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

const ClientProfil = () => {
  const [data, setData] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [favoritePlaces , setFavoritePlaces] = useState([])
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fetchData();
    getFavorite()
  }, []);

  const fetchData = () => {
    axios
      .get('http://192.168.234.127:3000/api/client/get/1')
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProfile = (name, email) => {
    axios
      .put('http://192.168.234.127:3000/api/client/update/1', {
        name: name,
        email: email,
      })
      .then((res) => {
        fetchData();
        closeDialog();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const getFavorite = () => {
    axios.get("http://192.168.234.127:3000/api/Favorite/getAllFavorites/1")
    .then(res => {
      console.log(res.data)
      setFavoritePlaces(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

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

  const handleEditProfile = () => {
    updateProfile(nameInput, emailInput);
  };
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={{uri : "https://content.wepik.com/statics/4633934/preview-page0.jpg"}}
        style={styles.coverImage}
      />
      <View style={styles.profileHeader}>
        <Image
          source={{uri : data.image}}
          style={styles.profilePicture}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.username}>{data.email}</Text>
          <TouchableOpacity onPress={() => {openDialog()}} style={styles.editButton}>
            <Text style={styles.editButtonText} >Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={isDialogOpen}
        onRequestClose={closeDialog}
      >
        <Animated.View style={[styles.centeredView, { opacity: fadeAnim }]}>
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
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRed}
              onPress={closeDialog}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
      <View style={styles.statsContainer}>
  <View style={styles.tabItem}>
    <Text style={styles.tabText}>Favorites</Text>
  </View>
</View>

<ScrollView contentContainerStyle={styles.pinsContainer} horizontal>
  <View style={styles.pin}>
    <Image
      source={{
        uri: ""
      }}
      style={styles.pinImage}
    />
    <View style={styles.pinInfo}>
      <Text style={styles.pinTitle}>The 716</Text>
      <Text style={styles.pinDescription}>see all your reservation's information</Text>
    </View>
  </View>
  

  <View style={styles.pin}>
    <Image
      source={{
        uri: "https://example.com/path-to-your-second-pin-image.jpg"
      }}
      style={styles.pinImage}
    />
    <View style={styles.pinInfo}>
      <Text style={styles.pinTitle}>Brown sugar</Text>
      <Text style={styles.pinDescription}>see all your reservation's information</Text>
    </View>
  </View>
  
</ScrollView>
<View style={styles.tabBar}>
<Text style={styles.tabText}>Reservations</Text>
</View>

<ScrollView contentContainerStyle={styles.pinsContainer} horizontal>
<View style={styles.pinsContainer}>
  <View style={styles.pin}>
    <Image
      source={{
        uri: ""
      }}
      style={styles.pinImage}
    />
    <View style={styles.pinInfo}>
      <Text style={styles.pinTitle}>Brown sugar</Text>
      <Text style={styles.pinDescription}>navigate to your favorite place</Text>
    </View>
  </View>
  <View style={styles.pin}>
    <Image
      source={{
        uri: ""
      }}
      style={styles.pinImage}
    />
    <View style={styles.pinInfo}>
      <Text style={styles.pinTitle}>The 716</Text>
      <Text style={styles.pinDescription}>navigate to your favorite place</Text>
    </View>
  </View>
  
</View>
  </ScrollView>
    </View>
    </ScrollView>   
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: 'hidden',
    left: -7,
  },
  coverImage: {
    width: '100%',
    height: 160,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    color: '#A0A0A0',
  },
  editButton: {
    backgroundColor: '#E7AF2F',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 8,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 12,
  },
  statsItem: {
    alignItems: 'center',
  },
  statsNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsLabel: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 12,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  pinsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8, 
    paddingTop: 16,
  },
  pin: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  pinImage: {
    width: '100%',
    aspectRatio: 1, 
  },
  pinInfo: {
    padding: 12,
  },
  pinTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pinDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
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

export default ClientProfil;
