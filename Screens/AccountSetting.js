import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const AccountSetting = () => {
  const navigation = useNavigation();

  const handlelog = async () => {
    await auth().signOut();
    navigation.dispatch(StackActions.replace('Look'));
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '90%',
          alignSelf: 'center',
          height: 400,
          marginTop: 150,
          borderRadius:5,
          
        }}>
        <Text style={{textAlign: 'center',fontSize:30,paddingTop:100}}>AccountSetting</Text>
        <TouchableOpacity style={styles.log} onPress={handlelog}>
          <Text style={styles.logo}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
  log: {
    backgroundColor: 'red',
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    borderRadius: 10,
    marginTop: 10,
  },
  logo: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10,
  },
});
