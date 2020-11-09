import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const SPACING = 20;

export default function DrawerToggler({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={styles.container}>
      <Icon name="menu-outline" size={30} color="#ffca44" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING,
    width: Dimensions.get('window').width * 0.85,
  },
});
