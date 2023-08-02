import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function Comments() {
  return (
    <View style={styles.container}>
      <Text>Good morning</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg' }}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    position: 'relative',
    position: 'absolute', // Position the container absolutely within the parent
    top: 60, // Position at the top
    left: 20, // Position at the left
  },
  imageContainer: {
    
    marginTop: 20,
    borderRadius: 100, 
    overflow: 'hidden', 
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Comments;
