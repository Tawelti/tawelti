import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import StarRating from "react-native-star-rating";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from '@react-navigation/native';

const PlaceProfil = () => {
    const navigation = useNavigation()

  const customMapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#242F3E", 
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#242F3E",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#FFFFFF", 
        },
      ],
    },
    {
      featureType: "road", 
      elementType: "geometry",
      stylers: [
        {
          color: "#FFFFFF", 
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>THE 716</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.8418,
          longitude: 10.273,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        customMapStyle={customMapStyle} 
      >
        <Marker
          coordinate={{
            latitude: 36.8418,
            longitude: 10.273,
          }}
          title="Tea Room"
          description="This is a Tea Room"
        />
      </MapView>
      <View style={styles.circleTop}>
        <Image
          source={{
            uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/465870718.jpg?k=84c93fea49ada865f39ae1eb8f4c89600a8694e44fbee6f86c4acbc83f8d309f&o=&hp=1",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.circleBottom}></View>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={3.5}
        starSize={30}
        fullStarColor="#FFD700"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}  onPress={()=>navigation.navigate("Comments")}>Comments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate("ReservationDetails")}>Reserve Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate("Claim")}>Claim</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#FFF",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    bottom: 250,
    zIndex: 1,
  
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: 360,
    height: 200,
    top: 550,
    left: 13,
    zIndex: 1,
  },
  circleTop: {
    width: 500,
    height: 500,
    borderRadius: 500,
    backgroundColor: "#E7AF2F",
    position: "absolute",
    top: "-20%",
    left: "-20%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 300,
    top: 200,
  },
  circleBottom: {
    width: 300,
    height: 300,
    borderRadius: 500,
    backgroundColor: "#E7AF2F",
    position: "absolute",
    bottom: "-15%",
    left: "40%",
    bottom: 10,
    transform: [{ translateX: -50 }, { translateY: 50 }],
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#313439",
    top: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default PlaceProfil;