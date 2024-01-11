import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Switch, Text, StyleSheet, TouchableOpacity } from 'react-native';


const NotificationsSettings = () => {
  const [replyNotifications, setReplyNotifications] = useState(false);
  const [pollNotifications, setPollNotifications] = useState(false);
  const [blockAnnouncementNotifications, setBlockAnnouncementNotifications] = useState(false);
  const [paymentNotifications, setPaymentNotifications] = useState(false);
  const [eventNotifications, setEventNotifications] = useState(false);

  const toggleReplyNotifications = () => {
    setReplyNotifications(previousState => !previousState);
  };

  const togglePollNotifications = () => {
    setPollNotifications(previousState => !previousState);
  };

  const toggleBlockAnnouncementNotifications = () => {
    setBlockAnnouncementNotifications(previousState => !previousState);
  };

  const togglePaymentNotifications = () => {
    setPaymentNotifications(previousState => !previousState);
  };

  const toggleEventNotifications = () => {
    setEventNotifications(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Powiadomienia o odpowiedziach na Twój post</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={replyNotifications ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleReplyNotifications}
          value={replyNotifications}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Powiadomienia o nowych ankietach</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={pollNotifications ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={togglePollNotifications}
          value={pollNotifications}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Powiadomienia o nowych ogłoszeniach w Twojej okolicy</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={blockAnnouncementNotifications ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleBlockAnnouncementNotifications}
          value={blockAnnouncementNotifications}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Powiadomienia o nowych płatnościach</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={paymentNotifications ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={togglePaymentNotifications}
          value={paymentNotifications}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Powiadomienia o nowych wydarzeniach z Twoim udziałem</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={eventNotifications ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleEventNotifications}
          value={eventNotifications}
        />
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  settingText: {
    fontSize: 16,
    flex: 3,
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
});

export default NotificationsSettings;
