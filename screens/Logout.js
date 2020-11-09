import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../helper/authprovider';

export default function Logout() {
  const {logout} = useContext(AuthContext);

  useEffect(() => {
    logout();
  });

  return <View />;
}

const styles = StyleSheet.create({});
