import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash';
import Look from './Look';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Rigster from './Screens/Rigster';
import Forget from './Screens/Forget';
import Reset from './Screens/Reset';
import Change from './Screens/Change';
import Final from './Screens/Final';
import Botom from './Screens/Botom';
import About from './Screens/About';
import Welcome from './Screens/Welcome';
import Drawer from './Screens/Drawer';
import Faisal from './Screens/Faisal';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
       <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Look" component={Look} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Botom" component={Botom} />
        <Stack.Screen name="Rigster" component={Rigster} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Final" component={Final} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Change" component={Change} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Faisal" component={Faisal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
