import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/dist/Entypo';

const Reset = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [icon, setIcon] = useState(true);
  const [iconn, setIconn] = useState(true);

  return (
    <View>
      <AntDesign
        name="arrowleft"
        style={styles.aro}
        onPress={() => navigation.navigate('Company')}
      />
      <Text style={styles.res}>Create new password</Text>
      <Text style={styles.create}>Your new password must be unique</Text>
      <Text style={styles.from}>from those previously used.</Text>
      <View style={styles.tion}>
        <TextInput
          placeholder="Password"
          value={email}
          placeholderTextColor="black"
          onChangeText={val => setEmail(val)}
          style={styles.tinputt}
          secureTextEntry={icon}
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
          placeholder=" confirm Password"
          value={password}
          placeholderTextColor="black"
          onChangeText={val => setPassword(val)}
          style={styles.tinputt}
          secureTextEntry={iconn}
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
    
      <TouchableOpacity
        style={styles.log}
        onPress={() => navigation.navigate('Change')}>
        <Text style={styles.logt}>Reset password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
  res: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 100,
    fontWeight: 'bold',
    color: '#1F41BB',
  },
  create: {
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
  },
  from: {
    marginLeft: 20,
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
  tinputt: {
    color: 'black',
    // backgroundColor: '#fff',
    // borderRadius: 10,
    // marginLeft: 20,
    // paddingLeft: 30,
    // // backgroundColor:"#F7F8F9"
    // marginTop: 30,
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
  ant: {
    fontSize: 20,
    color: 'black',
  },
  log: {
    backgroundColor: '#1F41BB',
    width: 325,
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
  aro: {
    fontSize: 30,
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
