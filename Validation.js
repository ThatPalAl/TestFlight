import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen'

const ValidationScreen = () => {
  const navigation = useNavigation();

  const handleSuccessfulAuth = () => {
    navigation.navigate('HomeScreen'); // Navigate to 'App' screen
  };

  return (
    <View>
      {/* Your validation components/buttons */}
      <Button title="Login" onPress={handleSuccessfulAuth} />
      <Button title="Register" onPress={handleSuccessfulAuth} />
      {/* Other UI components */}
    </View>
  );
};

export default ValidationScreen;