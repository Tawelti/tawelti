import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import LogoImage from '../../assets/logo.png';

function Claim() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const addClaim = () => {
    axios
      .post("http://192.168.208.127:3000/api/Claim/1/1", { content: text })
      .then((res) => {
        alert("Your reclamation has been sent successfully");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={LogoImage} style={styles.logo} />

            <Text style={styles.modalTitle}>Send Your Claim to the Admin</Text>

            <TextInput
              style={styles.textInput}
              multiline
              numberOfLines={5}
              placeholder="Type your text here..."
              onChangeText={setText}
              value={text}
            />

            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("PlaceProfil");
                }}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.sendButton]}
                onPress={() => {
                  addClaim();
                  navigation.navigate("PlaceProfil");
                }}
              >
                <Text style={styles.buttonText} >Send</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  textInput: {
    width: "100%",
    height: 120,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 5,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: '#E7AF2F',
  },
  sendButton: {
    backgroundColor: '#E7AF2F',
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Claim;
