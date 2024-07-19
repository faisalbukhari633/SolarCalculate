import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Final = (props) => {
  const navigation = useNavigation();
  const [solarPlates, setSolarPlates] = useState({
    solarPlate_555: '',
    solarPlate_585: '',
  });
  const [kiloWatts, setKiloWatts] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPrice555, setTotalPrice555] = useState(0);
  const [totalPrice585, setTotalPrice585] = useState(0);
  const { totalWatts } = props.route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const finalCalculation = (acWattsConsumption) => {
    const solarPanelEfficiency = 0.77;
    const inverterEfficiency = 0.98;
    const totalEfficiency = solarPanelEfficiency * inverterEfficiency;
    const dcWattsRequired = acWattsConsumption / totalEfficiency;
    console.log(dcWattsRequired);
    const solarSystemSizeKw = dcWattsRequired / 1000;

    let roundedKiloWatts;
    const decimalPart = solarSystemSizeKw - Math.floor(solarSystemSizeKw);

    if (decimalPart === 0) {
      roundedKiloWatts = solarSystemSizeKw.toFixed(0);
    } else if (decimalPart <= 0.4) {
      roundedKiloWatts = Math.floor(solarSystemSizeKw).toFixed(0);
    } else if (decimalPart >= 0.5) {
      roundedKiloWatts = Math.ceil(solarSystemSizeKw).toFixed(0);
    } else {
      roundedKiloWatts = Math.floor(solarSystemSizeKw) + 0.5;
    }

    const solarPlatesRequired555 = Math.floor((dcWattsRequired * 1.3) / 555);
    const solarPlatesRequired585 = Math.floor((dcWattsRequired * 1.3) / 585);

    setSolarPlates({
      solarPlate_555: solarPlatesRequired555,
      solarPlate_585: solarPlatesRequired585,
    });
    setKiloWatts(roundedKiloWatts);
    setTotalPrice(roundedKiloWatts * 1000); // Calculate total price for inverter

    const price555 = solarPlatesRequired555 * 1500;
    const price585 = solarPlatesRequired585 * 2000;
    setTotalPrice555(price555); // Calculate total price for 555 plates
    setTotalPrice585(price585); // Calculate total price for 585 plates
  };

  useEffect(() => {
    finalCalculation(totalWatts);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 400,
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginTop: 150,
        borderRadius: 5,
        shadowColor:"#000",
        elevation:5
      }}>
      <Text style={styles.header}>Requirements</Text>
      <View style={{ height: '50%', width: '100%' }}>
        {solarPlates && (
          <View style={styles.main}>
            <Text style={styles.all}>You will require approximately</Text>
            <Text style={styles.kw}>{kiloWatts} KW of Solar Inverter.</Text>
            
            <Text style={{fontSize:25,marginRight:100}}>You will need:</Text>
            <Text style={styles.highlight}>
              Plates of 555 Required = {solarPlates.solarPlate_555}
            </Text>
            <Text style={styles.highlight}>
              Plates of 585 Required = {solarPlates.solarPlate_585}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.touch}>
        <TouchableOpacity
          style={styles.check}
          onPress={() => navigation.navigate('Price')}>
          <Text style={styles.ctext}>Check Rates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.check} onPress={() => setModalVisible(true)}>
          <Text style={styles.ctext}>Estimate Rates</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}><Text style={{fontWeight:"800"}}>Estimate Rates Information</Text></Text>
            <Text style={styles.modalText}>
              <Text style={{color:"black"}}>*</Text> The total price for <Text style={{fontWeight:"800"}}>{kiloWatts}</Text> KW of Solar Inverter is {totalPrice} rupees.
            </Text>
            <Text style={styles.modalText}>
              <Text style={{color:"black"}}>*</Text> The total price for 555 plates is <Text style={{fontWeight:"800"}}>{totalPrice555}</Text> rupees.
            </Text>
            <Text style={styles.modalText}>
              <Text style={{color:"black"}}>*</Text> The total price for 585 plates is <Text style={{fontWeight:"800"}}>{totalPrice585}</Text> rupees.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Final;

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#1f41bb',
  marginBottom:10
  },
  all: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
    marginTop:5
  },
  highlight: {
    fontSize: 20,
    color: 'blue',
    marginTop:10
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  kw: {
    fontSize: 20,
    color: 'blue',
    marginTop:5,
    marginRight:50,
    
  },
  check: {
    backgroundColor: 'blue',
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
  ctext: {
    color: '#fff',
    paddingTop: 13,
  },
  touch: {
    flexDirection: 'row',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
