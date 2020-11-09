import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const SPACING = 20;

export default function Back({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}>
      <Icon name="chevron-back" size={30} color="#ffca44" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING,
  },
});
