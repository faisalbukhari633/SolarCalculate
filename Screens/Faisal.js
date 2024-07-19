import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Faisal = () => {
  return (
    <View>
      <Text style={{textAlign:"center",fontSize:30,marginTop:30}}>Share</Text>
    </View>
  )
}

export default Faisal

const styles = StyleSheet.create({})








// import React, { useEffect, useState } from 'react';
// import firestore from '@react-native-firebase/firestore';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { useNavigation } from '@react-navigation/native';

// const Home = () => {
//   const navigation = useNavigation();
//   const [city, setCity] = useState('Multan');
//   const [open, setOpen] = useState(false);
//   const [panelsList, setPanelsList] = useState([]);
//   const [invertersList, setInvertersList] = useState([]);
//   const [items, setItems] = useState([
//     { label: 'Rahim Yar Khan', value: 'RahimYarKhan' },
//     { label: 'Multan', value: 'Multan' },
//     { label: 'Sukkur', value: 'Sukkur' },
//     { label: 'Lahore', value: 'Lahore' },
//     { label: 'Karachi', value: 'Karachi' },
//     { label: 'Islamabad', value: 'Islamabad' },
//     { label: 'Faisalabad', value: 'Faisalabad' },
//     { label: 'Haiderabad', value: 'Haiderabad' },
//   ]);

//   useEffect(() => {
//     const unsubscribePanels = setupRealtimeUpdates('SolarPanels', setPanelsList);
//     const unsubscribeInverters = setupRealtimeUpdates('SolarInverters', setInvertersList);

//     // Cleanup the listeners when the component unmounts or when the city changes
//     return () => {
//       unsubscribePanels();
//       unsubscribeInverters();
//     };
//   }, [city]);

//   const setupRealtimeUpdates = (collectionName, setData) => {
//     return firestore()
//       .collection(city)
//       .doc(collectionName)
//       .collection(collectionName)
//       .onSnapshot(snapshot => {
//         const data = snapshot.docs.map(doc => ({
//           ...doc.data(),
//           id: doc.id,
//         }));
//         setData(data);
//       }, error => {
//         console.log(`Error fetching ${collectionName} data: `, error);
//       });
//   };

//   const handleDelete = async (id, collectionName) => {
//     try {
//       await firestore()
//         .collection(city)
//         .doc(collectionName)
//         .collection(collectionName)
//         .doc(id)
//         .delete();

//       console.log(`${id} deleted from ${collectionName}`);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const renderItem = (collectionName) => ({ item }) => {
//     const { brand, description, rates, id } = item;
//     return (
//       <View style={styles.row}>
//         <Text style={styles.cell}>{brand}</Text>
//         <Text style={styles.cell}>{description}</Text>
//         <Text style={styles.cell}>{rates}</Text>
//         <View style={[styles.cell, styles.actions]}>
//           <TouchableOpacity onPress={() => navigation.navigate('Update', { updateCity: city, data: item,collectionName })}>
//             <Text>Edit</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleDelete(id, collectionName)}>
//             <Text>Delete</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.btnContainer}
//         onPress={() => navigation.navigate('Add', { theCity: city })}>
//         <Text style={styles.btn}>Add</Text>
//       </TouchableOpacity>
//       <View style={styles.myContainer}>
//         <Text style={styles.heading}>Home</Text>
//         <View style={{ zIndex: 1000, marginBottom: open ? 150 : 15 }}>
//           <DropDownPicker
//             open={open}
//             value={city}
//             items={items}
//             setOpen={setOpen}
//             setValue={setCity}
//             setItems={setItems}
//             placeholder="Select a city"
//             style={styles.dropdown}
//             dropDownContainerStyle={styles.dropdownContainer}
//             textStyle={styles.dropdownText}
//           />
//         </View>

//         <Text style={styles.solarPanels}>Solar Panels:</Text>
//         <FlatList
//           data={panelsList}
//           renderItem={renderItem('SolarPanels')}
//           keyExtractor={(item, index) => index.toString()}
//           ListHeaderComponent={() => (
//             <View style={styles.headings}>
//               <Text style={styles.cell}>Brand</Text>
//               <Text style={styles.cell}>Description</Text>
//               <Text style={styles.cell}>Price</Text>
//               <Text style={styles.cell}>Actions</Text>
//             </View>
//           )}
//         />

//         <Text style={styles.solarPanels}>Solar Inverters:</Text>
//         <FlatList
//           data={invertersList}
//           renderItem={renderItem('SolarInverters')}
//           keyExtractor={(item, index) => index.toString()}
//           ListHeaderComponent={() => (
//             <View style={styles.headings}>
//               <Text style={styles.cell}>Brand</Text>
//               <Text style={styles.cell}>Description</Text>
//               <Text style={styles.cell}>Price</Text>
//               <Text style={styles.cell}>Actions</Text>
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   subContainer: {
//     paddingBottom: 50,
//   },
//   myContainer: {
//     width: '90%',
//     alignSelf: 'center',
//   },
//   heading: {
//     fontSize: 30,
//     color: '#000',
//     fontWeight: '600',
//     textAlign: 'center',
//     marginVertical: 30,
//   },
//   dropdown: {
//     backgroundColor: '#000',
//     borderColor: '#000',
//   },
//   dropdownContainer: {
//     backgroundColor: '#000',
//     borderColor: '#000',
//   },
//   dropdownText: {
//     color: '#fff',
//   },
//   headings: {
//     flexDirection: 'row',
//     backgroundColor: '#f0f0f0',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   cell: {
//     flex: 1,
//     fontSize: 12,
//     color: '#000',
//     fontWeight: '600',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   btnContainer: {
//     backgroundColor: '#000',
//     width: 50,
//     height: 50,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//   },
//   btn: {
//     color: '#fff',
//   },
//   solarPanels: {
//     color: "#000",
//     fontSize: 20,
//     fontWeight: "600",
//     marginVertical: 10
//   }
// });






// // import React, {useEffect, useState} from 'react';
// // import firestore from '@react-native-firebase/firestore';
// // import DropDownPicker from 'react-native-dropdown-picker';
// // import {useNavigation} from '@react-navigation/native';

// // const Home = () => {
// //   const navigation = useNavigation();
// //   const [city, setCity] = useState('Multan');
// //   const [open, setOpen] = useState(false);
// //   const [panelsList, setPanelsList] = useState([]);
// //   const [invertersList, setInvertersList] = useState([]);
// //   const [items, setItems] = useState([
// //     {label: 'Rahim Yar Khan', value: 'RahimYarKhan'},
// //     {label: 'Multan', value: 'Multan'},
// //     {label: 'Sukkur', value: 'Sukkur'},
// //     {label: 'Lahore', value: 'Lahore'},
// //     {label: 'Karachi', value: 'Karachi'},
// //     {label: 'Islamabad', value: 'Islamabad'},
// //     {label: 'Faisalabad', value: 'Faisalabad'},
// //     {label: 'Haiderabad', value: 'Haiderabad'},
// //   ]);

// //   const getData = () => {
// //     if (!city) {
// //       console.warn('Please select a city first');
// //       return;
// //     }

// //     const fetchData = async (collectionName) => {
// //       const snapshot = await firestore()
// //         .collection(city)
// //         .doc(collectionName)
// //         .collection(collectionName)
// //         .get();
      
// //       return snapshot.docs.map(doc => ({
// //         ...doc.data(),
// //         id: doc.id,
// //       }));
// //     };

// //     const fetchAllData = async () => {
// //       const panelsData = await fetchData('SolarPanels');
// //       const invertersData = await fetchData('SolarInverters');

// //       setPanelsList(panelsData);
// //       setInvertersList(invertersData);
// //     };

// //     fetchAllData();
// //   };

// //   useEffect(() => {
// //     getData();
// //   }, [city]);

// //   const renderItem = ({item}) => {
// //     const {brand, description, rates, id} = item;
// //     return (
// //       <View style={styles.row}>
// //         <Text style={styles.cell}>{brand}</Text>
// //         <Text style={styles.cell}>{description}</Text>
// //         <Text style={styles.cell}>{rates}</Text>
      
// //       </View>
// //     );
// //   };

// //   return (
// //     <View style={styles.container}>
   
// //       <View style={styles.myContainer}>
// //         <Text style={styles.heading}>Home</Text>
// //         <View style={{zIndex: 1000, marginBottom: open ? 150 : 15}}>
// //           <DropDownPicker
// //             open={open}
// //             value={city}
// //             items={items}
// //             setOpen={setOpen}
// //             setValue={setCity}
// //             setItems={setItems}
// //             placeholder="Select a city"
// //             style={styles.dropdown}
// //             dropDownContainerStyle={styles.dropdownContainer}
// //             textStyle={styles.dropdownText}
// //           />
// //         </View>

// //         <Text style={styles.solarPanels}>Solar Panels:</Text>
// //         <FlatList
// //           data={panelsList}
// //           renderItem={renderItem}
// //           keyExtractor={(item, index) => index.toString()}
// //           ListHeaderComponent={() => (
// //             <View style={styles.headings}>
// //               <Text style={styles.cell}>Brand</Text>
// //               <Text style={styles.cell}>Description</Text>
// //               <Text style={styles.cell}>Price</Text>
// //               {/* <Text style={styles.cell}>Actions</Text> */}
// //             </View>
// //           )}
// //         />

// //         <Text style={styles.solarPanels}>Solar Inverters:</Text>
// //         <FlatList
// //           data={invertersList}
// //           renderItem={renderItem}
// //           keyExtractor={(item, index) => index.toString()}
// //           ListHeaderComponent={() => (
// //             <View style={styles.headings}>
// //               <Text style={styles.cell}>Brand</Text>
// //               <Text style={styles.cell}>Description</Text>
// //               <Text style={styles.cell}>Price</Text>
// //               {/* <Text style={styles.cell}>Actions</Text> */}
// //             </View>
// //           )}
// //         />
// //       </View>
// //     </View>
// //   );
// // };


// // export default Home;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   subContainer: {
// //     paddingBottom: 50,
// //   },
// //   myContainer: {
// //     width: '90%',
// //     alignSelf: 'center',
// //   },
// //   heading: {
// //     fontSize: 30,
// //     color: '#000',
// //     fontWeight: '600',
// //     textAlign: 'center',
// //     marginVertical: 30,
// //   },
// //   dropdown: {
// //     backgroundColor: '#000',
// //     borderColor: '#000',
// //   },
// //   dropdownContainer: {
// //     backgroundColor: '#000',
// //     borderColor: '#000',
// //   },
// //   dropdownText: {
// //     color: '#fff',
// //   },
// //   headings: {
// //     flexDirection: 'row',
// //     backgroundColor: '#f0f0f0',
// //   },
// //   row: {
// //     flexDirection: 'row',
// //   },
// //   cell: {
// //     flex: 1,
// //     fontSize: 12,
// //     color: '#000',
// //     fontWeight: '600',
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     textAlign: 'center',
// //     textAlignVertical: 'center',
// //   },
// //   actions: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //   },
// //   btnContainer: {
// //     backgroundColor: '#000',
// //     width: 50,
// //     height: 50,
// //     borderRadius: 50,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     position: 'absolute',
// //     bottom: 20,
// //     right: 20,
// //   },
// //   btn: {
// //     color: '#fff',
// //   },
// //   solarPanels:{
// //     color:"#000",
// //     fontSize:20,
// //     fontWeight:"600",
// //     marginVertical:10
// //   }
// // });