import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const EditProfileScreen = () => {
  // Simulated user data (replace with actual data)
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    flatNumber: 'A123',
    dateOfBirth: '01/01/1990',
    // Add more user information as needed
  });

  const handleChange = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const handleSave = () => {
    // Implement logic to save changes
    // For example: send updated data to the server
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={user.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={user.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        value={user.email}
        onChangeText={(text) => handleChange('email', text)}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={user.flatNumber}
        onChangeText={(text) => handleChange('flatNumber', text)}
        placeholder="Flat Number"
      />
      <TextInput
        style={styles.input}
        value={user.dateOfBirth}
        onChangeText={(text) => handleChange('dateOfBirth', text)}
        placeholder="Date of Birth"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {/* Navigate to Change Password screen */}}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      {/* Add more buttons or functionalities as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
