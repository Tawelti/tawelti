import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    "https://cdn.sortiraparis.com/images/1001/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg",
    'https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_nuit_v2-scaled.jpg'
  ]

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
    const timer = setInterval(() => changeImage('next'), 4000)
    return () => clearInterval(timer)
  }, [])

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
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/590/590749.png" }}
            style={[styles.icons, { marginRight: 25 }]}
          />
      
       
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1996/1996055.png" }}
            style={[styles.icons, { marginRight: 25 }]}
          />
       
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/988/988934.png" }}
          style={styles.icons}
        />
      </View>
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
