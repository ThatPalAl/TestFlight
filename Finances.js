import React from 'react';
import { View, Text, TouchableOpacity, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const FinancesScreen = ({ navigation }) => {

  const handlePayment = () => {
    const paymentGateway = 'https://go.przelewy24.pl/trnRequest/A6F1687FC8-8EFC9D-DF48F8-48035DADE5';
    Linking.openURL(paymentGateway);
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* Header */}
      <View style={styles.headerText}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', }}>USŁUGI</Text>
        <Text>Oto Twoje płatności, wybierz :</Text>
      </View>
      {/* Buttons */}
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 20 }}>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Ionicons name='construct' size={40} color="black" />
          <Text>Czynsz administracyjny</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Ionicons name='bulb' size={40} color="black" />
          <Text>Prąd</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Ionicons name="water" size={40} color="black" />
          <Text>Woda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Ionicons name='rose' size={40} color="black" />
          <Text>Gaz</Text>
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

export default FinancesScreen;