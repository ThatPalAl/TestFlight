import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EditProfileScreen from './EditProfile';

const AccountScreen = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
  };

  const navigation = useNavigation();

  const handleLogout = () => {
    // Handle logout logic
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionItem} onPress={EditProfileScreen}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem} onPress={() => {/* Implement change password functionality */}}>
          <Text>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem} onPress={() => {/* Implement security settings */}}>
          <Text>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem} onPress={() => {/* Implement notification settings */}}>
          <Text>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem} onPress={handleLogout}>
          <Text style={{ color: 'red' }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    color: 'gray',
  },
  options: {
    width: '100%',
  },
  optionItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
});

export default AccountScreen;
