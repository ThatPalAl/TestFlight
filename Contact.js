import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/* 
Kontakt
Podzakladka modulu Uslugi, w ktorym znajdujemy liste pracownikow/uslugodawcow.
Kazdy Element (uslugodawca) ma:
-Imie i Nazwisko
-email (ewentualnie)
-nr telefonu, 
-zdjecie (ewentualnie)
-godziny pracy
-cennik
-inne predyspozycje (ewentualnie)
*/

const ContactScreen = ({navigation}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerStyle = darkMode
    ? { ...styles.container, backgroundColor: '#16161D' }
    : { ...styles.container, backgroundColor: '#FFFFFF' };

  const contacts = [
    {
      name: 'John Doe',
      phoneNumber: '+123456789',
      availability: 'Mon-Fri 9AM-5PM',
      job: 'Electrician',
      image: 'https://as2.ftcdn.net/v2/jpg/06/21/37/37/1000_F_621373721_BENdK9sF5c4F9LsVtGblESJJ12i0D17q.jpg',
    },
    {
      name: 'Alice Smith',
      phoneNumber: '+987654321',
      availability: 'Mon-Sat 8AM-6PM',
      job: 'Plumber',
      image: 'https://as1.ftcdn.net/v2/jpg/06/21/02/64/1000_F_621026409_TDBPcX1JsGqypQe1yqINGNUwkWhfoNSy.jpg',
    },
    {
      name: 'Michael Johnson',
      phoneNumber: '+111223344',
      availability: 'Tue-Sun 10AM-8PM',
      job: 'Security',
      image: 'https://as1.ftcdn.net/v2/jpg/03/16/72/68/1000_F_316726850_Kp5gHry52XIA0Cedl7b2K1remR1hJ8NU.jpg',
    },
    {
      name: 'Emily Clark',
      phoneNumber: '+444556677',
      availability: 'Wed-Mon 7AM-4PM',
      job: 'Administration',
      image: 'https://as2.ftcdn.net/v2/jpg/06/34/40/27/1000_F_634402775_bEI4r4gDSooIj8xyM8l0nYTiYDyS75SL.webp',
    },
    // Add more contact details as needed
  ];

  const renderContact = (contact, index) => (
    <TouchableOpacity key={index} style={styles.contactButton}>
      <Image source={{ uri: contact.image }} style={styles.contactImage} />
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text>{contact.phoneNumber}</Text>
        <Text>{contact.availability}</Text>
        <Text>{contact.job}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={containerStyle}>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleDarkMode}>
        <Ionicons
          name={darkMode ? 'sunny-outline' : 'moon-outline'}
          size={24}
          color="orange"
        />
      </TouchableOpacity>

      <View style={styles.contactsContainer}>
        {contacts.map((contact, index) => renderContact(contact, index))}
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
  },
  toggleButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  contactsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%', // Adjust width as needed
  },
  contactDetails: {
    marginLeft: 10,
    flex: 1,
  },
  contactImage: {
    width: 70, // Adjust width as needed
    height: 70, // Adjust height as needed
    borderRadius: 35, // Adjust border radius as needed
  },
  contactName: {
    fontWeight: 'bold',
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

export default ContactScreen;
