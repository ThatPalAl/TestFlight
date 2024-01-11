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
      seen: false,
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
      seen: false,
      comments: [
        { id: 103, author: 'User321', text: 'I suggest organizing a picnic.' }
      ]
    },
    {
      id: 3,
      title: 'Pomoc w zakupie samochodu',
      author: 'User101',
      createdDate: '2024-01-05',
      seen: true, 
      comments: [
        { id: 104, author: 'Admin', text: 'We recommend checking our FAQ section.' },
        { id: 105, author: 'User202', text: 'I can help you with that. PM me.' }
      ]
    },
    {
      id: 4,
      title: 'Utrata dokumentów',
      author: 'User303',
      createdDate: '2024-01-06',
      seen: true,
      comments: [
        { id: 106, author: 'User404', text: 'You should report it to the local authorities.' }
      ]
    },
  ]);

  const [viewedPosts, setViewedPosts] = useState([]);

  const isPostViewed = (postId) => {
    return viewedPosts.includes(postId);
  };

  useEffect(() => {
    if (route.params && route.params.newPost) {
      const newPost = { ...route.params.newPost, seen: false }; // Set 'seen' property for new post
      setPosts([...posts, newPost]);
    }
  }, [route.params]);

  const markPostAsViewed = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, seen: true }; // Mark the post as seen when clicked
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const renderPosts = () => {
    return posts.map(post => (
      <View key={post.id} style={styles.postContainer}>
        {!post.seen && <Text style={styles.newTag}>NEW</Text>}
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postText}>Author: {post.author}</Text>
        <Text style={styles.postText}>Created Date: {post.createdDate}</Text>
        <TouchableOpacity onPress={() => { navigateToPostDetails(post.id); markPostAsViewed(post.id); }}>
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
      {/* Sort options */}
      <View style={styles.sortContainer}>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortButtonText}>Sort</Text>
        </TouchableOpacity>
        <View style={styles.sortOptions}>
          <TouchableOpacity style={styles.sortOption}>
            <Text style={styles.sortOptionText}>Most Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortOption}>
            <Text style={styles.sortOptionText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortOption}>
            <Text style={styles.sortOptionText}>Featured</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.postsContainer}>
        {renderPosts()}
      </ScrollView>

      <TouchableOpacity onPress={handleAddPost} style={styles.addButton}>
        <Ionicons name="add-circle-outline" size={50} color="blue" />
      </TouchableOpacity>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Account')}>
          <Ionicons name="person-circle-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
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
    bottom: 50,
    right: 20,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40, // Adjust this value based on your layout
    zIndex: 1, // Ensure it's above other elements
  },
  sortButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  sortButtonText: {
    color: 'black',
  },
  sortOptions: {
    flexDirection: 'row',
  },
  sortOption: {
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  sortOptionText: {
    color: 'black',
  },
  newTag: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 12,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightgray',
    paddingVertical: 10,
  },
  bottomBarItem: {
    alignItems: 'center',
  },
});

export default ForumScreen;
