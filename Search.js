import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = ({ navigation, functionalityList }) => {
  const [searchValue, setSearchValue] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerStyle = darkMode
    ? { ...styles.container, backgroundColor: '#16161D' }
    : { ...styles.container, backgroundColor: '#FFFFFF' };

  const filteredFunctionalities = searchValue
    ? functionalityList.filter(
      (item) => item.toLowerCase().includes(searchValue.toLowerCase())
    )
    : [];

  return (
    <View style={containerStyle}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          placeholderTextColor="lightgray"
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
      </View>
      {/* Display filtered functionalities below the search bar */}
      {searchValue && (
        <View style={styles.functionalityList}>
          {filteredFunctionalities.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.functionalityItem}
              onPress={() => {
                // Modify the onPress logic here
                navigation.navigate(item); // Navigate to the screen based on the selected functionality
                setSearchValue(''); // Clear search bar after selection (optional)
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

      )}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  searchContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  functionalityList: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  functionalityItem: {
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
    width: '100%',
  },
  bottomBarItem: {
    alignItems: 'center',
  },
});

export default SearchScreen;
