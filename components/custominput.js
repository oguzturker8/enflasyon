import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function CustomInput({value, onChangeText, placeholder}) {
  secureTextEntry = placeholder === 'Password' ? true : false;
  return (
    <TextInput
      style={styles.container}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: 40,
    marginVertical: 5,
    paddingLeft: 15,
    fontSize: 14,
    color: '#242016',
    backgroundColor: '#fafafa',
    elevation: 1,
    zIndex: 1,
  },
});
