import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the icon library you want to use

const SignInScreen = () => {
  const [name, setName] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={require('../Image/home.jpg')} />
        </View>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>WELCOME BACK!</Text>
          <Text style={styles.subTitle}>welcome back we missed you</Text>

          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                <Icon name="user" size={18} color="black" /> User Name
              </Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={(text) => setName(text)}
                  placeholder="Enter your username"
                  placeholderTextColor="#B6B6B6"
                />
              </View>
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
                value={Password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Enter your password"
                placeholderTextColor="#B6B6B6"
              />
            </View>
          </View>

          <Text style={styles.passwordForget}>Forgot Password?</Text>

          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </View>

          <Text style={styles.orText}>Or continue with</Text>

          <View style={styles.socialButtonsContainer}>
            <Image style={styles.socialButton} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' }} />
            <Image style={styles.socialButton} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png' }} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 40.33,
    fontWeight: '600',
    color: '#000000',
    marginTop: 20,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 14.33,
    fontWeight: '500',
    color: 'black',
  },
  inputContainer: {
    marginTop: 40,
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
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  passwordForget: {
    left: 80,
  },
  button: {
    width: 314,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#E7B10A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonText: {
    fontSize: 17.92,
    fontWeight: '500',
    color: 'white',
  },
  orText: {
    fontSize: 11.25,
    fontWeight: '500',
    color: '#B6B6B6',
    marginTop: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialButton: {
    width: 58.10,
    height: 60,
    borderRadius: 8.85,
    borderWidth: 0.15,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    marginHorizontal: 5,
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

export default SignInScreen;