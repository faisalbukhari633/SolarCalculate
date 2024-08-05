// import { createDrawerNavigator } from "@react-navigation/drawer"
// import Welcome from "../../Screens/Welcome";
// const Drawer=createDrawerNavigator();
// export default DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator>
//         <Drawer.Screen name="Main" component={Welcome} options={{headerShown:false}}/>
//     </Drawer.Navigator>
//   )
// }


// DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../../Screens/Welcome';
import CustomDrawerContent from '../../Screens/CustomDrawerContent';
// import CustomDrawerContent from './CustomDrawerContent'; // Adjust the path as needed

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Main" component={Welcome} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

