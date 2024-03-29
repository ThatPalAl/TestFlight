import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


/* FACILITIES OBIEKTY
Modul, pozwalajacy na zebranie i dodawnaie informacji o wszelkiego rodzaju 'obiektach'/'aktywnosciach' ktore sa zapewnione w ramach 
zycia na osiedlu.
Glownym celem jest wyswietlenie listy z (prawdopodobnie predefiniowanymi obiektami), ktore nie powinny sie specjalnie zmieniac - 
-aczkolwiek powinnisy oferowac mozliwosc zapewnienia zmian.
Z perspektywy uzytkownika natomiast, nalezy pokazac mu liste obiektow, z prostymi szczegolami (typu godziny otwarcia, opiekun/dozorca)
i ewentualnie udostepnic kalendarz i mozliwosc rezerwowania obiektu.
Kazdy obiekt powinien tez miec swoje opinie/reviewsy na zasadzie plusow i minusow (Bardziej model skarg/pochwal niz gwiazdek i recenzji)
ktory pozwala uzytkownikom na biezaco oceniac, informowac o sytuacji obiektow, ewentualnych zazaleniach lub prosbach.
*/

const NewScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* Header */}
      <View style={styles.headerText}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Facilities</Text>
        <Text></Text>
      </View>


      {/* Buttons */}
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 20 }}>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Ionicons name='football' size={24} color="black" />
          <Text>Footbal pitch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Ionicons name="water" size={24} color="black" />
          <Text>Swimming Pool</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Ionicons name="search-circle-outline" size={24} color="black" />
          <Text>Table Tenis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Ionicons name="game-controller" size={24} color="black" />
          <Text>Game room</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Bar */}
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
    alignItems: 'center',
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
    paddingTop: 20,
    paddingVertical: 30,
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
  toggleButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
};

export default NewScreen;