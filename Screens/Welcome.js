import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import auth from '@react-native-firebase/auth';

const Welcome = () => {
  const navigation = useNavigation();

  // const logout = async () => {
  //   try {
  //     await auth().signOut();
  //     navigation.dispatch(StackActions.replace('Look'));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <ImageBackground
      source={require('../assets//solo.jpg')}
      style={styles.img}>
      <View style={styles.header}>
        {/* <Entypo name="menu" size={40} style={styles.icon} /> */}
      <Text style={styles.wel}>Welcome</Text>
              
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.immg}
        />
      </View>

      <View style={styles.view}>
        <View style={styles.lore}>
          <Text style={styles.load} onPress={() => navigation.navigate('Home')}>
            Load Calculator
          </Text>
          <Text
            style={styles.load}
            onPress={() => navigation.navigate('Price')}>
            Recent price
          </Text>
        </View>
        <View style={styles.lolo}>
          <Text
            style={styles.load}
            onPress={() => navigation.navigate('MoreInfo')}>
            About
          </Text>
          <Text
            style={styles.load}
            onPress={() => navigation.navigate('Faisal')}>
            share
          </Text>
        </View>
      </View>
      {/* <Button title="logout" onPress={logout} /> */}
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:"#fff",
    
  },
  icon: {
    color: 'black',
    marginTop: 50,
    marginLeft: 10,
  },
  view: {
    alignItems: 'center',
    marginTop: 100,

    // justifyContent:"space-between"
  },
  load: {
    fontSize: 10,
    width: 160,
    height: 160,
    borderRadius: 5,
    textAlign: 'center',
    // marginTop: 40,
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: 'rgba(0,0,0,0.8)',
    textAlignVertical: 'center',
    margin: 5,
  },
  rec: {
    fontSize: 20,
    // width: 300,
    // height: 80,
    borderRadius: 5,
    textAlign: 'center',
    // paddingTop: 25,
    // marginTop: 40,
    borderWidth: 1,
    color: '#000',
  },
  about: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#000',
    // width: 250,
    // height: 250,
    borderRadius: 5,
    textAlign: 'center',
    // paddingTop: 25,
    // marginTop: 40,
    color: 'black',
  },
  img: {
    flex: 1,
    opacity: 0.9,
  },
  lore: {
    flexDirection: 'row',
  },
  lolo: {
    flexDirection: 'row',
  },
  immg: {
    width: 70,
    height: 70,
    marginRight: 5,
    marginTop: 40,
  },
  wel:{
    textAlign:"center",
    fontSize:30,
    color:"#FF7F3E",
    fontWeight:"600",
    elevation:1,
    color: 'black',
    marginTop: 50,
    marginLeft: 10,
  }
});
