import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Price from './Price';
import AccountSetting from './AccountSetting';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Tab = createBottomTabNavigator();
const Botom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: 'gray',
        tabBarActiveTintColor: 'blue',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Entypo name="home" size={25} />,
        }}
      />
      <Tab.Screen
        name="Price"
        component={Price}
        options={{
          tabBarIcon: () => <Ionicons name="pricetag" size={25} />,
        }}
      />
      <Tab.Screen
        name="AccountSetting"
        component={AccountSetting}
        options={{
          tabBarIcon: () => <Ionicons name="settings-sharp" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Botom;

const styles = StyleSheet.create({});

///////////////////////////////////////////////////
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Home from './Home'
// import Price from './Price'
// import AccountSetting from './AccountSetting'
// import Entypo from 'react-native-vector-icons/dist/Entypo'
// import Ionicons from 'react-native-vector-icons/dist/Ionicons'

// const Tab = createBottomTabNavigator()

// const Botom = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = 'home';
//             return <Entypo name={iconName} size={size} color={color} />
//           } else if (route.name === 'Price') {
//             iconName = 'pricetag';
//             return <Ionicons name={iconName} size={size} color={color} />
//           } else if (route.name === 'AccountSetting') {
//             iconName = 'settings-sharp';
//             return <Ionicons name={iconName} size={size} color={color} />
//           }
//         },
//         tabBarActiveTintColor: 'blue',
//         tabBarInactiveTintColor: 'gray',
//       })}
//     >
//       <Tab.Screen name='Home' component={Home} />
//       <Tab.Screen name='Price' component={Price} />
//       <Tab.Screen name='AccountSetting' component={AccountSetting} />
//     </Tab.Navigator>
//   )
// }

// export default Botom

// const styles = StyleSheet.create({})
