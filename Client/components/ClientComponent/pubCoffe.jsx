import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Pub = () => {
    return (
        <View>
        <View style={styles.container}>
          <View style={styles.boxContainer}>
            <Image style={styles.image} source={{ uri: 'https://s3-alpha-sig.figma.com/img/655d/9696/0479238c18b8550cffde5f6339cbd3ac?Expires=1692576000&Signature=qDFAyq6MANB2bobMFYk3CFxrNtQP5u0eniX~ITfGyZPHm9OEN~fIVVljZAKZTPwPeJNUAF8VDq2jL9V3n-FQ14-m8pY-qtWevkyHGwjmZWZcsMk64pDPL0U6Pk59MDPlS7hBwaSBu1S30m7s6Y81H9oi1cuvM3swS8tCVcnX0k7DnoghfeY9cvBtrqntYW7NXXbnvP4zSfM5tnnTo2pvjtQVvsxCeVCfsSIgm7Bzu42a6zG64FRGEGdHQVIC7Pr8xp3QsewHBmzqoGvhkcDrvH~G1VDWon7I0xPy4cFWj-TaXgF64PTO5WrRaKHIOZPV3gwk6GJXqnyJ2GYK9q4xdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }} />
            <View style={styles.textContainer}>
              <Text style={[styles.text, { color: '#FCFAF9' }]}>TRY THE NEW</Text>
              <Text style={[styles.text, styles.largeText, { color: 'white' }]}>PANEER</Text>
              <Text style={[styles.text, styles.largeText, { color: 'white' }]}>TIKKA</Text>
              <Text style={[styles.text, { color: '#FCFAF9' }]}>AT</Text>
              <Text style={[styles.text, { color: 'white' }, styles.smallText]}>50% OFF</Text>
            </View>
            <Image style={{ width: 131, height: 146, left: 157, top: -245 ,  borderRadius : 500 }} source={{ uri: 'https://10play.com.au/ip/s3/2022/06/03/e6e4a3dcdd9b36cb47aa5af2ade3be89-1153586.jpg?image-profile=image_max&io=landscape' }} />
            <Image style={{ width: 121, height: 136, left: -117, top: -380, borderRadius : 500 }} source={{ uri: 'https://kernigkrafts.com/wp-content/uploads/2019/05/cafe-coffee-design-tasty.jpg'  }} />
          </View>
         
        </View>
    
        </View>
    );

    
}


const styles = StyleSheet.create({
  
    container: {
      marginTop : 150 ,
      marginLeft : 80 ,
      width: 200,
      height: 200,
      backgroundColor: '#E7AF2F',
      position: 'relative',
    },
    boxContainer: {
      width: 278,
      height: 186,
      
    },
    image: {
      width: 278,
      height: 143,
      left: 0,
      top: 22,
      borderRadius: 10,
    },
    textContainer: {
      width: 183,
      height: 119,
      left: 5,
      top: 30,
    },
    text: {
      fontSize: 15,
      fontWeight: '700',
      lineHeight: 26,
      marginTop : -50
    },
    largeText: {
      fontSize: 33,
      lineHeight: 27,
    },
    smallText: {
      fontSize: 24,
      lineHeight: 26,
    },
  });

export default Pub;
