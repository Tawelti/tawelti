import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function Claim() {
  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setModalVisible(true);
  }, []);
 
  const addClaim=()=>{
    axios.post("http://192.168.208.127:3000/api/Claim/1/1",{content:text})
    .then ((res)=>{
      alert("your reclamation has been send it seccufully")
      console.log(res)
    })
    .catch((err)=>console.log(err))
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Send your claim to the admin!</Text>

            <View>
              <TextInput
                style={styles.textArea}
                multiline
                numberOfLines={5} // Set the initial number of lines you want to display
                placeholder="Type your text here..."
                onChange={setText}
                value={text}
                onChangeText={setText}
              />
            </View>
                    <View style={{flexDirection: 'row'}} >
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => 
                    {
                    setModalVisible(!modalVisible)
                    navigation.navigate("PlaceProfil")
                     } }
                    >
                    <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => 
            
                   { 
                    addClaim()
                    navigation.navigate("PlaceProfil")
                    
                   }}
                    >
                    <Text style={styles.textStyle}>Send</Text>
                    </Pressable>
                    </View>
          </View>
        </View>
      </Modal>
  
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    //   flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 180,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    margin:8
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textArea: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius:10
  },
});
export default Claim;
