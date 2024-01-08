import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/* News (more like Advertisements) OGLOSZENIA
Modul, do którego dostęp mają zarówno uzytkownicy jak i Administrator
Treść (Obiety jako ogloszenia) moze dodawac jedynie administrator
Ogloszenia maja charakter infromacyjny.
Administrator informuje w ten sposob spolecznosc o tym co sie dzieje w ramach osiedla/wspolnoty
Kazde ogloszenie ma:
-id, Data stworzenia, DataModyfikacji
-Tytul
-Priorytet (R,G,B) Red jako bardzo wazne, Green jako minor itd.
-Tytul
-Tresc
-Autor (id Admina/pracownika osiedla)
-Czas zycia (do kiedy bedzie wyswietlane)
*** Nalezy ustalic jaki bedzie schemat wyswietlania ogloszen, co bedzie wplywac na jego pozycje ***
*/

const NewsScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerStyle = darkMode
    ? { ...styles.container, backgroundColor: '#16161D' }
    : { ...styles.container, backgroundColor: '#FFFFFF' };

  const textStyles = darkMode
    ? { color: '#FFFFFF' }
    : {};

  const headerStyles = darkMode
    ? { color: '#FFFFFF', fontWeight: 'bold' }
    : {};

  const news = [
    {
      header: 'Scheduled Maintenance',
      date: '2023-11-05',
      color: 'green',
      text: 'Scheduled maintenance on the estate from 8 AM to 5 PM for infrastructure improvements.',
    },
    {
      header: 'Water Supply Disruption',
      date: '2023-12-10',
      color: 'red',
      text: 'Water supply disruption due to pipeline maintenance. Alternate supply available until 4 PM.',
    },
    {
      header: 'Community Meeting',
      date: '2023-10-22',
      color: 'grey',
      text: 'Community meeting at the clubhouse at 7 PM to discuss upcoming renovations.',
    },
    {
      header: 'Road Closure',
      date: '2023-09-15',
      color: 'red',
      text: 'Road closure on Elm Street from 9 AM to 3 PM for roadwork. Use alternate routes.',
    },
    {
      header: 'New Security Measures',
      date: '2024-01-20',
      color: 'green',
      text: 'Introduction of new security protocols starting next week. Residents need to register their guests.',
    },
    {
      header: 'Garbage Collection Update',
      date: '2023-08-01',
      color: 'grey',
      text: 'Change in garbage collection timings from next month. Check the updated schedule.',
    },
  ];

  const renderNews = (newsItem, index) => (
    <TouchableOpacity key={index} style={styles.newsButton}>
      <View style={{ ...styles.newsColor, backgroundColor: newsItem.color }} />
      <View style={styles.newsDetails}>
        <Text style={[styles.newsHeader, textStyles, headerStyles]}>{newsItem.header}</Text>
        <Text style={[styles.newsDate, textStyles]}>Published: {newsItem.date}</Text>
        <Text style={[styles.newsText, textStyles]}>{newsItem.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={containerStyle}>
      <View style={styles.pageHeader}>
        <Text style={[styles.pageTitle, textStyles]}>News and announcements</Text>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleDarkMode}>
          <Ionicons
            name={darkMode ? 'sunny-outline' : 'moon-outline'}
            size={24}
            color="orange"
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.newsScrollView}>
        <View style={styles.newsContainer}>
          {news.map((newsItem, index) => renderNews(newsItem, index))}
        </View>
      </ScrollView>
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
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleButton: {
    padding: 10,
    borderRadius: 5,
  },
  newsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  newsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%', // Adjust width as needed
  },
  newsDetails: {
    marginLeft: 10,
    flex: 1,
  },
  newsImage: {
    width: 70, // Adjust width as needed
    height: 70, // Adjust height as needed
    borderRadius: 35, // Adjust border radius as needed
  },
  newsName: {
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
  newsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  newsColor: {
    width: 20,
    height: '100%',
    marginRight: 10,
    borderRadius: 5,
  },
  newsDetails: {
    flex: 1,
  },
  newsHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsDate: {
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 5,
  },
  newsScrollView: {
    flex: 1,
    width: '100%',
  },
});

export default NewsScreen;
