


// import React, {useEffect, useRef, useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {useNavigation} from '@react-navigation/native';
// import Share from 'react-native-share';
// import ViewShot from 'react-native-view-shot';
// import DropDownPicker from 'react-native-dropdown-picker';
// import firestore from '@react-native-firebase/firestore';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const Price = () => {
//   const navigation = useNavigation();
//   const viewShotRef = useRef();
//   const [list, setList] = useState('');
//   const [city, setCity] = useState('Multan');
//   const [panelsList, setPanelsList] = useState([]);
//   const [invertersList, setInvertersList] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [items, setItems] = useState([
//     {label: 'Rahim Yar Khan', value: 'RahimYarKhan'},
//     {label: 'Multan', value: 'Multan'},
//     {label: 'Sukkur', value: 'Sukkur'},
//     {label: 'Lahore', value: 'Lahore'},
//     {label: 'Karachi', value: 'Karachi'},
//     {label: 'Islamabad', value: 'Islamabad'},
//     {label: 'Faisalabad', value: 'Faisalabad'},
//     {label: 'Haiderabad', value: 'Haiderabad'},
//   ]);

//   const getData = () => {
//     if (!city) {
//       console.warn('Please select a city first');
//       return;
//     }

//     const fetchData = async collectionName => {
//       const snapshot = await firestore()
//         .collection(city)
//         .doc(collectionName)
//         .collection(collectionName)
//         .get();

//       return snapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//     };

//     const fetchAllData = async () => {
//       const panelsData = await fetchData('SolarPanels');
//       const invertersData = await fetchData('SolarInverters');

//       setPanelsList(panelsData);
//       setInvertersList(invertersData);
//     };

//     fetchAllData();
//   };

//   useEffect(() => {
//     getData();
//   }, [city]);

//   const handleShare = async () => {
//     try {
//       const uri = await viewShotRef.current.capture();
//       const shareOptions = {
//         title: 'Price List',
//         url: uri,
//         type: 'image/png',
//       };
//       await Share.open(shareOptions);
//     } catch (err) {
//       if (err) console.log(err);
//     }
//   };

//   const renderItem = ({item}) => {
//     const {brand, description, rates, id} = item;
//     return (
//       <View style={styles.bdr}>
//         <Text style={styles.ibrand}>{brand}</Text>
//         <Text style={styles.ids}>{description}</Text>
//         <Text style={styles.parent}>{rates}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <ViewShot ref={viewShotRef} options={{format: 'png', quality: 0.9}}>
//         <View style={styles.hash}>
//           <Image
//             source={require('../assets/images/logo.png')}
//             style={{width: 100, height: 100}}
//           />
//           <Text style={styles.stack}>HashStack Technologies</Text>
//         </View>
//         <View style={{zIndex: 1000, marginBottom: open ? 10 : 15}}>
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
//         <View
//           style={{
//             width: '95%',
//             height: 450,
//             borderRadius: 5,
//             alignSelf: 'center',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#fff',
//             shadowColor: '#000',
//             shadowRadius: 5.84,
//             elevation: 10,
//           }}>
//           {/* ///////////////////////////////////////////////////////// */}
//           <Text style={styles.solarPanels}>Solar Panels:</Text>
//           <View style={styles.table}>
//             <Text style={styles.brand}>BRAND</Text>
//             <Text style={styles.brandd}>DESCRIPTION</Text>
//             <Text style={styles.branddd}>RATES</Text>
//           </View>
//           <FlatList
//             data={panelsList}
//             renderItem={renderItem}
//             keyExtractor={(item, index) => index.toString()}
//             ListHeaderComponent={() => (
//               <View style={styles.bdr}>
//                 {/* <Text style={styles.ibrand}>Brand</Text>
//                 <Text style={styles.ids}>Description</Text>
//                 <View style={styles.parent}>
//                 <Text style={styles.irat}>Rates</Text> */}
//                 {/* <MaterialIcons
//                           name="keyboard-double-arrow-down"
//                           size={25}
//                           color="green"
                          
//                         /> */}
//                 {/* </View> */}
//               </View>
//             )}
//           />

//           <Text style={styles.solarPanels}>Solar Inverters:</Text>
//           <View style={styles.table}>
//             <Text style={styles.brand}>BRAND</Text>
//             <Text style={styles.brandd}>DESCRIPTION</Text>
//             <Text style={styles.branddd}>RATES</Text>
//           </View>
//           <FlatList
//             data={invertersList}
//             renderItem={renderItem}
//             keyExtractor={(item, index) => index.toString()}
//             ListHeaderComponent={() => (
//               <View style={styles.bdr}>
//                 <Text style={styles.ibrand}>Brand</Text>
//                 <Text style={styles.ids}>Description</Text>
//                 <Text style={styles.parent}>Price</Text>
//               </View>
//             )}
//           />
          

//           {/* ///////////////////////////////////////////////////////////////////// */}
//           <Image
//             source={require('../assets/images/panel.png')}
//             style={{height: 150, width: '50%', marginBottom: 16}}
//           />
//           <TouchableOpacity
//             onPress={handleShare}
//             style={{position: 'absolute', left: 10, bottom: 10}}>
//             <Image
//               source={require('../assets/images/share.png')}
//               style={{
//                 width: 20,
//                 height: 20,
//                 marginRight: 300,
//               }}
//             />
//           </TouchableOpacity>
//         </View>
//       </ViewShot>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     justifyContent: 'center',
//   },
//   hash: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 60,
//   },
//   stack: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 35,
//   },
//   // dropdownContainer: {
//   //   width: '80%',
//   //   alignSelf: 'center',
//   //   marginVertical: 5,
//   // },
//   table: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//     alignSelf: 'center',
//     margin: 0.2,
//   },
//   brand: {
//     borderWidth: 1,
//     width: 110,
//     height: 30,
//     textAlign: 'center',
//     paddingTop: 5,
//     fontWeight: 'bold',
//     borderTopLeftRadius: 5,
//     margin: 0.2,
//   },
//   brandd: {
//     borderWidth: 1,
//     width: 110,
//     height: 30,
//     textAlign: 'center',
//     paddingTop: 5,
//     fontWeight: 'bold',
//     margin: 0.2,
//   },
//   branddd: {
//     borderWidth: 1,
//     borderTopRightRadius: 5,
//     width: 110,
//     height: 30,
//     textAlign: 'center',
//     paddingTop: 5,
//     fontWeight: 'bold',
//     margin: 0.2,
//   },
//   phonoBrand: {
//     color: 'green',
//   },
//   candianBrand: {
//     color: 'red',
//   },
//   both: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//   },
//   toggleText: {
//     fontSize: 18,
//     marginRight: 10,
//   },
//   bdr: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   ibrand: {
//     borderWidth: 1,
//     width: 110,
//     margin: 0.4,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     fontSize: 12,
//   },
//   ids: {
//     borderWidth: 1,
//     width: 110,
//     // padding: 7,
//     margin: 0.4,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     fontSize: 12,
//   },
//   irat: {
//     // padding: 4,
//     // margin: 0.4,
//     fontSize: 12,
//   },
//   parent: {
//     flexDirection: 'row',
//     borderWidth: 1,
//     width: 110,
//     padding: 4,
//     margin: 0.4,
//     alignItems: 'center',
//     // textAlignVertical: 'center',
//     justifyContent: 'space-around',
//   },
//   dropdown: {
//     width: '30%',
//     marginLeft: 240,
//   },
//   dropdownContainer: {
//     width: '40%',
//     marginLeft: 204,
//   },
//   dropdownText: {
//     color: '#000',
//   },
//   solarPanels: {
//     color: '#000',
//     fontSize: 20,
//     fontWeight: '600',
//     marginVertical: 10,
//   },
// });

// export default Price;


import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';
import DropDownPicker from 'react-native-dropdown-picker';
import firestore from '@react-native-firebase/firestore';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Price = () => {
  const navigation = useNavigation();
  const viewShotRef = useRef();
  const [listType, setListType] = useState('panels'); // State to manage list type
  const [city, setCity] = useState('Multan');
  const [panelsList, setPanelsList] = useState([]);
  const [invertersList, setInvertersList] = useState([]);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Rahim Yar Khan', value: 'RahimYarKhan'},
    {label: 'Multan', value: 'Multan'},
    {label: 'Sukkur', value: 'Sukkur'},
    {label: 'Lahore', value: 'Lahore'},
    {label: 'Karachi', value: 'Karachi'},
    {label: 'Islamabad', value: 'Islamabad'},
    {label: 'Faisalabad', value: 'Faisalabad'},
    {label: 'Haiderabad', value: 'Haiderabad'},
  ]);

  // const getData = () => {
  //   if (!city) {
  //     console.warn('Please select a city first');
  //     return;
  //   }

  //   const fetchData = async collectionName => {
  //     const snapshot = await firestore()
  //       .collection(city)
  //       .doc(collectionName)
  //       .collection(collectionName)
  //       .get();

  //     return snapshot.docs.map(doc => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //   };

  //   const fetchAllData = async () => {
  //     const panelsData = await fetchData('SolarPanels');
  //     const invertersData = await fetchData('SolarInverters');

  //     setPanelsList(panelsData);
  //     setInvertersList(invertersData);
  //   };

  //   fetchAllData();
  // };

  // useEffect(() => {
  //   getData();
  // }, [city]);

  ///////////////////////////////////////////
  useEffect(() => {
    const unsubscribePanels = setupRealtimeUpdates('SolarPanels', setPanelsList);
    const unsubscribeInverters = setupRealtimeUpdates('SolarInverters', setInvertersList);

    // Cleanup the listeners when the component unmounts or when the city changes
    return () => {
      unsubscribePanels();
      unsubscribeInverters();
    };
  }, [city]);

  const setupRealtimeUpdates = (collectionName, setData) => {
    return firestore()
      .collection(city)
      .doc(collectionName)
      .collection(collectionName)
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(data);
      }, error => {
        console.log(`Error fetching ${collectionName} data: `, error);
      });
  };

  ///////////////////////////////////////////

  const handleShare = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      const shareOptions = {
        title: 'Price List',
        url: uri,
        type: 'image/png',
      };
      await Share.open(shareOptions);
    } catch (err) {
      if (err) console.log(err);
    }
  };

  const renderItem = ({item}) => {
    const {brand, description, rates, id} = item;
    return (
      <View style={styles.bdr}>
        <Text style={styles.ibrand}>{brand}</Text>
        <Text style={styles.ids}>{description}</Text>
        <Text style={styles.parent}>{rates}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ViewShot ref={viewShotRef} options={{format: 'png', quality: 0.9}}>
        <View style={styles.hash}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{width: 100, height: 100}}
          />
          <Text style={styles.stack}>HashStack Technologies</Text>
        </View>
        <View style={{zIndex: 1000, marginBottom: open ? 10 : 15}}>
          <DropDownPicker
            open={open}
            value={city}
            items={items}
            setOpen={setOpen}
            setValue={setCity}
            setItems={setItems}
            placeholder="Select a city"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={styles.dropdownText}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              listType === 'panels' && styles.activeButton,
            ]}
            onPress={() => setListType('panels')}>
            <Text style={styles.buttonText}>Solar Panels</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              listType === 'inverters' && styles.activeButton,
            ]}
            onPress={() => setListType('inverters')}>
            <Text style={styles.buttonText}>Solar Inverters</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '95%',
            height: 450,
            borderRadius: 5,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowRadius: 5.84,
            elevation: 10,
          }}>
          {listType === 'panels' ? (
            <>
              <Text style={styles.solarPanels}>Solar Panels:</Text>
              <View style={styles.table}>
                <Text style={styles.brand}>BRAND</Text>
                <Text style={styles.brandd}>DESCRIPTION</Text>
                <Text style={styles.branddd}>RATES</Text>
              </View>
              <FlatList
                data={panelsList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </>
          ) : (
            <>
              <Text style={styles.solarPanels}>Solar Inverters:</Text>
              <View style={styles.table}>
                <Text style={styles.brand}>BRAND</Text>
                <Text style={styles.brandd}>DESCRIPTION</Text>
                <Text style={styles.branddd}>RATES</Text>
              </View>
              <FlatList
                data={invertersList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </>
          )}
          <Image
            source={require('../assets/images/panel.png')}
            style={{height: 150, width: '50%', marginBottom: 16}}
          />
          <TouchableOpacity
            onPress={handleShare}
            style={{position: 'absolute', left: 10, bottom: 10}}>
            <Image
              source={require('../assets/images/share.png')}
              style={{
                width: 20,
                height: 20,
                marginRight: 300,
              }}
            />
          </TouchableOpacity>
        </View>
      </ViewShot>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  hash: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 60,
  },
  stack: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 35,
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    alignSelf: 'center',
    margin: 0.2,
  },
  brand: {
    borderWidth: 1,
    width: 110,
    height: 30,
    textAlign: 'center',
    paddingTop: 5,
    fontWeight: 'bold',
    borderTopLeftRadius: 5,
    margin: 0.2,
  },
  brandd: {
    borderWidth: 1,
    width: 110,
    height: 30,
    textAlign: 'center',
    paddingTop: 5,
    fontWeight: 'bold',
    margin: 0.2,
  },
  branddd: {
    borderWidth: 1,
    borderTopRightRadius: 5,
    width: 110,
    height: 30,
    textAlign: 'center',
    paddingTop: 5,
    fontWeight: 'bold',
    margin: 0.2,
  },
  phonoBrand: {
    color: 'green',
  },
  candianBrand: {
    color: 'red',
  },
  both: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  toggleText: {
    fontSize: 18,
    marginRight: 10,
  },
  bdr: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ibrand: {
    borderWidth: 1,
    width: 110,
    margin: 0.4,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
  },
  ids: {
    borderWidth: 1,
    width: 110,
    margin: 0.4,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
  },
  irat: {
    fontSize: 12,
  },
  parent: {
    flexDirection: 'row',
    borderWidth: 1,
    width: 110,
    padding: 4,
    margin: 0.4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dropdown: {
    width: '30%',
    marginLeft: 240,
    
  },
  dropdownContainer: {
    width: '40%',
    marginLeft: 204,
  },
  dropdownText: {
    color: '#000',
  },
  solarPanels: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginBottom: 10,
    position:"absolute",
    top:161,
    zIndex:1000
  },
  button: {
    width:103,
    height:50,
    // padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    // marginHorizontal: 10,
    marginLeft:12,
    marginBottom:2
  },
  activeButton: {
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    paddingTop:12,
    paddingLeft:3
  },
});

export default Price;
