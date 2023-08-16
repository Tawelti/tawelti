import React  , {useState , useEffect} from 'react';
import { View, Text, Image,StyleSheet , ScrollView , TouchableOpacity, TextInput , Modal ,  KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Cloud from "../Cloud.jsx"; 

const DessertSeller = () => {
  const navigation = useNavigation()
  const [data , setData]=useState([])
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')


  const fetch = () => {
    axios.get("http://192.168.11.149:3000/api/Product/getAll/1/Dessert") 
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

const openDialog = () => {
  setDialogOpen(true);
};

const closeDialog = () => {
  setDialogOpen(false);
};

const handleEditProfile = () => {
  console.log(' new name:', nameInput);
  closeDialog();
};

useEffect(() => {
fetch()
},[])

const AddProduct = (productname , price , Immage) => {
  axios.post('http://192.168.11.229:3000/api/Product/create/1/Dessert', {
    productname: productname,
    price: price,
    Immage : Immage   
    })
    .then((res) => {
     fetch()
      console.log(res)
    })
    .then((err) => {
      console.log(err);
    });
};
return (
  <KeyboardAvoidingView // Wrap the entire view with KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
  <View style={styles.containerCategory}>
  <View style={styles.divider}></View>
        <View style={styles.tabContainer}>
          <View style={styles.tab}>
          <Text style={styles.tabText} onPress={()=>navigation.navigate("DessertSeller")}>Dessert</Text>
            </View>
            <View style={styles.tab}>
              <Text style={styles.tabText} onPress={()=>navigation.navigate("FoodSeller")}>Food</Text>
            </View>
            <View style={styles.tab}>
              <Text style={styles.tabText} onPress={()=>navigation.navigate("ChichaSeller")}>Chicha</Text>
            </View>
            <View style={styles.activeTab}>
              <Text style={styles.tabText} onPress={()=>navigation.navigate("DrinksSeller")}>Drinks</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addButtonCategory}  >
      <Text style={styles.addButtonTextCategory} onPress={() => { openDialog() }}>+</Text>
    </TouchableOpacity>
    <Modal
      animationType="slide"
      transparent={true}
      visible={isDialogOpen}
      onRequestClose={closeDialog}
      style={styles.model}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Product</Text>
          <TextInput
          value={nameInput}
            style={styles.input}
            placeholder="Enter the product name"
            onChangeText={setNameInput}
          />

       <TextInput
       value={price}
            style={styles.input}
            placeholder="Enter the product price"
            onChangeText={setPrice}
          />

          <View style={styles.cloudContainer}>
      <Cloud
        style={styles.cloudButton}
        setImage={setImage}
        buttonText={image ? 'Image Uploaded' : 'Select Image'}
      />
</View>

<View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={closeDialog}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
        </View>
      </View>
    </Modal>
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.container}>
            {data.map(el => (
              <View key={el.id} style={styles.menuItem}>
                <Image style={styles.image} source={{ uri: el.image }} />
                <Text style={styles.itemName}>{el.productname}</Text>
                <Text style={styles.itemPrice}>${el.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      </KeyboardAvoidingView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      marginTop: 20,
    },
    menuItem: {
      width: '48%', 
      backgroundColor: 'white',
      borderRadius: 15,
      marginBottom: 20,
      padding: 10,
    },
    itemName: {
      fontSize: 16,
      fontWeight: '500',
      color: 'black',
      marginTop: 10,
    },
    itemPrice: {
      fontSize: 14,
      fontWeight: '400',
      color: 'black',
      marginTop: 5,
    },
    addButton: {
      backgroundColor: '#20A090',
      borderRadius: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
    },
    addButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '600',
    },
    image: {
      width: '100%',
      height: 150,
      borderRadius: 10,
      marginBottom: 8,
    },
    containerCategory: {
      width: '100%',
      height: '100%',
      backgroundColor: '#FCFAF9',


    },
    divider: {
      width: 320,
      height: StyleSheet.hairlineWidth,
      left: 29,
      top: 130,
      position: 'absolute',
      borderColor: '#AAAAAA',
      borderWidth: 0.5,
    },
    tabContainer: {
       width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    },
    tab: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      display: 'flex',
      borderBottomColor: 'transparent',
      borderBottomWidth: 2
    },
    tabText: {
      color: '#313131',
      fontSize: 19,
      fontStyle: 'italic',
      fontWeight: '500',
      flexWrap: 'wrap',
    },
    activeTab: {
      flex: 1, 
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',

    },
    activeTabText: {
      color: '#E7AF2F',
      fontSize: 19,
      fontStyle: 'italic',
      fontWeight: '700',
      flexWrap: 'wrap',
    },
    containeer : {
      width: "100%",
      paddingHorizontal: 20, 
      paddingBottom: 20,
    }, 
    addButtonCategory: {
      backgroundColor: '#20A090',
      borderRadius: 15,
      paddingVertical: 8,
      paddingHorizontal: 15,
      alignSelf: 'center',
      marginBottom: 10,
    },
    addButtonTextCategory: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'Roboto',
      fontWeight: '600',
    }, 
    modalView: {
      height : 500,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#2196F3',
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    }, 
    cloudContainer: {
      alignItems: 'center',
      marginTop: -300,
      flexDirection: 'row',
    },
    cloudButton: {
      backgroundColor: '#20A090',
      borderRadius: 15,
      paddingVertical: 8,
      paddingHorizontal: 15,
      alignItems: 'center',
    },
  Buttons : {
    backgroundColor: '#20A090',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
    zIndex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  });
export default DessertSeller;