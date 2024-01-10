import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'react-native';
import NotificationsScreen from './Notifications';
import ServicesScreen from './Services';
import FinancesScreen from './Finances';
import Facilities from './Facilities';
import SearchScreen from './Search';
import ContactScreen from './Contact';
import NewsScreen from './News';
import AccountScreen from './Account';
import ForumScreen from './Forum';
import EditProfileScreen from './EditProfile';
import AdvertisementsMainScreen from './AdvertisementsMain';
import DocumentsScreen from './Documents';
import addPostForumScreen from './addPostForum'
import LoginScreen from './Login';


const Stack = createStackNavigator();

const functionalityList = [
  'App',
  'Facilities',
  'Contact',
  'News',
  'Services',
  'Finances',
  'EditProfile',
  'Forum',
  'Account',
  'Notifications',
  'Advertisements',
  'Documents',
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Finances" component={FinancesScreen} />
        <Stack.Screen name="Facilities" component={Facilities} />
        <Stack.Screen name="Search">
          {(props) => <SearchScreen {...props} functionalityList={functionalityList} />}
        </Stack.Screen>
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Forum" component={ForumScreen} />
        <Stack.Screen name="EditProfiler" component={EditProfileScreen} />
        <Stack.Screen name="AdvertisementsMain" component={AdvertisementsMainScreen} />
        <Stack.Screen name="Documents" component={DocumentsScreen} />
        <Stack.Screen name="addPostForum" component={addPostForumScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePayment = () => {
    const paymentGateway = 'https://go.przelewy24.pl/trnRequest/A6F1687FC8-8EFC9D-DF48F8-48035DADE5';
    Linking.openURL(paymentGateway);
  };

  const containerStyle = darkMode
    ? { ...styles.container, backgroundColor: '#16161D' }
    : { ...styles.container, backgroundColor: '#FFFFFF' };

  const buttonColor = darkMode ? '#1f8475' : '#FCD12A';

  return (
    <View style={containerStyle}>
      <View style={styles.bottomButtons}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('News')}>
            <Ionicons name='newspaper-outline' size={50} color="black" />
            <Text>Ogłoszenia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('Forum')}>
            <Ionicons name='people-sharp' size={50} color="black" />
            <Text>Forum</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={handlePayment}>
            <Ionicons name='card-sharp' size={50} color="black" />
            <Text>Płatności</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('Documents')}>
            <Ionicons name='file-tray-full-sharp' size={50} color="black" />
            <Text>Dokumenty</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('Facilities')}>
            <Ionicons name='basketball-outline' size={50} color="black" />
            <Text>Obiekty</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('Services')}>
            <Ionicons name='hammer-outline' size={50} color="black" />
            <Text>Usługi</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom navigation */}
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
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  toggleButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bottomButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FCD12A',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '49%',
    marginVertical: 10,
    height: 120,
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