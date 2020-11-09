import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomInput from '../components/custominput';
import {AuthContext} from '../helper/authprovider';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const SPACING = 20;

export default function Register({navigation}) {
  const {register} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [imagePath, setImagePath] = useState({
    uri: '',
  });
  const [imageFirebaseLink, setImageFirebaseLink] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const registerValidation = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      re.test(String(email).toLowerCase()) &&
      pass.length > 3 &&
      username.length > 3
    ) {
      return true;
    }
    return false;
  };

  const chooseFile = () => {
    setStatus('');
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        //console.log('User cancelled image picker', storage());
      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
      } else {
        let path = getPlatformPath(response).value;
        let fileName = getFileName(response.fileName, path);
        setImagePath(path);
        uploadImageToStorage(path, fileName);
      }
    });
  };

  const getFileName = (name, path) => {
    if (name != null) {
      return name;
    }
    if (Platform.OS === 'ios') {
      path = '~' + path.substring(path.indexOf('/Documents'));
    }
    return path.split('/').pop();
  };

  const uploadImageToStorage = async (path, name) => {
    setIsLoading(true);
    let reference = storage().ref(name);
    let task = reference.putFile(path);
    const sampleImage = reference
      .getDownloadURL()
      .then((result) => setImageFirebaseLink(result));
    task
      .then(() => {
        //console.log('Image uploaded to the bucket!');
        setIsLoading(false);
        setStatus('Image uploaded successfully');
      })
      .catch((e) => {
        setStatus('Something went wrong');
        //console.log('uploading image error => ', e);
        setStatus('Something went wrong');
        setIsLoading(false);
      });
  };

  const getPlatformPath = ({path, uri}) => {
    return Platform.select({
      android: {value: path},
      ios: {value: uri},
    });
  };

  const getPlatformURI = (imagePath) => {
    let imgSource = imagePath;
    if (isNaN(imagePath)) {
      imgSource = {uri: imagePath};
      if (Platform.OS == 'android') {
        imgSource.uri = 'file:///' + imgSource.uri;
      }
    }
    return imgSource;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={chooseFile}>
        <Image source={getPlatformURI(imagePath)} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.error}>{loginError}</Text>
      <CustomInput value={email} onChangeText={setEmail} placeholder="E-mail" />
      <CustomInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <CustomInput value={pass} onChangeText={setPass} placeholder="Password" />

      <TouchableOpacity
        style={styles.registerWrapper}
        onPress={() => {
          if (registerValidation()) {
            register(email, pass, username, imageFirebaseLink);
          } else {
            setLoginError('Wrong email or password.');
          }
        }}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.registerText}>Back</Text>
      </TouchableOpacity>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#c3c3c3',
  },
  registerWrapper: {
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
  registerText: {
    fontSize: 14,
    color: '#242016',
  },
  error: {
    color: 'red',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 5,
  },
});
