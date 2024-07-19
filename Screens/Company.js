import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Company = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const {totalWatts } = route.params
  return (
    <View>
      <AntDesign name="arrowleft" style={styles.aro} onPress={()=>navigation.navigate("Forget")}/>
      <View style={styles.cir}>
        <Text style={styles.Company}>Logo</Text>
      </View>
      <Text style={styles.name}>Company name</Text>
      <Text style={styles.hi}>Hi name surname,</Text>
      <Text style={styles.sur}>
        You have recently requested to reset your
         Company name password.</Text>
        <Text style={styles.click}> Click the link below to reset your password</Text>

        <TouchableOpacity style={styles.log} onPress={()=>navigation.navigate("Reset")}>
        <Text style={styles.logt}>Reset Your password</Text>
      </TouchableOpacity>
      <View style={styles.many}>
          <Text style={styles.comp}>www.Companyname.com</Text>
          <Text style={styles.compp}>company@gmail.com</Text>
          <Text style={styles.compp}>+374555555555</Text>
          <View style={styles.social}>
            <Entypo name="facebook-with-circle" style={styles.fcb}/>
            <Entypo name="instagram" style={styles.fcbb}/>
            <Entypo name="youtube-with-circle" style={styles.fcbbb}/>
            <Entypo name="linkedin-with-circle" style={styles.fcbbbb}/>
          </View>
      </View>
      
    </View>
  );
};

export default Company;

const styles = StyleSheet.create({
  Company: {
    textAlign: 'center',
  },
  cir: {
    borderWidth: 1,
    width: 70,
    height: 70,
    justifyContent: 'center',
    borderRadius: 40,
    marginLeft: 150,
    marginTop: 120,
    borderColor: '#1F41BB',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color:"black"
  },
  hi: {
    marginLeft: 20,
    marginTop: 50,
    color: 'black',
  },
  sur: {
    marginLeft:20,
    marginTop:10
  },
  click:{
    marginLeft:20
  },
  log: {
    backgroundColor: '#1F41BB',
    width: 325,
    height: 50,
    borderRadius: 5,
    marginLeft: 20,
    marginTop:30
},
logt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 17,
    paddingTop: 10,
},
many:{
      backgroundColor: '#1F41BB',
      width:"100%",
      height:150,
      marginTop:40

  },
  comp:{
    color:"#fff",
    textAlign:"center",
    marginTop:20
  },
  compp:{
    color:"#fff",
    textAlign:"center",
    marginTop:10
  },
  social:{
    flexDirection:"row",
    justifyContent:"center",
    
  },
  fcb:{
    color:"white",
    fontSize:20,
    padding:6
  },
  fcbb:{
    color:"white",
    fontSize:20,
    padding:6
  },
  fcbbb:{
    color:"white",
    fontSize:20,
    padding:6
  },
  fcbbbb:{
    color:"white",
    fontSize:20,
    padding:6
  },
  aro:{
    fontSize:30,
    position:"absolute",
    top:20,
    left:20
  }
});
