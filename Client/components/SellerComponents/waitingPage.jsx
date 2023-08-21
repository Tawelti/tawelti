import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, Animated, Easing } from 'react-native';

const WaitingPage = () => {
  const [rotationAnim] = useState(new Animated.Value(0));
  const [shimmerAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const rotate = Animated.loop(
      Animated.timing(rotationAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    rotate.start();

    const shimmer = Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    shimmer.start();
  }, [rotationAnim, shimmerAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.View style={[styles.logoContainer, { transform: [{ rotate: rotationAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }] }]}>
          <Animated.Image
            source={require('../../assets/logo.png')}
            style={[styles.logo, { opacity: shimmerAnim.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1] }) }]}
          />
        </Animated.View>
        <Text style={styles.title}>Hang Tight!</Text>
        <Text style={styles.subtitle}>Your Account is Under Review</Text>
        <ActivityIndicator size="large" color="#1E90FF" />
        <Text style={styles.loadingText}>Waiting for Admin Approval</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Background color
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: 'white', // Container background color
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555555',
  },
  loadingText: {
    fontSize: 16,
    color: '#888888',
    marginTop: 10,
  },
});

export default WaitingPage;
