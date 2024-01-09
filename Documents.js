import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const DocumentDirectoryScreen = ({ navigation }) => {
  const categories = [
    'Mieszkanie',
    'Parking',
    'Umowy',
    'Faktury',
    'Regulaminy',
    'Informacje osiedla',
    // Add more categories as needed
  ];

  const renderCategories = () => {
    return categories.map((category, index) => (
      <TouchableOpacity
        key={index}
        style={styles.categoryButton}
        onPress={() => handleCategoryPress(category)}
      >
        <Ionicons name="document" size={24} color="black" />
        <Text>{category}</Text>
      </TouchableOpacity>
    ));
  };

  const handleCategoryPress = category => {
    // Implement navigation to the respective document category screen
    // You can use navigation.navigate(category) or implement logic based on category
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* Header */}
      <View style={styles.headerText}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Twoje Dokumenty</Text>
        <Text>Oto twoje pliki.</Text>
      </View>

      {/* Document Category Buttons */}
      <View style={{ flexDirection: 'column', marginBottom: 20 }}>
        {renderCategories()}
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
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
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

export default DocumentDirectoryScreen;