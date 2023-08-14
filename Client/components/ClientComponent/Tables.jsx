import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'; 
import axios from 'axios';

const Tables = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`http://192.168.133.150:3000/api/tables/get`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const reserveTable = () => {
    axios.post('http://192.168.133.150:3000/api/tables/add/1/1')
      .then(() => {
        const updatedData = data.map(table => {
          if (table.PlaceId === 1 && table.Order_id === 1) {
            if (!table.reserved) {
              const updatedTable = { ...table, reserved: true };
  
              axios.put(`http://192.168.133.150:3000/api/tables/${table.id}`, { reserved: true })
                .then(() => {
                  console.log('Table reservation status updated in the database.');
                })
                .catch(error => {
                  console.error('Error updating table reservation status:', error);
                });
  
              return updatedTable;
            }
          }
          return table;
        });
        setData(updatedData);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  
  

  return (
    <ScrollView
      horizontal 
      contentContainerStyle={styles.scrollViewContent} 
    >
      {data.map(table => (
        <TouchableOpacity
          key={table.id}
          style={[
            styles.smallCircle,
            { backgroundColor: table.reserved ? '#FF0000' : '#00FF00' },
          ]}
          onPress={() => {
            if (!table.reserved) {
              reserveTable(table);
            }
          }}
        >
          <Text style={styles.smallCircleText}>{table.number}</Text>
        </TouchableOpacity>
      ))}
      {Array.from({ length: 50 - data.length }, (_, index) => (
        <TouchableOpacity
          key={data.length + index}
          style={[
            styles.smallCircle,
            { backgroundColor: '#00FF00' },
          ]}
        >
          <Text style={styles.smallCircleText}>{data.length + index + 1}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 20,
  },
  smallCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  smallCircleText: {
    color: '#313131',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tables;
