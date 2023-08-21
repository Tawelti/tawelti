import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
} from 'react-native';
import Ratings from '../../components/ClientComponent/Ratings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


function Comments({route}) {
  
    const [data, setData] = useState([]);
    const [text, setText] =useState('')
    const { id } = route.params;
    const [iddClient,setIddClient]=useState(0)
    const{Seller_id}=route.params
  
    useEffect(() => {
      getemail()
      fetch()
    }, [])
    const [showSymbolsModal, setShowSymbolsModal] = useState(false);
    const [selectedSymbol, setSelectedSymbol] = useState('');
    const [localLikes, setLocalLikes] = useState({});
    const [userLikedComments, setUserLikedComments] = useState({});
    const [placeImage, setPlaceImage] = useState(''); 
  
    const getemail = async () => {
      try {
        const email = await AsyncStorage.getItem('userEmail')
        if (email) {
          const response = await axios.get(`http://192.168.11.45:3000/api/client/email/${email}`);
         console.log(response.data.id);
          setIddClient(response.data.id)
        } else {
          console.log('User email not found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    const fetch =() => {
      axios.get(`http://192.168.11.45:3000/api/Comments/${id}`)
      .then(res => {
        setData(res.data); 
      })
      .catch(err => console.log(err));
    }
   
    const fetchComments = () => {
      axios
        .get('http://192.168.234.127:3000/api/Comments/1')
        .then((res) => {
          setData(res.data.comments);
          setPlaceImage(res.data.placeImage);
        })
        .catch((err) => {
          console.log('Error fetching data:', err);
        });
    };
  
    useEffect(() => {
      fetchComments();
    }, []);
  
  const postComment=()=>{
  axios.post(`http://192.168.11.45:3000/api/Comments/${iddClient}/${id}/${Seller_id}`,{comment:text})
  .then(() => {
    fetch()
  })
  .catch(err => console.log(err));
  }
  
  
    const handleLikePress = (commentId) => {
      const updatedLocalLikes = { ...localLikes };
      const updatedUserLikedComments = { ...userLikedComments };
  
      if (userLikedComments[commentId]) {
        updatedLocalLikes[commentId] = Math.max(0, localLikes[commentId] - 1);
        updatedUserLikedComments[commentId] = false;
      } else {
        updatedLocalLikes[commentId] = (localLikes[commentId] || 0) + 1;
        updatedUserLikedComments[commentId] = true;
      }
  
      setLocalLikes(updatedLocalLikes);
      setUserLikedComments(updatedUserLikedComments);
    };
  
    const handleAddComment = () => {
      if (text.trim() === '') {
        return;
      }
      postComment();
  
      setText('');
      setSelectedSymbol('');
    };
  
    const formatTimeAgo = (commentIndex) => {
      const currentTime = new Date();
      const commentTime = new Date(currentTime - commentIndex * 60000);
  
      const timeDiffInSeconds = Math.floor((currentTime - commentTime) / 1000);
  
      if (timeDiffInSeconds < 60) {
        return `${timeDiffInSeconds}s ago`;
      } else if (timeDiffInSeconds < 3600) {
        const minutes = Math.floor(timeDiffInSeconds / 60);
        return `${minutes}m ago`;
      } else if (timeDiffInSeconds < 86400) {
        const hours = Math.floor(timeDiffInSeconds / 3600);
        return `${hours}h ago`;
      } else {
        return commentTime.toLocaleString();
      }
    };
  

  return (
    <View style={styles.container}>
    <View style={styles.placeImageContainer}>
      <Image source={{ uri: placeImage }} style={styles.placeImage} />
    </View>

    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.commentContainer}>
          <Image
            source={{ uri: item.Client.image }}
            style={styles.profilePicture}
          />
          <View style={styles.commentContent}>
            <Text style={styles.commenterName}>{item.Client.name}</Text>
            <View style={styles.commentHeader}>
              <Text style={styles.commentTime}>{formatTimeAgo(index)}</Text>
              <TouchableOpacity
                style={styles.likeButton}
                onPress={() => handleLikePress(item.id)}
              >
                <Text style={styles.likeButtonText}>
                  {userLikedComments[item.id] ? 'Unlike' : 'Like'}{' '}
                  {`(${localLikes[item.id] || 0})`}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.commentText}>{item.comment}</Text>
          </View>
        </View>
      )}
    />
      <View style={{position:'absolute',top:580 , left : 60}}>
       <Ratings client_id={iddClient}/>
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

      <View style={styles.commentInputContainer}>
        <View style={styles.commentInputWrapper}>
          <Image
            source={{ uri: 'YOUR_PROFILE_IMAGE_URL' }} 
            style={styles.profilePicture}
          />
          <TextInput
            style={styles.commentInput}
            placeholder="Write a comment..."
            onChangeText={setText}
            value={text}
          />
        </View>
        <Ratings />
        <TouchableOpacity style={styles.commentButton} onPress={handleAddComment}>
          <Text style={styles.commentButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showSymbolsModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose a Reaction</Text>
            <View style={styles.symbolsContainer}>
              {symbols.map((symbol, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.symbolOption}
                  onPress={() => {
                    setSelectedSymbol(symbol);
                    setShowSymbolsModal(false);
                  }}
                >
                  <Text style={styles.symbolOptionText}>{symbol}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  placeImageContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  placeImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profilePicture: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commenterName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  commentTime: {
    fontSize: 12,
    color: '#777',
  },
  likeButton: {
    padding: 4,
    borderRadius: 4,
  },
  likeButtonText: {
    fontSize: 12,
    color: '#1877f2',
  },
  commentText: {
    fontSize: 14,
    color: '#1c1e21',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  commentInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f0f2f5',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  commentInput: {
    flex: 1,
    height: 32,
    fontSize: 14,
    color: '#1c1e21',
    paddingHorizontal: 8,
    marginLeft: -20,
  },
  commentButton: {
    backgroundColor: '#1877f2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  commentButtonText: {
    color: 'white',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  symbolsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  symbolOption: {
    width: '20%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  symbolOptionText: {
    fontSize: 24,
  },
});

export default Comments
