import React , {useState , useEffect} from 'react';
import { View, Text , StyleSheet , TouchableOpacity , ScrollView , Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const Reservations = () => {
    const navigation = useNavigation();
    const [data , setData] = useState([])
    
useEffect(() => {
fetch()
},[])
    const fetch =() => {
axios.get("http://192.168.208.127:3000/api/Reservation/get/18")
.then(res => {
    console.log(res.data)
    setData(res.data)
})
.catch(err => {
    console.log(err)
})
    }

const deleteRes = (id) => {
    axios.delete(`http://192.168.208.127:3000/api/Reservation/delete/${id}`)
    .then(res => {
        console.log(res.data)
       fetch()
    })
    .catch(err => {
        console.log(err)
    })
}
    return (
        <ScrollView>
        <View>
        {data.map((e) => (
            <View key={e.id} style={styles.container}>
               
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Text style={styles.infoLabel}>Date:</Text>
                        <Text style={styles.infoValue}>{e.date}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoLabel}>Party Size:</Text>
                        <Text style={styles.infoValue}>{e.numberofperson}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoLabel}>Phone:</Text>
                        <Text style={styles.infoValue}>12345 67890</Text>
                    </View>
                </View>
                <Button title="delete" onPress={() => deleteRes(e.id)}/>
            </View>
        ))}
        <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Profil')}>Go back</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
      height: 100,
      backgroundColor: '#F8F8FA',
      borderRadius: 26,
      marginTop: 50
      },
    header: {
        width: 100,
        height: 88,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#313131',
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: '700',
        wordWrap: 'break-word',
    },
    infoContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    info: {
        width: 124,
        height: 104,
        
    },
    infoLabel: {
        color: '#313131',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
        wordWrap: 'break-word',
    },
    infoValue: {
        color: '#313131',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '500',
        wordWrap: 'break-word',
    },
    cancelButton: {
        width: 100,
        height: 50,
        padding: 10,
        backgroundColor: '#E7AF2F',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 70,
        marginLeft : 150
    },
    buttonText: {
        color: '#313131',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        wordWrap: 'break-word',
    },
    goBack: {
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    goBackText: {
        color: '#313131',
        fontSize: 13,
        fontFamily: 'Poppins',
        fontWeight: '600',
        wordWrap: 'break-word',
    },
});



export default Reservations;
