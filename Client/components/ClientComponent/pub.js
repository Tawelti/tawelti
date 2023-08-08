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
            <Image style={{ width: 121, height: 186, left: 157, top: -245 }} source={{ uri: 'https://s3-alpha-sig.figma.com/img/7dd8/e371/dddf3b5c582d0bda66e83d2eff498699?Expires=1692576000&Signature=DkS9NuIzSrne4YLiMfxdGT3~gobUeT8FZPiZwAzUqz-ieWfCPQUsHIKAK5loOq5ItrGRGRCxqX5L~MyKMJCocAXMMxtICh~d-CFsr8IYhFis9VvILm8AMh7l-BR0ReYjQP0SoQpy-Fztng-YylLrgaLvYYF~GaTPSfAAFQZ6MpGmXucksK4l0fNhB3XNK6nRAuJhu0q9x1bW~3eIVDFlbdGUSH5MSeuggUjczNIBZXS0PPmuTkXgUh7QmQQRVEr3LoOuLbPPUioHxmQ0NPyPJ~lsZu6ivNF229ZPINJxBkgF~ajzv3u3x5WjgAsrBFuscSlurC5WcEt~cK9r~XkFFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }} />
            <Image style={{ width: 121, height: 186, left: -120, top: -470, }} source={{ uri: 'https://s3-alpha-sig.figma.com/img/6a2c/3747/8abcc7a481e3f13ef5454130b9bdd82b?Expires=1692576000&Signature=SoL4FKYr643B5L7Bp-STZAvRWaLfKvOZT8iwUwbOWTIH~5BcclqOwRvpzgThdzoTMDjD7kdXOnKDYTD1tupQYhO4Vru9u~V70LSmCZB6qiYKxl90P6dGsoRhirSibIzYDJhFphjgP9r0FLL24hdXJyTtPQMkmpa8y3W0r2RShOiyo9TFlDeiJgtvK4VpmJ0v7wQeb6ekG3RoOx~hVXa5MRQoyyzpPWU5J7lX0RmDcHa4jtha8X8JCREFz0iXOu~~fo-5uwvPiYc42Jua12E-Y-kAIZ9KPHSQIv0XcOvJcXEnBp~qCf5fTq~SunOFSACegI0-eDuVu-8tWTgmKDSvOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'  }} />
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
      fontFamily: 'Poppins',
      fontWeight: '700',
      lineHeight: 26,
      wordWrap: 'break-word',
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
