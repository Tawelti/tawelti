import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

function Comments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.101.8:3000/api/Comments/1')
      .then(res => {
        setData(res.data); 
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View style={styles.root}>
      <Text>hello fares</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
              <Image style={styles.image} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }}   />
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <Text style={styles.name}>{item. Client.name }</Text>
                {/* <Text style={styles.time}>9:58 am</Text> */}
              </View>
              <Text rkType="primary3 mediumLine">this is the  {item.comment}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    
  },
  content: {
    marginLeft: 16,
    // flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginLeft: 20,
  },
  // time: {
  //   fontSize: 11,
  //   color: '#808080',
  // },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Comments;
