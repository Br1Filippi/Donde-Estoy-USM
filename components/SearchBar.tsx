import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  onSearch?: (text: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.input}
          placeholder="Busca Tu Sala o Edificio"
          placeholderTextColor="#666"
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 25,
    width: '90%',
    alignSelf: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;