// import React from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
// } from '@react-navigation/drawer';
// import {useNavigation,StackActions} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';

// const CustomDrawerContent = props => {
//   const navigation = useNavigation();
//   const handleLogout = async () => {
//     await auth().signOut();
//     navigation.dispatch(StackActions.replace('Look'));
//   };

//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <View style={styles.logoutButtonContainer}>
//         <Button title="Logout" onPress={handleLogout} />
//       </View>
//     </DrawerContentScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   logoutButtonContainer: {
//     marginTop: 20,
//     paddingHorizontal: 10,
//   },
// });

// export default CustomDrawerContent;
