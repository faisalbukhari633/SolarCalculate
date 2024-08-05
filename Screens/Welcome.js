import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('../assets//solo.jpg')} style={styles.img}>
      <View style={styles.header}>
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
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    color: 'black',
    marginTop: 50,
    marginLeft: 10,
  },
  view: {
    alignItems: 'center',
    marginTop: 100,
  },
  load: {
    fontSize: 10,
    width: 160,
    height: 160,
    borderRadius: 5,
    textAlign: 'center',
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
    borderRadius: 5,
    textAlign: 'center',
    borderWidth: 1,
    color: '#000',
  },
  about: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    textAlign: 'center',
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
  wel: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FF7F3E',
    fontWeight: '600',
    elevation: 1,
    color: 'black',
    marginTop: 50,
    marginLeft: 10,
  },
});
