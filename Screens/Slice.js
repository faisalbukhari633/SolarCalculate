import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  appliances: [
    {name: 'Refrigerator', wattage: 200, quantity: 0, icon: require('../assets/icon/refrigerator.png')},
    {name: 'DC Inverter AC', wattage: 1200, quantity: 0, icon: require("../assets/icon/air-conditioner.png")},
    {name: 'Ceiling Fans', wattage: 35, quantity: 0, icon: require("../assets/icon/ceiling-fan.png")},
    {name: 'Water Pump', wattage: 1500, quantity: 0, icon: require("../assets/icon/water-pump.png")},
    {name: 'Air Cooler', wattage: 200, quantity: 0, icon: require("../assets/icon/air-cooler.png")},
    {name: 'Iron', wattage: 1100, quantity: 0, icon: require("../assets/icon/iron.png")},
    {name: 'Heater', wattage: 1600, quantity: 0, icon: require("../assets/icon/machine.png")},
    {name: 'Pedestal fans', wattage: 60, quantity: 0, icon: require("../assets/icon/electric-fan.png")},
    {name: 'Led Bulb', wattage: 10, quantity: 0, icon: require("../assets/icon/led-lamp.png")},
  
  ],
};

export const applianceSlice = createSlice({
  name: 'appliances',
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const {applianceName, quantity} = action.payload;
      const appliance = state.appliances.find(
        appliance => appliance.name === applianceName,
      );
      if (appliance) {
        appliance.quantity = quantity;
      }
    },
  },
});

export const {updateQuantity} = applianceSlice.actions;

export default applianceSlice.reducer;
