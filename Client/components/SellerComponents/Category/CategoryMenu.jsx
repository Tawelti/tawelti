import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Category = () => {
  return (

  <View style={styles.containerCategory}>

      <View style={styles.divider}></View>
      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Category</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Food</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Chicha</Text>
        </View>
        <View style={styles.activeTab}>
          <Text style={styles.activeTabText}>Drinks</Text>
        </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({

  containerCategory: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FCFAF9',
    
   
  },
  divider: {
    width: 320,
    height: StyleSheet.hairlineWidth,
    left: 29,
    top: 100,
    position: 'absolute',
    borderColor: '#AAAAAA',
    borderWidth: 0.5,
  },
  tabContainer: {
    width : "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top : -650,
    paddingVertical: 10,
  },
  tab: {
    padding: 10,
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
  },
  activeTab: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'flex',
  },
  activeTabText: {
    color: '#E7AF2F',
    fontSize: 19,
    fontStyle: 'italic',
    fontWeight: '700',
    flexWrap: 'wrap',
  },

});

export default Category;
