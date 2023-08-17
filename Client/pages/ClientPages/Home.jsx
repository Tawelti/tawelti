import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, TouchableOpacity,Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/NavBar';

const Home=()=>{
  const navigation = useNavigation()
  const [currentImage, setCurrentImage] = useState(0);
  const [places , setPlaces] = useState([])
  const [images , setImages] = useState([""])
  const [ref,setRef]=useState(false)
const getImage =(arr)=>{
  return arr.map((e)=>{
    return e.images
  })
}
  const get = () => {
<<<<<<< HEAD
    axios.get('http://192.168.11.229:3000/api/places/getApp&type/vip')
=======
    axios.get('http://192.168.169.127:3000/api/places/getApp&type/vip')
>>>>>>> 576ae24696473f36d6391bdec7484f82370df033
      .then((res) => {
        setPlaces(res.data)
        setImages(getImage(res.data));
        console.log(res.data);
        setRef(!ref)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  // 192.168.104.5
  const changeImage = (direction) => {
    setCurrentImage((prevIndex) => {
      let newIndex = prevIndex;
      if (direction === 'next') {
        newIndex = (prevIndex + 1) % images.length
      } else if (direction === 'prev') {
        newIndex = (prevIndex - 1 + images.length) % images.length
      }
      return newIndex
    })
  }
  useEffect(() => {
    get()
  }, [])
useEffect(()=>{
  const timer = setInterval(() => changeImage('next'), 4000)
  return () => clearInterval(timer)
},[ref])
  return (
    <View style={styles.home}>
    <View style={styles.leftright}>
    <TouchableOpacity onPress={() => changeImage('next')}>
    <Image
    source={{ uri: "https://cdn0.iconfinder.com/data/icons/user-interface-6/100/ui-16-512.png" }}
    style={styles.lefticons}
  />
  </TouchableOpacity>
      <Image
        source={{ uri: images[currentImage] }}
        style={styles.image}
      />
      <TouchableOpacity onPress={() => changeImage('prev')}>
      <Image
      source={{ uri: "https://icon-library.com/images/slide-icon/slide-icon-13.jpg" }}
      style={styles.righticons}
    />
    </TouchableOpacity>
    </View>
      <View style={styles.allicon}>
      <TouchableOpacity  onPress={()=>navigation.navigate("AllCoffe")}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/590/590749.png" }}
            style={[styles.icons, { marginRight: 25 }]}
          />
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>navigation.navigate("ALLResto")}>
            <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1996/1996055.png" }}
            style={[styles.icons, { marginRight: 25 }]}
          />
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>navigation.navigate("AllLounge")}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/988/988934.png" }}
          style={styles.icons}
        />
        </TouchableOpacity>
      </View>
      <Navbar/>
    </View>
  );
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#E7AF2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 280,
    height: 150,
    borderRadius:30,
    top:-180
  },
  icons:{
    width: 50,
    height: 50,
  },
  allicon:{
    flexDirection: 'row',
    top:-120,
    justifyContent: 'space-between',
  },
  leftright:{
    flexDirection: 'row',
  },
  lefticons:{
    width: 54,
    height: 54,
    top:-120
  },
  righticons:{
    width: 58,
    height: 58,
    top:-120
  },
})
export default Home