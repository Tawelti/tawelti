import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const slideInAnim = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    Animated.timing(slideInAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideInAnim]);

  return (
    <ImageBackground
      source={require('./Image/pageone.jpg')} 
      style={styles.background}
    >
      <Animated.View style={[styles.container, { transform: [{ translateX: slideInAnim }] }]}>
        <View style={styles.circle} />

        <Image source={require('./Image/Tawelti.png')} style={styles.logo} />

        <View style={styles.content}>
          <Text style={styles.title}>LET'S GET STARTED</Text>
        </View>

        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.ctaText}>Join Us</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500,
    backgroundColor: '#FFC90B',
    position: 'absolute',
    top: -130,
  },
  logo: {
    width: 250,
    height: 250,
    top: -130,
  },
  content: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 54,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ctaButton: {
    backgroundColor: '#000000',
    top: 90,
    paddingVertical: 12,
    paddingHorizontal: 74,
    borderRadius: 8,
  },
  ctaText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
