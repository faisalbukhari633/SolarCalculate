// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {
//   createDrawerNavigator,

// } from '@react-navigation/drawer';
// import Home from './Home';
// import Innerdrawer from './Innerdrawer';
// import Welcome from './Welcome';
// import Price from './Price';
// import MoreInfo from './MoreInfo';
// import {Button} from 'react-native-share';

// const Srawer = createDrawerNavigator();
// const Drawer = () => {
//   return (
//     <Srawer.Navigator screenOptions={{headerShown: false}}>
//       <Srawer.Screen name="Welcome" component={Welcome} />
//       <Srawer.Screen name="Home" component={Home} />
//       <Srawer.Screen name="Price" component={Price} />
//       <Srawer.Screen name="MoreInfo" component={MoreInfo} />
//     </Srawer.Navigator>
//   );
// };

// export default Drawer;

// const styles = StyleSheet.create({});

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import Innerdrawer from './Innerdrawer';
import Welcome from './Welcome';
import Price from './Price';
import MoreInfo from './MoreInfo';
import CustomDrawerContent from './CustomDrawerContent';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Srawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <Srawer.Navigator
      screenOptions={{headerShown: false}}
      >
      <Srawer.Screen name="Welcome" component={Welcome} />
      <Srawer.Screen name="Home" component={Home} />
      <Srawer.Screen name="Price" component={Price} />
      <Srawer.Screen name="MoreInfo" component={MoreInfo} />
    </Srawer.Navigator>
  );
};

export default Drawer;
