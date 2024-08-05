import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {StackActions, useNavigation} from '@react-navigation/native';

const Look = () => {
  const deviceWidth=useWindowDimensions().width;
  const deviceHeight=useWindowDimensions().height;
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View>
      <View style={{alignSelf:"center",marginTop:50}}>
      <Text style={styles.com}>Welcome</Text>
      <Image source={require('./assets/solar.png')} style={styles.img} />
      </View>
      <TouchableOpacity
        style={[styles.log,{width:deviceWidth > 360 ? deviceWidth-300 : deviceWidth-50}]}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logt}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.logg,{width:deviceWidth > 360 ? deviceWidth-300 : deviceWidth-50}]}
        onPress={() => navigation.navigate('Rigster')}>
        <Text style={styles.logtt}>Register</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default Look;
const styles = StyleSheet.create({
  img: {
    width: 320,
    height: 320,
    marginLeft: 25,
    marginTop: 30,
  },
  logo: {
    fontSize: 20,
  },
  logoo: {
    alignSelf:"center",
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#1F41BB',
  },
  com: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
    fontWeight:"bold",
    fontFamily:"verdana"
  },
  log: {
    backgroundColor: '#1F41BB',
    width: 273,
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    alignSelf:"center"
  },
  logt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    paddingTop: 8,
  },
  logg: {
    borderWidth: 1,
    //  backgroundColor:"#1F41BB",
    width: 273,
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    borderColor: '#1F41BB',
    alignSelf:"center",
    marginBottom:20
  },
  logtt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    paddingTop: 8,
  },
});
