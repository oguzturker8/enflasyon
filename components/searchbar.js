import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
const SPACING = 20;

export default function SearchBar({setFiltered, rawData}) {
  const [input, setInput] = useState('');

  const handleSearch = (text) => {
    setInput(text);
  };

  useEffect(() => {
    setFiltered(
      rawData.filter((item) =>
        item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
      ),
    );
  }, [input]);

  return (
    <View style={styles.container}>
      <Icon name="search" size={18} color="#90876f" style={styles.icon} />
      <TextInput
        value={input}
        placeholder="Search product by name."
        placeholderTextColor="#90876f"
        onChangeText={(text) => handleSearch(text)}
        style={styles.search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    height: 40,
    width: width * 0.7,
    borderRadius: 8,
    backgroundColor: '#fafafa',
    color: '#90876f',
    zIndex: 2,
    elevation: 2,
    paddingLeft: SPACING * 2,
  },
  icon: {
    position: 'absolute',
    zIndex: 3,
    elevation: 3,
    left: SPACING / 2,
  },
});
