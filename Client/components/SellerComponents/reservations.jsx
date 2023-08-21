import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Reservations = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = () => {
    axios
      .get('http://192.168.234.127:3000/api/Reservation/get/1')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteReservation = (id) => {
    axios
      .delete(`http://192.168.234.127:3000/api/Reservation/delete/${id}`)
      .then((res) => {
        fetchReservations();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Reservations</Text>
      {data.map((e) => (
        <View key={e.id} style={styles.card}>
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text style={styles.infoLabel}>Date</Text>
              <Text style={styles.infoValue}>{e.date}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoLabel}>Party Size</Text>
              <Text style={styles.infoValue}>{e.numberofperson}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>12345 67890</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.deleteButton} onPress={() => deleteReservation(e.id)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate('Profil')}>
        <Text style={styles.goBackButtonText}>Go back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F7F6',
    flex: 1,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#313131',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  info: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FAF9F8',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#313131',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '500',
    color: '#313131',
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: '#E7AF2F',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  goBackButton: {
    backgroundColor: '#E7AF2F',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  goBackButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});

export default Reservations;
