import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/dist/Entypo';

const MoreInfo = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            marginTop: 50,
            fontWeight: 'bold',
          }}>
          About Us
        </Text>
        <Image source={require('../assets/profile.png')} style={styles.abo} />
      </View>
      <View style={styles.logo}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.sir}
        />
        <View style={{alignSelf:"center"}}>
        <Text style={{fontWeight:"800"}}>Developed By Faisal Bukhari</Text>
        <Text style={{fontWeight:"800"}}>Supervised By Irfan Faizi</Text>
        </View>
      </View>
      <View style={{backgroundColor:"#fff",height:330,marginTop:50}}>
      <View style={styles.ft} >
        <Entypo name="facebook-with-circle" size={30} style={styles.facebook} />
        <Text style={styles.ftf}>www.facebook.com</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:40,marginTop:20}}>
        <Image source={require("../assets/whatsapp.png")} style={styles.whats}/>
        <Text style={{marginLeft:40,fontWeight:"bold"}}>www.Whatsapp.com</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:40,marginTop:20}}>
        <Image source={require("../assets/instagram.png")} style={styles.insta}/>
        <Text style={{marginLeft:10,fontWeight:"bold",marginLeft:40}}>www.Instagram.com</Text>
      </View>
      </View>
    </View>
  );
};

export default MoreInfo;

const styles = StyleSheet.create({
  abo: {
    width: 30,
    height: 30,
    marginTop: 55,
    marginLeft: 10,
  },
  sir: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  logo: {},
  facebook: {
    marginTop: 80,
    marginLeft: 20,
    color: 'blue',
    
  },
  ft:{
    flexDirection:"row",
    textAlign:"center",
    marginLeft:20
  },
  ftf:{
    marginTop:90,
    marginLeft:40,
    fontWeight:"bold"
  },
  whats:{
    width:30,
    height:30
  },
  insta:{
    width:30,
    height:30,
    
  }
});
