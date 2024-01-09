import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

/* SERVICES /USLUGI
Modul w ktorym mozemy:
-Zarezerwowac/umowic usluge  - podzakladka Create/Apply for a service
-Sprawdzic status uslugi - pozakladka - Check status
-Zobaczyc liste uslug i cennik (w ramach pkt 1, czy osobno?) - list of services (podzakladka?)
-Znalezc kontakt do wszelkiego rodzaju uslugodawcow lub administratorow/ochrony (Contacts)
*/

const AdvertisementsMainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={styles.headerText}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', }}>USŁUGI</Text>
        <Text>Wybierz opcje:</Text>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 20 }}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Ionicons name='add-circle-sharp' size={50} color="black"/>
          <Text>Dodaj Ogloszenie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Ionicons name='bulb' size={50} color="black"/>
          <Text>Wyswietl aktualne ogloszenia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Ionicons name='rose' size={50} color="black"/>
          <Text>Cleaning Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Contact')}}>
          <Ionicons name='call-sharp' size={50} color="black"/>
          <Text>Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Button Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={24} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications" size={24} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Account')}>
          <Ionicons name="person-circle-sharp" size={24} color="black"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: 'orange',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    flexDirection: 'row',
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
};

export default AdvertisementsMainScreen;