import React, { useState, useRef,useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Button,
  Animated,
  ScrollView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import axios from 'axios'; 
import Tables from './Tables'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReservationDetails = ({ navigation,route }) => {
  const [numberofperson, setNumberofperson] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false); 
  const modalAnimation = useRef(new Animated.Value(0)).current;
  const [idd, setIdd] = useState(0);
  const { id } = route.params;
  const [data, setData] = useState([]);
console.log(data||'fares','reservationDetails');

  useEffect(() => {
    getemail();
  }, []);

  const getemail = async () => {
    try {
      const email = await AsyncStorage.getItem('userEmail');
      if (email) {
        const response = await axios.get(
          `http://192.168.11.45:3000/api/client/email/${email}`
        );
        console.log(response.data.id);
        setIdd(response.data.id);
      } else {
        console.log('User email not found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlenumberofpersonChange = (size) => {
    setNumberofperson(size);
  };

  const handleConfirmReservation = () => {
    console.log(`Reservation confirmed for party size: ${numberofperson}`);

    const reservationData = {
      numberofperson: numberofperson,
      date: selectedDate, 
    };

    console.log(idd, id);

    axios.post(`http://192.168.11.45:3000/api/Reservation/add/${idd}/${id}`, reservationData)
      .then(response => {
        console.log('Reservation added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding reservation:', error);
      });
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    animateModal();

  };

  const animateModal = () => {
    Animated.timing(modalAnimation, {
      toValue: showPopup ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleToggleCalendar = () => {
    setSelectedDate(null); 
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    fetchPlaceData();
}, []);

const fetchPlaceData = () => {
    console.log(id,'id place');
    axios.get(`http://192.168.11.45:3000/api/places/getOne/${id}`)
        .then(res => {
            console.log(res.data,'hi');
            setData(res.data);
        })
        .catch(err => {
            console.log(err);
        });
};

  return (
    <ScrollView contentContainerStyle={styles.containerCategory}>
      
        
      <Image
        source={{ uri: "https://media-cdn.tripadvisor.com/media/photo-s/0f/2f/68/67/visite-716.jpg" }}
        style={styles.image}
      />

      <View style={styles.divider}></View>

      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <Text
            style={styles.tabText}
            onPress={() => navigation.navigate('Booking')}
          >
            Booking
          </Text>
        </View>
        <View style={{flex:1}}>
        
        <View  style={styles.tab}>
          <Text
            style={styles.tabText}
            onPress={() => navigation.navigate('menu',{idd:data[0].id})}
          >
            Menu
          </Text>
        </View>
         
        </View>
      </View>
      <Text
            style={styles.partySize} >  Party Size </Text>
      <View style={styles.numberofpersonContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.numberofpersonButton,
              size === numberofperson && styles.selectednumberofpersonButton,
            ]}
            onPress={() => handlenumberofpersonChange(size)}
          >
            <View
              style={[
                styles.numberofpersonButtonInner,
                size === numberofperson && styles.selectednumberofpersonButtonInner,
              ]}
            >
              <Text style={styles.numberofpersonButtonText}>{size}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.divider2}></View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmReservation}
      >
        <Text style={styles.confirmButtonText}>Confirm Your Reservation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.chooseTableButton}
        onPress={() => {
          togglePopup();
          animateModal();
        }}
      >
        <Text style={styles.chooseTableButtonText}>Choose Your Table</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.toggleCalendarButton}
        onPress={handleToggleCalendar}
      >
        <Text style={styles.toggleCalendarButtonText}>
          {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent
        animationType="slide"
        visible={showPopup}
        onRequestClose={togglePopup}
      >
        <View style={styles.modalContainer}>
          <Animated.View
            style={[
              styles.popupContainer,
              {
                transform: [
                  {
                    translateY: modalAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [400, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.popupText}>Table Selection</Text>
            
            <Tables onClose={togglePopup} />
            
            <Button title="Close" onPress={togglePopup} />
          </Animated.View>
        </View>
      </Modal>

      {showCalendar && (
        <View style={styles.calendarContainer}>
          <Calendar
            style={styles.calendar}
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
              setShowCalendar(false); 
            }}
            markedDates={
              selectedDate
                ? { [selectedDate]: { selected: true, selectedColor: '#FFD700' } }
                : {}
            }
          />
        </View>
      )}
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerCategory: {
    flexGrow: 1,
    backgroundColor: '#FCFAF9',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  divider: {
    width: 320,
    height: StyleSheet.hairlineWidth,
    left: 35,
    top: 310,
    position: 'absolute',
    borderColor: '#AAAAAA',
    borderWidth: 0.5,
  },
  divider2:{
    width: 320,
    height: StyleSheet.hairlineWidth,
    left: 35,
    top: 350,
    position: 'absolute',
    borderColor: '#AAAAAA',
    borderWidth: 0.5,
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
    bottom:240
  },
  tab: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'flex',
  },
  tabText: {
    color: '#313131',
    fontSize: 19,
    fontStyle: 'italic',
    fontWeight: '500',
    flexWrap: 'wrap',
    top: 200,
  },
  partySize:{
    color: '#313131',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '500',
    flexWrap: 'wrap',
    bottom:75,
    left:150
  },
  numberofpersonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    bottom:60,
  },
  numberofpersonButton: {
    marginHorizontal: 5,
  },
  numberofpersonButtonInner: {
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  selectednumberofpersonButton: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
  },
  selectednumberofpersonButtonInner: {
    backgroundColor: '#FFD700',
  },
  numberofpersonButtonText: {
    color: '#313131',
    fontSize: 16,
    fontWeight: '500',
  },
  confirmButton: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    top: 200,
  },
  confirmButtonText: {
    color: '#313131',
    fontSize: 18,
    fontWeight: '500',
  },
  chooseTableButton: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    bottom:90
  },
  chooseTableButtonText: {
    color: '#313131',
    fontSize: 18,
    fontWeight: '500',
  },
  toggleCalendarButton: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
bottom:50
  },
  toggleCalendarButtonText: {
    color: '#313131',
    fontSize: 18,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    bottom: 270,
  },
  popupText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#313131',
  },
  calendarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  calendar: {
    width: '100%',
  },
});

export default ReservationDetails;