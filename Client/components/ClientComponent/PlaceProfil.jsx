import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import StarRating from "react-native-star-rating";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const PlaceProfil = ({route}) => {
    const navigation = useNavigation();
   // const [idd, setIdd] = useState(0);
    const [data, setData] = useState([]);
    const { id } = route.params;


    useEffect(() => {
        fetchPlaceData();
    }, []);

    const fetchPlaceData = () => {
        console.log(id,'id place');
        axios.get(`http://192.168.11.45:3000/api/places/getOne/${id}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
  const customMapStyle = [
    {
      elementType: "geometry",
    },
    {
      elementType: "labels.text.stroke",
     
    },
    {
      elementType: "labels.text.fill",
      stylers: [
       
      ],
    },
    {
      featureType: "road", 
      elementType: "geometry",
    },
  ];

  return (
    <View style={{flex:1}}>
      {data[0] ? (
        <View key={data[0].id} style={styles.container}>
          <Text style={styles.headerText}>{data[0].name}</Text>
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
                uri: data[0].images,
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
  
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Comments",{id:data[0].id, Seller_id:data[0].Seller_id})}
          >
            <Text style={styles.buttonText}>Comments</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ReservationDetails",{id:data[0].id})}
          >
            <Text style={styles.buttonText}>Reserve Now</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Claim",{idPlace:data[0].id})}
          >
            <Text style={styles.buttonText}>Claim</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
  
        }  
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
    bottom: 200,
    zIndex: 1,
  
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: 360,
    height: 200,
    top: 600,
    left: 17,
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