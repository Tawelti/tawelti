import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const Ratings = ({client_id}) => {
  const [defaultRating, setDefaultRating] = useState(3);
  const maxRating = [1, 2, 3, 4, 5];

  const updateRate=()=>{
    axios.put(`http://192.168.11.45:3000/api/Comments/${client_id}`,{rating:defaultRating})
    .then(()=>console.log(client_id)
    )
    .catch((err)=>console.log(err))
  }
  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => {setDefaultRating(item),updateRate()}}>
              <Image
                style={styles.starImgStyle}
                source={item <= defaultRating 
                    ? require("../../assets/starImgFilled.png")
                     : require("../../assets/starImgCorner.png")}
              />
                
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    
      <SafeAreaView style={styles.container}>
        <Image source={{uri: 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'}}/>
        <CustomRatingBar />
      

              <Image source={{uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2RPnZYAhkji98gWkSS6yuNFYPxxiszp85YrR04OsLB8zoqqBz"}}
            />
            
      </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 5,
    justifyContent:'flex-start',
    alignItems: 'center',
    
    borderRadius:10,
  //  backgroundColor:'red',
  //  height:100,
  //  padding:-100
  marginTop:-20
  },

  CustomRatingBarStyle: {
    // justifyContent: 'center',
    padding:10,
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 50,
    shadowColor: '#000',
    // shadowOffset: {
    //     width: 2,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,
      elevation: 8,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },

});

export default Ratings;
