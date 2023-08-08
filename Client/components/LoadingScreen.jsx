import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const logoAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(logoAnim, {
      toValue: 1,
      duration: 3000, // Adjust the duration as per your preference
      useNativeDriver: true,
    }).start(() => {
      // Animation complete, navigate to the HomeScreen
      navigation.replace('Home');
    });
  }, [logoAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./Image/Tawelti.png')}
        style={[styles.logo, { opacity: logoAnim }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 250,
    height: 250,
  },
});

export default LoadingScreen;
