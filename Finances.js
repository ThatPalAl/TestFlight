import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

/* Moduł Płatności
Podpiecie pod odpowiednie buttony bramek do oplat za gaz, wode, prad, czysz itd
Administrator wybiera platnosci ktore moga byc obsluzone przez aplikacje. 
Uzytkownik dostaje instrukcje do skonfigurowania swoich platnosci
Nalezy zrobic podzakladke 'Podsumowania' platnosci, lub okreslic status przy odpowiednich przyciskach:
np Prad - Kolor Czerwony/Tresc swiadczaca  o nie zaplaconmy rachunku
*/

const NewScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* Header */}
      <View style={styles.headerText}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', }}>OPTION</Text>
        <Text>Please choose one of the options below</Text>
      </View>

      {/* Buttons */}
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 20 }}>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Ionicons name='bus-outline' size={24} color="black" />
          <Text>Public Transport news</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
          <Text>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
          <Text>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
          <Text>Button 4</Text>
        </TouchableOpacity>
        {/* Add similar TouchableOpacity components for other buttons */}
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
  headerText: {
    backgroundColor: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
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
};

export default NewScreen;
