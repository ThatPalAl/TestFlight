import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AddPostForum = ({ navigation, route }) => {
  const [selectedOption, setSelectedOption] = useState(''); // State to hold the selected option
  const [title, setTitle] = useState(''); // State for title
  const [text, setText] = useState(''); // State for text
  const [imageURL, setImageURL] = useState(''); // State for image URL

  const options = ['Ankieta', 'Dyskusja', 'Pytanie', 'Skarga', 'Propozycja', 'Zawiadomienie'];

  const handleImageUpload = () => {
    // Implement your image upload logic here and set the imageURL state
    // For example:
    // setImageURL('URL_OF_UPLOADED_IMAGE');
  };

  const handlePost = () => {
    // Implement your logic to add a post using the title, text, and imageURL states
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.textArea}
          placeholder="Text"
          multiline
          value={text}
          onChangeText={setText}
        />
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Option" value="" />
          {options.map((option) => (
            <Picker.Item label={option} value={option} key={option} />
          ))}
        </Picker>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom:30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    minHeight: 100,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  imageButton: {
    backgroundColor: 'lightblue',
    padding: 15,
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
    borderRadius: 5,
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

export default AddPostForum;
