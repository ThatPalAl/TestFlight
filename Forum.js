import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ContactScreen from './Contact';
import { Ionicons } from '@expo/vector-icons'; 

/*  
FORUM 
Forum jest modułem, gdzie treść jest przeznaczona zarówno dla uzytkowników jak i Administratora. 
Treść na forum (posty) tworzyć moze zarówno administrator jak uzytkownicy
Post dzieli sie na kategorie: Skarga, Wniosek, Dyskusja, Ankieta ...
Kazdy post jest w postaci 'Rodzica' gdzie kazda odpowiedz jest kolejnym 'childem' danego postu:
-do ustalenia w jaki sposob subposty (komentarze) sa wyswietlane np: 
        -od najstarszego (pierwsze 5 i rozwin)
        -od najnowszego (ostatnie 5 i rozwin)
Posty maja pola: id (BIGINT/LONG) - jako Identity, tytul (STRING), dataStworzenia (DATETIME), DataModyfikacji (DATETIME), Tresc (String/nvarchar), Usuniete (BIT) - jako flaga isDeleted ...
*/ 

const NewScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* Header */}
      <View style={styles.headerText}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', }}>USŁUGI</Text>
        <Text>Wybierz opcje:</Text>
      </View>
      {/* Buttons */}
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 20 }}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Ionicons name='construct' size={40} color="black" />
          <Text>Renovation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Ionicons name='bulb' size={40} color="black" />
          <Text>Electricity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Ionicons name="water" size={40} color="black" />
          <Text>Water</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Ionicons name='rose' size={40} color="black" />
          <Text>Cleaning Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Contact')}}>
          <Ionicons name='call-sharp' size={40} color="black" />
          <Text>Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Button Bar */}
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

export default NewScreen;