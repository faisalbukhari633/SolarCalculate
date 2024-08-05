


import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { StackActions, useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const faisal = () => {
    setIcon(true);
    setShow(true);
  };

  const faisall = () => {
    setIcon(false);
    setShow(false);
  };

  const handlesign = async () => {
    try {
      if (email.length === 0 || password.length === 0) {
        Toast.show({
          type: 'error',
          text1: 'Please fill in both email and password.',
        });
        return;
      }

      const res = await auth().signInWithEmailAndPassword(email, password);
      if (res.user.emailVerified) {
        Toast.show({
          type: 'info',
          text1: 'Verified',
        });
        setEmail('');
        setPassword('');
        setErrorMessage(''); // Clear error message on successful login
        navigation.dispatch(StackActions.replace('Welcome'));
      } else {
        Toast.show({
          type: 'error',
          text1: 'Please verify your email',
        });
        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
        setEmail('');
        setPassword('');
        setErrorMessage(''); // Clear error message if email is not verified
      }
    } catch (error) {
      console.log(error.message);
      if (error.message == "[auth/invalid-credential] The supplied auth credential is incorrect, malformed or has expired.") {
        
        setErrorMessage('Incorrect email or password. Please try again.');
      }
    }
  };

  const handleEmailChange = (val) => {
    setEmail(val);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handlePasswordChange = (val) => {
    setPassword(val);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <View>
      <AntDesign
        name="arrowleft"
        style={styles.aro}
        onPress={() => navigation.navigate('Look')}
      />
      <Text style={styles.Login}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        style={styles.tinput}
        placeholderTextColor="black"
      />
      <View style={styles.tion}>
        <TextInput
          placeholder="Password"
          value={password}
          placeholderTextColor="black"
          onChangeText={handlePasswordChange}
          secureTextEntry={!show}
          style={styles.tinputt}
        />
        {!icon ? (
          <TouchableOpacity onPress={faisal}>
            <AntDesign name="eyeo" style={styles.ant} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={faisall}>
            <Entypo name="eye-with-line" style={styles.ant} />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage ? (
        <Text style={{ marginLeft: 20, color: 'red' }}>{errorMessage}</Text>
      ) : null}
      <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
        <Text style={styles.for}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.log} onPress={handlesign}>
        <Text style={styles.logt}>Login</Text>
      </TouchableOpacity>
      <Image source={require('../assets/face.png')} style={styles.face} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Login: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 110,
    color: '#1F41BB',
  },
  tinput: {
    backgroundColor: '#fff',
    width:"90%",
    height: 50,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 70,
    paddingLeft: 30,
    backgroundColor: '#E8ECF4',
  },
  tinputt: {
    color: 'black',
    width:"90%",
  },
  tion: {
    flexDirection: 'row',
    backgroundColor: '#E8ECF4',
    width: "90%",
    height: 50,
    justifyContent: 'space-between',
    marginTop: 30,
    marginLeft: 20,
    borderRadius: 10,
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  ant: {
    fontSize: 20,
    color: 'black',
  },
  for: {
    color: '#1F41BB',
    marginLeft: 200,
    marginTop: 10,
  },
  log: {
    backgroundColor: '#1F41BB',
    width: "90%",
    height: 50,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 70,
  },
  logt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    paddingTop: 8,
  },
  face: {
    width: 80,
    height: 80,
    marginLeft: 140,
    marginTop: 20,
    color: 'blue',
  },
  aro: {
    fontSize: 30,
    position: 'absolute',
    top: 20,
    left: 20,
  },
});











