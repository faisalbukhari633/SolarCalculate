import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Change = () => {
  const navigation = useNavigation()
  return (
    <View>
      <AntDesign name="arrowleft" style={styles.aro} onPress={()=>navigation.navigate("Reset")}/>
      <View style={styles.veri}>
        <Image source={require('../assets/check.png')} style={styles.verify} />
      </View>
        <Text style={styles.pass}>Password changed!</Text>
        <Text style={styles.passs}>Your password has been changed successfully.</Text>
        <TouchableOpacity style={styles.log} onPress={()=>navigation.navigate("Change")}>
        <Text style={styles.logt}>Back to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Change;

const styles = StyleSheet.create({
  verify: {
    width: 20,
    height: 20,
    color:"#1F41BB"
  },
  veri:{
    borderWidth:3,
    width:60,
    height:60,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    marginLeft:150,
    marginTop:70,
    borderColor:"#1F41BB",
    
  },
  pass:{
    fontSize:30,
    color:"black",
    fontWeight:"bold",
    textAlign:"center",
    marginTop:20
  },
  passs:{
    textAlign:"center",
    marginTop:30,
    color:"black",
    fontSize:15
  },
  log:{
    backgroundColor:"#1F41BB",
    width:325,
    height:50,
    borderRadius:5,
    marginLeft:20,
    marginTop:70
 },
 logt:{
    textAlign:"center",
    color:"#fff",
    fontSize:20,
    paddingTop:8
  },
  aro:{
    fontSize:30,
    position:"absolute",
    top:20,
    left:20
  }
});
