import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddPostForum = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imageURL, setImageURL] = useState('');

  const setPosts = route.params?.setPosts;

  const handlePost = () => {
    const newPost = {
      id: Math.floor(Math.random() * 1000),
      title,
      text,
      author: 'YourUserName',
      createdDate: new Date().toISOString(),
      comments: [],
      image: imageURL,
    };

    // Update the posts list in the Forum screen by calling setPosts
    setPosts(prevPosts => [...prevPosts, newPost]);

    navigation.goBack(); // Go back to the Forum screen after adding the post
  };

  const handleImageUpload = () => {
    // Implement your image upload logic here and set the imageURL state
    // For example:
    // setImageURL('URL_OF_UPLOADED_IMAGE');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Text"
        multiline
        value={text}
        onChangeText={setText}
      />
      {/* Image Upload Placeholder */}
      <TouchableOpacity style={styles.imageButton} onPress={handleImageUpload}>
        <Text style={styles.imageButtonText}>Upload Image</Text>
      </TouchableOpacity>
      {/* Show Image Preview */}
      {imageURL ? (
        <Image source={{ uri: imageURL }} style={styles.imagePreview} />
      ) : null}
      {/* Add confirmation button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handlePost}>
        <Text style={styles.confirmButtonText}>Add Post</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  imageButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  imageButtonText: {
    color: 'blue',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddPostForum;
