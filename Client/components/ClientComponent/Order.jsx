import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView , Modal} from 'react-native';
import { faMoneyBillAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Navbar from '../NavBar';


const Order = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState('cash')
  const [showModel, setShowModel] = useState(false);

  const fetch = () => {
    axios.get("http://192.168.11.229:3000/api/order/getAll/1")
      .then(res => {
        console.log(res.data);
        setData(res.data);
        calculateTotal(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const remove = (id) => {
    axios.delete(`http://192.168.11.229:3000/api/order/delete/${id}`)
      .then(res => {
        console.log(res.data);
        fetch()
      })
      .catch(err => {
        console.log(err);
      });
  };

  const calculateTotal = (orderData) => {
    const sum = orderData.reduce((acc, el) => acc + el.Product.price, 0);
    setTotal(sum);
  };

  useEffect(() => {
    fetch();
  }, []);

  const paymentMethod = () => {
    setShowModel(!showModel);
  };

  const handlePayment = (pay) => {
    setSelectedPayment(pay);
    paymentMethod();
  };
  return (

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        {data.map((el, i) => (
          <TouchableOpacity key={el.id} style={styles.card}>
            <Image style={styles.image} source={{ uri: el.Product.image }} />
            <View style={styles.detailsContainer}>
              <Text style={styles.itemName}>{el.Product.productname}</Text>
              <Text style={styles.price}>{el.Product.price}</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText} onPress={() => {remove(el.id)}}>Remove</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Amount:</Text>
        <Text style={styles.totalAmount}>${total}</Text>
      </View>
      <TouchableOpacity style={styles.paymentButton} onPress={paymentMethod}>
      <Text style={styles.paymentButtonText}>Choose Payment Method</Text>
    </TouchableOpacity>
    <Modal visible={showModel} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={[styles.modalPaymentButton, selectedPayment === 'cash' ? styles.selectedPayment : null]}
            onPress={() => handlePayment('cash')}
          >
            <FontAwesomeIcon icon={faMoneyBillAlt} style={[styles.paymentIcon, selectedPayment === 'cash' ? styles.selectedPaymentText : null , styles.cashIcon]} />
            <Text style={[styles.modalPaymentButtonText, selectedPayment === 'cash' ? styles.selectedPaymentText : null]}>Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modalPaymentButton, selectedPayment === 'online' ? styles.selectedPayment : null]}
            onPress={() => handlePayment('online')}
          >
            <FontAwesomeIcon icon={faCreditCard} style={[styles.paymentIcon, selectedPayment === 'online' ? styles.selectedPaymentText : null , styles.cardIcon]} />
            <Text style={[styles.modalPaymentButtonText, selectedPayment === 'online' ? styles.selectedPaymentText : null]}>Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeModalButton} onPress={paymentMethod}>
            <Text style={styles.closeModalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </ScrollView>
  

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: -10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginTop : 20
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
  },
  price: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#21A0AA',
  },
  addToCartButton: {
    backgroundColor: '#21A0AA',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter-Bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40, 
  },
  totalText: {
    fontSize: 18,
    color: '#444',
    marginRight: 10,
  },
  totalAmount: {
    fontSize: 18,
    color: '#21A0AA',
  },
  paymentButton: {
    backgroundColor: '#21A0AA',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 50,
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  modalPaymentButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#21A0AA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalPaymentButtonText: {
    color: '#21A0AA',
    fontSize: 16,
  },
  selectedPayment: {
    backgroundColor: '#21A0AA',
  },
  selectedPaymentText: {
    color: 'white',
  },
  closeModalButton: {
    backgroundColor: '#F7F7F7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeModalButtonText: {
    color: '#444',
    fontSize: 16,
  },
  paymentOption: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  paymentIcon: {
    color: '#21A0AA',
    fontSize: 24,
    marginRight: 10,
  }
});

export default Order;
