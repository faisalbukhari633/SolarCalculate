import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {StackActions, useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const Rigster = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [icon, setIcon] = useState(true);
  const [iconn, setIconn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handledata = async () => {
    if (password !== confirm) {
      setErrorMessage('Passwords do not match');
    } else {
      try {
        if (email.length > 0) {
          const res = await auth().createUserWithEmailAndPassword(
            email,
            password,
          );
         await auth().currentUser.sendEmailVerification()
         await auth().signOut()
          setErrorMessage('');
          setEmail('');
          setPassword('');
          setConfirm();
          Alert.alert("please verified")
          navigation.navigate('Welcome');
        } else {
          Alert.alert('enter value');
        }
      } catch (error) {
        console.log('error createing', error);
      }
    }
  };

  //////////////////////////////email password///////////////////
  // const handlelogin = async () => {
  //   const res = await auth().createUserWithEmailAndPassword(
  //     email,
  //     password,
  //   );
  //   console.log(res);
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  ///////////////////////////google ////////////////////////////////
  const handleLogin = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      if (userCredential.user) {
        navigation.navigate('Welcome');
      }
    } catch (error) {
      console.error('Login failed with error: ', error);
    }
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '118331667605-lvsoickp59vmth44gpbg02u9ofo4ohcn.apps.googleusercontent.com',
    });
  }, []);
  ///////////////////////////faceboook//////////////////////

  const handleLoginn = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
      ]);
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
          throw new Error('Something went wrong obtaining access token');
        }
        const credential = auth.FacebookAuthProvider.credential(
          data.accessToken,
        );
        await auth().signInWithCredential(credential);
        console.log('Login success');
        navigation.navigate('Welcome');
      }
    } catch (error) {
      console.log('Login fail with error: ' + error);
    }
  };

  return (
    <View>
      <AntDesign
        name="arrowleft"
        style={styles.aro}
        onPress={() => navigation.navigate('Look')}
      />
      <Text style={styles.rig}>Register</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={val => setEmail(val)}
        style={styles.tinput}
        placeholderTextColor="black"
      />
      <View style={styles.tion}>
        <TextInput
          placeholder="Password"
          value={password}
          placeholderTextColor="black"
          onChangeText={val => setPassword(val)}
          secureTextEntry={icon}
          style={styles.tinputt}
        />
        {icon ? (
          <TouchableOpacity onPress={() => setIcon(false)}>
            <AntDesign name="eyeo" style={styles.ant} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIcon(true)}>
            <Entypo name="eye-with-line" style={styles.ant} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.tion}>
        <TextInput
          placeholder="Confirm Password"
          value={confirm}
          placeholderTextColor="black"
          onChangeText={val => setConfirm(val)}
          secureTextEntry={iconn}
          style={styles.tinputt}
        />
        {iconn ? (
          <TouchableOpacity onPress={() => setIconn(false)}>
            <AntDesign name="eyeo" style={styles.ant} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIconn(true)}>
            <Entypo name="eye-with-line" style={styles.ant} />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage ? (
        <Text style={{color: '#FF0000', marginLeft: 20}}>{errorMessage}</Text>
      ) : null}
      {/* {confirm.length > 0 && confirm!== password ? (
      ) : null} */}
      <View style={styles.check}>
        <CheckBox value={isSelected} onValueChange={setIsSelected} />
        <Text style={styles.box}>
          i agree to the privecy policy and term of use.
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.logg,
          {backgroundColor: isSelected ? '#1F41BB' : '#D4D4D8'},
        ]}
        onPress={handledata}
        disabled={!isSelected}>
        <Text style={styles.logtt}>Register</Text>
      </TouchableOpacity>

      <View style={styles.or}>
        <Text style={styles.hr}>......</Text>
        <Text style={{color: 'black'}}>Or register with</Text>
        <Text style={styles.hrr}>......</Text>
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <View style={styles.left}>
          <TouchableOpacity onPress={handleLoginn}>
            <Image
              source={require('../assets/facebook.png')}
              style={styles.facebook}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={handleLogin}>
            <Image
              source={require('../assets/google.png')}
              style={styles.facebook}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* <TextInput
        value={confirm}
        onChangeText={val => setConfirm(val)}
        style={styles.conf}
      /> */}
    </View>
  );
};

export default Rigster;

const styles = StyleSheet.create({
  rig: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 80,
    fontWeight: 'bold',
    color: '#1F41BB',
  },
  tinput: {
    backgroundColor: '#fff',
    width: 325,
    height: 50,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 70,
    paddingLeft: 30,
    // backgroundColor:"#F7F8F9"
    backgroundColor: '#E8ECF4',
  },
  tion: {
    flexDirection: 'row',
    backgroundColor: '#E8ECF4',
    width: 325,
    height: 50,
    justifyContent: 'space-between',
    marginTop: 30,
    marginLeft: 20,
    borderRadius: 10,
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  logg: {
    backgroundColor: '#1F41BB',
    width: 325,
    height: 50,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 50,
    borderColor: '#1F41BB',
  },
  logtt: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 8,
    color: 'white',
  },
  check: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10,
  },
  box: {
    marginTop: 5,
    marginLeft: 5,
  },
  or: {
    flexDirection: 'row',

    marginTop: 20,
  },
  hr: {
    backgroundColor: '#E8ECF4',
    height: 2,
    width: 112,
    marginTop: 9,
    marginLeft: 25,
  },
  hrr: {
    backgroundColor: '#E8ECF4',
    height: 2,
    width: 112,
    marginTop: 9,
    marginRight: 15,
  },
  facebook: {
    width: 20,
    height: 20,
  },
  left: {
    backgroundColor: '#E8ECF4',
    borderRadius: 5,
    padding: 9,
  },
  right: {
    backgroundColor: '#E8ECF4',
    padding: 9,
    borderRadius: 5,
    marginLeft: 10,
  },
  ant: {
    fontSize: 25,
  },
  aro: {
    fontSize: 30,
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
