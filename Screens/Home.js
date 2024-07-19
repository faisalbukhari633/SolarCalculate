

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Slider from '@react-native-community/slider';
import {updateQuantity} from './Slice';
import {col} from './Allcolor';

const Home = () => {
  const navigation = useNavigation();
  const deviceHeight = useWindowDimensions().height;
  const deviceWidth = useWindowDimensions().width;
  const [currentUser, setCurrentUser] = useState('');

  const appliances = useSelector(state => state.appliances.appliances);
  const dispatch = useDispatch();
  const [selectedValues, setSelectedValues] = useState({});

  useEffect(() => {
    const initialSelectedValues = appliances.reduce((acc, appliance) => {
      acc[appliance.name] = appliance.quantity || 0;
      return acc;
    }, {});
    setSelectedValues(initialSelectedValues);
  }, [appliances]);

  const handleCheckboxChange = (applianceName, quantity) => {
    dispatch(updateQuantity({applianceName, quantity}));
    setSelectedValues(prevState => ({
      ...prevState,
      [applianceName]: quantity,
    }));
  };

  const totalWatts = appliances.reduce((total, appliance) => {
    return total + appliance.wattage * appliance.quantity;
  }, 0);

  const palletsRequired = Math.ceil(totalWatts / 585);
  const palletsRequireds = Math.ceil(totalWatts / 555);

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View
        style={[
          styles.headerContainer,
          {width: deviceWidth, height: deviceHeight - 700},
        ]}>
        <View style={[styles.headerStyle]}>
          {currentUser && (
            <Image style={styles.img} source={{uri: currentUser.photoURL}} />
          )}
        </View>
      </View>
      <Text style={styles.header}>Appliances</Text>
      <FlatList
        data={appliances}
        renderItem={({item}) => (
          <View style={styles.applianceContainer}>
            <View style={{flexDirection:"row",}}>
              <Text style={styles.name}>{item.name} : <Text style={styles.wattageText}>
              {item.wattage * selectedValues[item.name]} W
            </Text></Text>
            
           <Image source={item.icon} style={styles.iconn}/>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={5}
              step={1}
              value={item.quantity}
              onValueChange={value => handleCheckboxChange(item.name, value)}
              minimumTrackTintColor="green"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="green"
            />
            <View style={styles.labelsContainer}>
              {[0, 1, 2, 3, 4, 5].map(val => (
                <TouchableOpacity
                  key={val}
                  onPress={() => handleCheckboxChange(item.name, val)}>
                  <Text
                    style={[
                      styles.label,
                      selectedValues[item.name] === val && styles.selectedLabel,
                    ]}>
                    {val}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        keyExtractor={item => item.name}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalWattsText}>Total Watts: {totalWatts} W</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Final', {
            totalWatts,
            palletsRequired,
            palletsRequireds,
          })
        }
        style={styles.con}>
        <Text style={styles.tcon}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {},
  headerStyle: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  img: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
  },
  btn: {
    color: '#fff',
  },
  header: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 30,
    fontWeight: '600',
    color: 'gray',
    backgroundColor: '#fff',
    width: '90%',
    height: 80,
    alignSelf: 'center',
    borderRadius: 5,
    paddingTop: 20,
  },
  applianceContainer: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 5,
    margin: 5,
    height: 100, // Adjust height to accommodate the wattage text
    flexDirection:"column",
    justifyContent:"space-around"
  },
  slider: {
    width: '80%',
    height: 20,
    alignSelf: 'center',
  },
  quantityText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
  totalContainer: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  totalWattsText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginRight:110
  },
  wattageText: {
    textAlign: 'center',
    fontSize: 12,
    color: 'black',
    marginTop: 10,
    width:"15%"
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 42,
    margin: 5,
    width:"50%"
    
  },
  log: {
    backgroundColor: 'red',
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
  },
  logo: {
    fontSize: 20,
    color: '#fff',
    marginTop: 1,
  },
  checkbox: {
    margin: 1,
  },
  con: {
    backgroundColor: 'gray',
    width: '20%',
    // marginLeft: 270,
    borderRadius: 5,
    height: 35,
    position:"absolute",
    bottom:5,
    right:17
  },
  tcon: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    paddingTop:7,
    
  },
  sliderValue: {
    fontSize: 10,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    alignSelf: 'center',
    margin: 10,
  },
  label: {
    fontSize: 20,
    
  },
  selectedLabel: {
    color: '#000', // Highlight color
    fontWeight: 'bold',
    // width:35,
    // height:35,
    // backgroundColor:"grey",
    // borderRadius:25,
    // paddingLeft:11,
    // paddingBottom:15,
    textAlignVertical:"center",
    
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  numberButton: {
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  numberButtonText: {
    color: 'white',
    fontSize: 15,
  },
  iconn:{
    width:30,
    height:30,
    marginLeft:60,
    marginTop:10,
    width:"10%",
    
  }
});
