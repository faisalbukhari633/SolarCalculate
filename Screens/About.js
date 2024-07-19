import {Modal, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';

const About = ({route}) => {
  const {item} = route.params;
  const {brand, Rates,description} = item;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{textAlign: 'center', marginTop: 30, fontSize: 25}}>
          Brand: {brand}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 30,
            fontSize: 25,
          }}>
          Rates: {Rates}
        </Text>
      </View>
    </View>
  );
};
export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    marginTop: 20,
  },
  content: {
    alignItems: 'center',
    marginTop: 30,
    padding: 20,
  },
});
