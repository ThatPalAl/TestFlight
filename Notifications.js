import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


const alertsData = [
  {
    id: 1,
    title: 'Problemy z dojazdem do Centrum',
    description: 'Linia 179 od jutra jeździ innym rozkładem.',
    status: 'info',
  },
  {
    id: 2, 
    title: 'Zaginiony kot Miauczek, lat 8',
    description: 'Kuleje na jedną łapkę. Przesyłam zdjęcia w poście, proszę o kontakt.',
  },
  {
    id: 3,
    title: 'Który glab tak zaparkował?',
    description: 'To juz trzeci raz w tym tygodniu',
  },
];

function Notifications({ navigation }) {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const handleAlertPress = (alertData) => {
    setSelectedAlert(alertData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Notifications</Text>
      {alertsData.map((alert, index) => (
        <TouchableOpacity key={alert.id} onPress={() => handleAlertPress(alert)}>
          <Text style={[styles.alertTitle, index > 0 && styles.spacing]}>{alert.title}</Text>
          <View style={styles.separator} />
        </TouchableOpacity>
      ))}

      {selectedAlert && (
        <View style={styles.selectedAlert}>
          <Text style={styles.alertTitle}>{selectedAlert.title}</Text>
          <Text style={styles.alertDescription}>{selectedAlert.description}</Text>
          <TouchableOpacity onPress={() => setSelectedAlert(null)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('AddNew')}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 1,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    backgroundColor: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  alertTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  spacing: {
    marginTop: 20,
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: 'gray',
    width: '80%',
    alignSelf: 'center',
  },
  selectedAlert: {
    alignItems: 'center',
    marginTop: 20,
  },
  alertDescription: {
    marginTop: 10,
  },
  closeButton: {
    marginTop: 20,
    color: 'blue', // Change color or add more styling
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
});

export default Notifications;