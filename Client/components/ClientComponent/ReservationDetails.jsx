
import React, { useState, useRef } from 'react';
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

const ReservationDetails = ({ navigation }) => {
  const [numberofperson, setNumberofperson] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false); 
  const modalAnimation = useRef(new Animated.Value(0)).current;

  const handlenumberofpersonChange = (size) => {
    setNumberofperson(size);
  };

  const handleConfirmReservation = (Client_id, Places_id) => {
    console.log(`Reservation confirmed for party size: ${numberofperson}`);

    const reservationData = {
      numberofperson: numberofperson,
      date: selectedDate, 
    };

    console.log(Client_id, Places_id);

    axios.post('http://192.168.133.150:3000/api/Reservation/add/1/1', reservationData)
      .then(response => {
        console.log('Reservation added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding reservation:', error);
      });
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
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

  return (
    <ScrollView contentContainerStyle={styles.containerCategory}>
      <Image
        source={require('../Image/lounge.png')} 
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

          <Text style={styles.tabText} onPress={()=>navigation.navigate("menu")}>Menu</Text>

          <Text
            style={styles.tabText}
            onPress={() => navigation.navigate('Menu')}
          >
            Menu
          </Text>

        </View>
      </View>

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
            <Text style={styles.popupText}>Table Selection Pop-up Content</Text>
            
            <Tables /> 
            
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
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: -650,
    paddingVertical: 10,
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
  numberofpersonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    top: 70,
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
    top: 350,
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
    marginTop: 20,
    marginBottom: 20,
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
    marginTop: 20,
    marginBottom: 20,
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
    bottom: 80,
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
