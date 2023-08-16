import React , {useState , useEffect} from 'react';
import { View, Text , StyleSheet , TouchableOpacity , ScrollView , Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const Reservations = ({route}) => {
    const navigation = useNavigation();
    const [data , setData] = useState([])
    const [places_id, setPlaces_id] = useState(0);
    const { id } = route.params;
    console.log(id);
useEffect(() => {
fetch()
},[])


    const fetch =() => {
        console.log(places_id);
axios.get(`http:/192.168.11.229:3000/api/Reservation/getOne/${id}`)
.then(res => {
    console.log(res.data,'hi')
    setPlaces_id(res.data.id)
    setData(res.data)
})
.catch(err => {
    console.log(err)
})
    }

const deleteRes = (id) => {
    axios.delete(`http:/192.168.11.229:3000/api/Reservation/delete/${id}`)
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
                        <Text style={styles.infoLabel}>Client:</Text>
                        <Text style={styles.infoValue}>{e.Client_id}</Text>
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
        fontWeight: '700',
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
        fontWeight: '600',
    },
    infoValue: {
        color: '#313131',
        fontSize: 20,
        fontWeight: '500',
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
        fontWeight: '700',
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
        fontWeight: '600',
    },
});



export default Reservations;
