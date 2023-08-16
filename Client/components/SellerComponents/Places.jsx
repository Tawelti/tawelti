import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Places = () => {
  const navigation = useNavigation();
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);
  const [ref, setRef] = useState(false);

  useEffect(() => {
    fetch();
    getemail();
  }, [ref]);

  const getemail = async () => {
    try {
      const email = await AsyncStorage.getItem('userEmail');
      if (email) {
        const response = await axios.get(
          `http://192.168.11.229:3000/api/seller/email/${email}`
        );
        console.log(response.data);
        setId(response.data.id);
      } else {
        console.log('User email not found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetch = () => {
    axios
      .get(`http://192.168.11.229:3000/api/places/get/${id}`)
      .then((res) => {
        console.log('places', res.data.id);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    {data && data.length > 0 ? (
      data.map((e) => (
        <View key={e.data} style={styles.card}>
          <View style={styles.all}>
            <Image source={{ uri: e.images }} style={styles.image} />
            <Text style={styles.title}>{e.name}</Text>
            <Image
              source={{
                uri: 'https://static.thenounproject.com/png/766721-200.png',
              }}
              style={styles.rating}
            />
            <TouchableOpacity
              style={styles.ButtonMenu}
              onPress={() => navigation.navigate('MenuSeller',{id:e.id})}
            >
              <Text style={styles.buttonText}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Reservations',{id:e.id})}
            >
              <Text style={styles.buttonText}>Reservations</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))
    ) : (
      <Text>No places available</Text>
    )}
  </ScrollView>
);
};


const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  card: {
    width: 352,
    height: 154,
    backgroundColor: '#F8F8FA',
    borderRadius: 26,
    marginBottom: 15,
  },
  image: {
    width: 152,
    height: 154,
    borderTopLeftRadius: 26,
    borderBottomLeftRadius: 26,
  },
  all: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
   
  },
  rating: {
    top: 10,
    marginLeft: -85,
    width: 84,
    height: 84,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    backgroundColor: '#E7AF2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    zIndex: 1,
    height: 40,
    marginLeft: -90,
    width: 122,
    top: 106,
  },
  ButtonMenu: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    backgroundColor: '#E7AF2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    zIndex: 1,
    height: 40,
    marginLeft: -100,
    width: 122,
    top: 65,
  },
  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  drawerHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerCloseButton: {
    color: 'blue',
  },
  drawerBody: {
    marginBottom: 10,
  },
  drawerInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  drawerFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    width: 352,
  height: 154,
  backgroundColor: '#F8F8FA',
  borderRadius: 26,
  marginBottom: 15
  },
header: {
    width: 100,
    height: 88,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
headerText: {
    color: '#313131',
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: '700',
    wordWrap: 'break-word',
},
infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
},
info: {
    width: 124,
    height: 104,
    
},
infoLabel: {
    color: '#313131',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '600',
    wordWrap: 'break-word',
},
infoValue: {
    color: '#313131',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '500',
    wordWrap: 'break-word',
},
cancelButton: {
    width: 200,
    height: 35,
    padding: 10,
    backgroundColor: '#E7AF2F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
},

});

export default Places;
