import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Places = () => {
    const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    axios
      .get('http://192.168.208.127:3000/api/places/get/1')
      .then((res) => {
        console.log("places",res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <View >
      {data.map((e) => (
      
        <View key={e.data} style={styles.card}>
          <View style={styles.all}>
            <Image source={{ uri: e.images }} style={styles.image} />
            <Text style={styles.title}>{e.name}</Text>
            <Image
              source={{ uri: 'https://static.thenounproject.com/png/766721-200.png' }}
              style={styles.rating}
            />
            <TouchableOpacity style={styles.ButtonMenu}   onPress={() => navigation.navigate('Menu')}>
              <Text style={styles.buttonText}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}   onPress={() => navigation.navigate('Reservations')}>
              <Text style={styles.buttonText}>Reservations</Text>
            </TouchableOpacity>
          </View>
        </View>

      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    containerPlaces: {
        width: '90%',
        height: '40%',
        borderRadius : 40 ,
        marginTop: 100,
        marginLeft : 20,
    
        overflow: 'hidden',
        background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
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
