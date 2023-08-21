import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, ImageBackground , Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useStripe } from '@stripe/stripe-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const ProfilePayment = () => {
    const navigation = useNavigation()
    const [data , setData] = useState([])
    const [amount,setAmount]=useState(0)
 const {initPaymentSheet,presentPaymentSheet}=useStripe()
  const [id,setId]=useState(0)
  
    useEffect(() => {
      fetch()
      getemail()
    }, [])
  
    
    const getemail = async () => {
      try {
        const email = await AsyncStorage.getItem('userEmail')
        if (email) {
          const response = await axios.get(`http://172.20.10.8:3000/api/seller/email/${email}`);
          console.log(response.data);
          console.log(response.data.id);
          setData(response.data);
          setId(response.data.id)
        } else {
          console.log('User email not found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    const fetch = () => {
      axios.get(`http://192.168.234.127:3000/api/seller/get/${id}`)
        .then((res) => {
          console.log(res.data)
          setData(res.data)
          
        })
        .catch((err) => {
          console.log(err)
        })
    }
  const premuim=()=>{
    setAmount(5000)
  }
  const normale=()=>{
    setAmount(3500)
  }
  console.log(amount)
  const pay = (price) => {
    if (price === 0) {
      return
    }
    axios.post(`http://192.168.234.127:3000/api/payment/pay/${price}`)
      .then((response) => {
        const { paymentIntent } = response.data;
        console.log(paymentIntent)
  const initResponse= initPaymentSheet({
  merchantDisplayName:"Tawelti",
  paymentIntentClientSecret:paymentIntent,
})
console.log(initResponse)
presentPaymentSheet()
.then((PaymentResponse) => {
  if (PaymentResponse.error) {
    console.log(PaymentResponse.error);
    alert(
      `Error code: ${PaymentResponse.error.code}`,
      PaymentResponse.error.message
    )
  } else {
    alert(
      "Payment Successful",
      "Your payment has been processed successfully!"
    )
    navigation.navigate("Profil")
  }
})
.catch((error) => {
  console.log(error);
});
})
      .catch((error) => {
        console.log(error);
      });
  }
    return (
        
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.header}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Tawelti Packages</Text>
      <Text style={styles.tagline}>choose a package to complete the payment process</Text>
    </View>

    <ScrollView contentContainerStyle={styles.packageContainer} horizontal>
      <ImageBackground
        source={require('../../assets/gold.png')} 
        style={[styles.package, styles.premiumPackageBackground]}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.premiumPackageContent}>
          <Text style={styles.packageTitle}>Tawelti Premium</Text>
          <View style={styles.features}>
            <View style={styles.feature}>
              <Icon name="check" size={16} color="#007bff" />
              <Text style={styles.featureText}>Featured spot on the home page</Text>
            </View>
            <View style={styles.feature}>
              <Icon name="check" size={16} color="#007bff" />
              <Text style={styles.featureText}>VIP Listing Status</Text>
            </View>
            <View style={styles.feature}>
              <Icon name="check" size={16} color="#007bff" />
              <Text style={styles.featureText}>Attract More Clients</Text>
            </View>
          </View>
          <Text style={styles.price}>$50.00/month</Text>
          <TouchableOpacity style={styles.button} onPress={() => {
            pay(5000)
            }}>
            <Text style={styles.buttonText}>Get Premium</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={[styles.package, styles.normalPackage]}>
        <Text style={styles.packageTitle}> Tawelti Normal</Text>
        <View style={styles.features}>
          <View style={styles.feature}>
            <Icon name="check" size={16} color="#333" />
            <Text style={styles.featureText}>Featured spot on the Category</Text>
          </View>
          <View style={styles.feature}>
            <Icon name="check" size={16} color="#333" />
            <Text style={styles.featureText}>Basic features</Text>
          </View>
        </View>
        <Text style={styles.price}>$35.00/month</Text>
      
        <TouchableOpacity style={styles.button} onPress={() => {

            pay(3500)
            }}>
          <Text style={styles.buttonText}>Get Normal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    <View style={styles.footer}>
      <Text style={{ color: '#000' }}>Privacy Policy | Terms of Use</Text>
      <Text style={{ color: '#000' }}>Customer Support: tawleti@gmail.com</Text>
    </View>
  </ScrollView>
)
    }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 30,
      backgroundColor: '#fff',
    },
    logo: {
      width: 150,
      height: 150,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: 10,
      color: '#000',
    },
    tagline: {
      fontSize: 18,
      color: '#000',
      marginTop: 5,
      textAlign: 'center',
    },
    packageContainer: {
      flexDirection: 'row',
      paddingHorizontal: 20,
    },
    package: {
      width: 300,
      marginRight: 20,
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    premiumPackageBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    premiumPackageContent: {
      padding: 20,
    },
    normalPackage: {
      backgroundColor: '#f5f5f5',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    packageTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#000',
    },
    features: {
      marginBottom: 15,
    },
    feature: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    featureText: {
      fontSize: 16,
      color: '#333',
      marginLeft: 5,
    },
    price: {
      fontSize: 24,
      color: 'black',
      marginTop: 10,
    },
    button: {
      backgroundColor: '#E7AF2F',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    footer: {
        marginTop : 30 ,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      backgroundColor: '#fff',
    },
  })

export default ProfilePayment;
