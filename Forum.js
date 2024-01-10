import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ForumScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Znalezione klucze PILNE',
      author: 'User123',
      createdDate: '2023-11-10',
      comments: [
        { id: 101, author: 'Admin', text: 'We will address this issue soon.' },
        { id: 102, author: 'User456', text: 'I faced the same problem!' }
      ]
    },
    {
      id: 2,
      title: 'Parkowanie na chodniku',
      author: 'User789',
      createdDate: '2023-12-05',
      comments: [
        { id: 103, author: 'User321', text: 'I suggest organizing a picnic.' }
      ]
    },
    // Add more placeholder posts here
  ]);

  useEffect(() => {
    if (route.params && route.params.newPost) {
      const newPost = route.params.newPost;
      setPosts([...posts, newPost]);
    }
  }, [route.params]);

  const renderPosts = () => {
    return posts.map(post => (
      <View key={post.id} style={styles.postContainer}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postText}>Author: {post.author}</Text>
      <Text style={styles.postText}>Created Date: {post.createdDate}</Text>
      <TouchableOpacity onPress={() => navigateToPostDetails(post.id)}>
        <Text style={styles.linkText}>View Comments ({post.comments.length})</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="heart-outline" size={24} color="red" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => replyToPost(post.id)}>
        <Text style={styles.linkText}>Reply</Text>
      </TouchableOpacity>
    </View>
    ));
  };

  const handleAddPost = () => {
    navigation.navigate('addPostForum');
  };

  return (
    <View style={styles.container}>
      {/* Filter options */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
        {/* Add a dropdown or modal for filter options here */}
        {/* For simplicity, I'll create a basic modal */}
        {/* This should be replaced with your preferred dropdown/modal component */}
        {/* Replace this with your preferred dropdown/modal */}
        <View style={styles.filterModal}>
          <TouchableOpacity style={styles.filterOption}>
            <Text style={styles.filterOptionText}>Most Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterOption}>
            <Text style={styles.filterOptionText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterOption}>
            <Text style={styles.filterOptionText}>Featured</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.postsContainer}>
        {posts.map(post => (
           <View key={post.id} style={styles.postContainer}>
           <Text style={styles.postTitle}>{post.title}</Text>
           <Text style={styles.postText}>Author: {post.author}</Text>
           <Text style={styles.postText}>Created Date: {post.createdDate}</Text>
           <TouchableOpacity onPress={() => navigateToPostDetails(post.id)}>
             <Text style={styles.linkText}>View Comments ({post.comments.length})</Text>
           </TouchableOpacity>
           <TouchableOpacity>
             <Ionicons name="heart-outline" size={24} color="red" />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => replyToPost(post.id)}>
             <Text style={styles.linkText}>Reply</Text>
           </TouchableOpacity>
         </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={handleAddPost} style={styles.addButton}>
        <Ionicons name="add-circle-outline" size={50} color="blue" />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  postsContainer: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  filterButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  filterButtonText: {
    color: 'black',
  },
  filterModal: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  filterOption: {
    paddingVertical: 5,
  },
  filterOptionText: {
    color: 'black',
  },
});

export default ForumScreen;