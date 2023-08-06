import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const GoogleMap = () => {
  const [placeName, setPlaceName] = useState('');
  const [location, setLocation] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  const handleSearch = () => {
 
    const apiKey = 'AIzaSyDU7Z_rvxCYiZlr4FS7O9dsoMEohohka64';
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${placeName}&key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setLocation({ latitude: lat, longitude: lng });
        }
      })
      .catch((error) => {
        console.error('Error fetching location:', error);
      });
  };

  const initialRegion = {
    latitude: 40.7128, 
    longitude: -74.0060,
    latitudeDelta: 0.0922, 
    longitudeDelta: 0.0421, 
  };

  const handleMapReady = () => {
    setMapReady(true);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onMapReady={handleMapReady}
      >
        {mapReady && location && (
          <Marker
            coordinate={location}
            title={placeName}
            description="Searched location"
          />
        )}
      </MapView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a place name"
          value={placeName}
          onChangeText={setPlaceName}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
  },
});

export default GoogleMap;
