import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the icon library you want to use
import Cloud from '../SellerComponents/Cloud';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [patente, setPatente] = useState('');
  const [userType, setUserType] = useState(null);
  const [showUploadButton, setShowUploadButton] = useState(true);

  const handleUserType = (type) => {
    console.log('handleUserType triggered with type:', type);
    setUserType(type);
    if (type === 'seller') {
      setShowUploadButton(true);
    } else {
      setShowUploadButton(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={{uri : "https://www.wowapps.com/wp-content/uploads/2022/06/Reserved.png"}} />
        </View>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Get Started Free</Text>
          <Text style={styles.subTitle}>Free Forever. No Credit Card Needed</Text>

          {userType !== 'seller' && (
            <TouchableOpacity onPress={() => handleUserType('seller')} style={styles.userTypeButton}>
              <Text style={styles.userTypeButtonText}>I'm a Seller</Text>
            </TouchableOpacity>
          )}
          {userType !== 'client' && (
            <TouchableOpacity onPress={() => handleUserType('client')} style={styles.userTypeButton}>
              <Text style={styles.userTypeButtonText}>I'm a Client</Text>
            </TouchableOpacity>
          )}

          {userType && (
            <View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>
                  <Icon name="user" size={18} color="black" /> Your Name
                </Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="Enter your name"
                    placeholderTextColor="#B6B6B6"
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>
                  <Icon name="envelope" size={18} color="black" /> Email Address
                </Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Enter your email address"
                    placeholderTextColor="#B6B6B6"
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>
                  <Icon name="lock" size={18} color="black" /> Password
                </Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="Enter your password"
                    placeholderTextColor="#B6B6B6"
                  />
                </View>
              </View>

              {userType === 'seller' && (
                <View>
                  {showUploadButton && (
                    <View style={styles.uploadContainer}>
                      <Cloud
                        buttonStyle={styles.uploadButton}
                        setImage={setPatente}
                        buttonText={patente ? 'Patent Image Uploaded' : 'Select Patent Image'}
                      />
                    </View>
                  )}
                  <View style={styles.button2}>
                  <Text style={styles.buttonText} onPress={() => navigation.navigate("SignIN")}>Sign up</Text>
                  </View>
                </View>
              )}

              {userType === 'client' && (
                <View style={styles.button}>
                  <Text style={styles.buttonText} onPress={() => navigation.navigate("SignIN")}>Sign up</Text>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7AF2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center', 
  },
  title: {
    fontSize: 40.33,
    fontWeight: '600',
    color: '#EFEFEF',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 14.33,
    fontWeight: '500',
    color: 'black',
  },
  inputContainer: {
    marginTop: 20,
    width: 314,
  },
  inputLabel: {
    fontSize: 14.33,
    fontWeight: '500',
    color: 'black',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E7B10A',
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.40)',
  },
  input: {
    flex: 1,
    height: 40,
    color: '#ffffff',
  },
  uploadContainer: {
    alignItems: 'center',
    marginBottom: -10,
  },
  uploadButton: {
    backgroundColor: '#E7B10A',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 314,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button2: {
    width: 314,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  buttonText: {
    fontSize: 17.92,
    fontWeight: '500',
    color: 'white',
  },
  userTypeButton: {
    width: 314,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  userTypeButtonText: {
    fontSize: 17.92,
    fontWeight: '500',
    color: 'white',
  },
  containerImage: {
    flexShrink: 0,
    borderRadius: 50,
    width: 370,
    height: 200,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 370,
    height: 200,
    borderRadius: 50,
  },
});

export default SignUpScreen;
