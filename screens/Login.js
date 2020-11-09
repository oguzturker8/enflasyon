import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomInput from '../components/custominput';
import {AuthContext} from '../helper/authprovider';

const SPACING = 20;

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loginError, setLoginError] = useState('');
  const {login} = useContext(AuthContext);

  const loginValidation = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()) && pass.length >= 6) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enflasyon</Text>
      <Text style={styles.error}>{loginError}</Text>
      <CustomInput value={email} onChangeText={setEmail} placeholder="E-mail" />
      <CustomInput value={pass} onChangeText={setPass} placeholder="Password" />
      <TouchableOpacity
        onPress={() => {
          if (loginValidation()) {
            login(email, pass);
          } else {
            setLoginError('Wrong email or password.');
          }
        }}
        style={styles.loginWrapper}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.createWrapper}>
        <Text style={styles.createText}>Don't you have a profile.</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={styles.createButton}> Create one.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '70%',
    fontSize: 32,
    color: '#242016',
    marginBottom: SPACING,
  },
  loginWrapper: {
    backgroundColor: '#ffca44',
    width: '70%',
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING,
    elevation: 2,
    zIndex: 2,
  },
  loginText: {
    fontSize: 14,
    color: '#242016',
  },
  createWrapper: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    fontSize: 14,
    color: '#242016',
  },
  createButton: {
    color: '#ffca44',
  },
  error: {
    color: 'red',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 5,
  },
});
