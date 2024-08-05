


import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  FlatList,
  Modal,
  Button,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@react-native-community/slider';
import { updateQuantity } from './Slice';

const Home = () => {
  const navigation = useNavigation();
  const deviceHeight = useWindowDimensions().height;
  const deviceWidth = useWindowDimensions().width;
  const [currentUser, setCurrentUser] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({});
  const appliances = useSelector(state => state.appliances.appliances);
  const dispatch = useDispatch();
  const [selectedValues, setSelectedValues] = useState({});
  const [selectedType, setSelectedType] = useState({});
  const [wattageInput, setWattageInput] = useState({});
  const [tempWattageInput, setTempWattageInput] = useState({});
  const [useCustomWattage, setUseCustomWattage] = useState({});

  useEffect(() => {
    const initialSelectedValues = appliances.reduce((acc, appliance) => {
      acc[appliance.name] = appliance.quantity || 0;
      acc[appliance.name + '_type'] = 'AC'; // Default to 'AC'
      return acc;
    }, {});
    setSelectedValues(initialSelectedValues);
  }, [appliances]);

  const handleCheckboxChange = (applianceName, quantity) => {
    if (!useCustomWattage[applianceName]) {
      dispatch(updateQuantity({ applianceName, quantity }));
      setSelectedValues(prevState => ({
        ...prevState,
        [applianceName]: quantity,
      }));
    }

    // Disable TextInput if the slider value is greater than 1
    if (quantity > 1) {
      setUseCustomWattage(prevState => ({
        ...prevState,
        [applianceName]: false,
      }));
    }
  };

  const handleTypeSelect = (applianceName, type) => {
    setSelectedType(prevState => ({
      ...prevState,
      [applianceName]: type,
    }));
    setDropdownVisible(prevState => ({
      ...prevState,
      [applianceName]: false,
    }));
  };

  const handleWattageInputChange = (applianceName, value) => {
    const numericValue = isNaN(parseFloat(value)) ? '' : value;
    setTempWattageInput(prevState => ({
      ...prevState,
      [applianceName]: numericValue,
    }));
  };

  const handleApplyWattage = (applianceName) => {
    setWattageInput(prevState => ({
      ...prevState,
      [applianceName]: tempWattageInput[applianceName],
    }));
    setUseCustomWattage(prevState => ({
      ...prevState,
      [applianceName]: tempWattageInput[applianceName] !== '',
    }));
    setDropdownVisible(prevState => ({
      ...prevState,
      [applianceName]: false,
    }));
  };

  const handleClear = (applianceName) => {
    // Reset slider and TextInput values
    setSelectedValues(prevState => ({
      ...prevState,
      [applianceName]: 0,
    }));
    setTempWattageInput(prevState => ({
      ...prevState,
      [applianceName]: '',
    }));
    setWattageInput(prevState => ({
      ...prevState,
      [applianceName]: '',
    }));
    setUseCustomWattage(prevState => ({
      ...prevState,
      [applianceName]: false,
    }));
    setDropdownVisible(prevState => ({
      ...prevState,
      [applianceName]: false,
    }));
  };

  const totalWatts = appliances.reduce((total, appliance) => {
    const type = selectedType[appliance.name] || 'AC';
    const defaultWattage = type === 'AC' ? appliance.acwattage : appliance.dcwattage;
    const customWattage = parseFloat(wattageInput[appliance.name]) || defaultWattage;

    // Use custom wattage if entered, otherwise use default wattage
    const wattageToUse = useCustomWattage[appliance.name] ? customWattage : defaultWattage;

    return total + wattageToUse * (useCustomWattage[appliance.name] ? 1 : selectedValues[appliance.name]);
  }, 0);

  const palletsRequired = Math.ceil(totalWatts / 585);
  const palletsRequireds = Math.ceil(totalWatts / 555);

  const handleContinue = () => {
    if (totalWatts < 555) {
      setModalVisible(true);
    } else {
      navigation.navigate('Final', {
        totalWatts,
        palletsRequired,
        palletsRequireds,
      });
    }
  };

  const toggleDropdown = (applianceName) => {
    setDropdownVisible(prevState => ({
      ...prevState,
      [applianceName]: !prevState[applianceName],
    }));
  };

  return (
    <View style={styles.mainContainer}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Total watts are less than 555. Please adjust your appliance usage.
            </Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <View style={[
          styles.headerContainer,
          { width: deviceWidth, height: deviceHeight - 700 },
        ]}
      >
        <View style={[styles.headerStyle]}>
          {currentUser && (
            <Image style={styles.img} source={{ uri: currentUser.photoURL }} />
          )}
        </View>
      </View>
      <Text style={styles.header}>Appliances</Text>
      <FlatList
        data={appliances}
        renderItem={({ item }) => (
          <View style={styles.applianceContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.name}>{item.name} : <Text style={styles.wattageText}>
                {selectedType[item.name] === 'DC' ? item.dcwattage : item.acwattage} W
              </Text></Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={5}
              step={1}
              value={selectedValues[item.name]}
              onValueChange={value => handleCheckboxChange(item.name, value)}
              minimumTrackTintColor="green"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="green"
              disabled={useCustomWattage[item.name]}
            />
            <View style={styles.labelsContainer}>
              {[0, 1, 2, 3, 4, 5].map(val => (
                <TouchableOpacity
                  key={val}
                  onPress={() => handleCheckboxChange(item.name, val)}
                  disabled={useCustomWattage[item.name]}
                >
                  <Text
                    style={[
                      styles.label,
                      selectedValues[item.name] === val && styles.selectedLabel,
                    ]}
                  >
                    {val}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={styles.typeSelector}
              onPress={() => toggleDropdown(item.name)}
            >
              <Text style={styles.typeSelectorText}>
                {selectedType[item.name] || 'Select Type'}
              </Text>
            </TouchableOpacity>
            {dropdownVisible[item.name] && (
              <View style={styles.dropdownContainer}>
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleTypeSelect(item.name, 'AC')}
                >
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <Text style={styles.dropdownItemText}>AC</Text>
                  <Image source={item.icon} style={styles.icone}/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleTypeSelect(item.name, 'DC')}
                >
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <Text style={styles.dropdownItemText}>DC</Text>
                  <Image source={item.icon} style={styles.icone}/>
                  </View>
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  placeholder="Enter wattage"
                  keyboardType="numeric"
                  value={tempWattageInput[item.name] || ''}
                  onChangeText={(value) => handleWattageInputChange(item.name, value)}
                  editable={selectedValues[item.name] <= 0}
                />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.applyButton}
                    onPress={() => handleApplyWattage(item.name)}
                  >
                    <Text style={styles.applyButtonText}>Apply</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.clearButton}
                    onPress={() => handleClear(item.name)}
                  >
                    <Text style={styles.clearButtonText}>Clear</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        )}
        keyExtractor={item => item.name}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalWattsText}>Total Watts: {totalWatts} W</Text>
      </View>
      <TouchableOpacity onPress={handleContinue} style={styles.con}>
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
    marginTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  applianceContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  wattageText: {
    fontSize: 16,
    color: 'green',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  label: {
    padding: 5,
    textAlign: 'center',
    fontSize:17
  },
  selectedLabel: {
    fontWeight: 'bold',
    color: 'green',
  },
  totalContainer: {
    padding: 20,
    alignItems: 'center',
  },
  totalWattsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  con: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 20,
  },
  tcon: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  typeSelector: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width:"92%",
    marginLeft:13
  },
  typeSelectorText: {
    fontSize: 16,
    
  },
  dropdownContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    
    
  },
  dropdownItem: {
    padding: 10,
    
  
  },
  dropdownItemText: {
    fontSize: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  applyButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginRight: 10,
    width:140,
    
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    
  },
  clearButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    width:140
  },
  clearButtonText: {
    color: '#333',
    fontSize: 16,
    paddingTop:4
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  icone:{
  width:30,
  height:30
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});






















