import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import Ratings from '../../components/ClientComponent/Ratings';

function Comments() {
  const [data, setData] = useState([]);
  const [text, setText] =useState('')


  const fetch =() => {
    axios.get('http://192.168.11.229:3000/api/Comments/1')
    .then(res => {
      setData(res.data); 
    })
    .catch(err => console.log(err));
  }
  useEffect(() => {
  fetch()
  }, []);

const postComment=()=>{
axios.post('http://192.168.11.229:3000/api/Comments/1/1/1',{comment:text})
.then(() => {
  fetch()
})
.catch(err => console.log(err));
}
  return (
    <View style={styles.root}>
      
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
              <Text rkType="primary3 mediumLine">  {item.comment}</Text>
            </View>
          </View>
        )}
      />
      <View style={{position:'absolute',top:580 , left : 60}}>
       <Ratings/>
       </View>
          <View style={{flex:2,flexDirection:'row',marginBottom:120,position:'absolute',top:650}}>
    
              <TextInput
        style={styles.input}
        placeholder="write your comment here "
        onChangeText={setText}
        value={text}
      />
        <TouchableOpacity
              activeOpacity={0.7}
              
              onPress={() => postComment()}>
              <Image
                style={styles.sendIcon}
                source={require("../../assets/sendIcon.png")}
              />
                
            </TouchableOpacity>
            </View>
      
    
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
    backgroundColor:'green'
  },
    input: {
      width:320,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom:80,
    borderRadius:10
  },
  // time: {
  //   fontSize: 11,
  //   color: '#808080',
  // },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sendIcon:{
    width:25,
    height:25,
    marginTop:20
  },
  // senComment:{
  //  display:'gri'
  // }
});

export default Comments;
