import {firebase} from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Back from '../components/back';

const SPACING = 20;
const {width, height} = Dimensions.get('window');

export default function Profile({navigation}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(firebase.auth().currentUser);
  });

  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'flex-start'}}>
        <Back navigation={navigation} />
      </View>
      <Image style={styles.image} source={{uri: user.photoURL}} />
      <View style={styles.detailWrapper}>
        <Text style={styles.title}>
          {user.displayName || 'Username: Undefined'}
        </Text>
        <Text style={styles.label}>Username</Text>
      </View>
      <View style={styles.detailWrapper}>
        <Text style={styles.title}>{user.email || 'E-mail: Undefined'}</Text>
        <Text style={styles.label}>Email</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: SPACING,
  },
  title: {
    fontSize: 16,
    width: width * 0.7,
    paddingHorizontal: SPACING,
    paddingTop: SPACING / 2 + 5,
    paddingBottom: SPACING / 2,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    elevation: 2,
    zIndex: 2,
    marginVertical: 5,
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.4,
    backgroundColor: '#c3c3c3',
    marginBottom: SPACING,
  },
  detailWrapper: {
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: -5,
    left: 5,
    zIndex: 5,
    elevation: 5,
    backgroundColor: '#f9eed2',
    paddingVertical: 2.5,
    paddingHorizontal: 5,
    borderRadius: 4,
    fontSize: 12,
  },
});
