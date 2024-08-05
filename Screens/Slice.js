import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  appliances: [
    {name: 'Refrigerator', dcwattage: 200, acwattage:400, quantity: 0, icon: require('../assets/icon/refrigerator.png')},
    {name: 'DC Inverter AC', dcwattage: 1200, acwattage:1500, quantity: 0, icon: require("../assets/icon/air-conditioner.png")},
    {name: 'Ceiling Fans', acwattage: 35,dcwattage:50, quantity: 0, icon: require("../assets/icon/ceiling-fan.png")},
    {name: 'Water Pump', acwattage: 1500, dcwattage:500, quantity: 0, icon: require("../assets/icon/water-pump.png")},
    {name: 'Air Cooler', acwattage: 200, dcwattage:100, quantity: 0, icon: require("../assets/icon/air-cooler.png")},
    {name: 'Iron', acwattage: 1100, dcwattage:500, quantity: 0, icon: require("../assets/icon/iron.png")},
    {name: 'Heater', acwattage: 1600, dcwattage:800, quantity: 0, icon: require("../assets/icon/machine.png")},
    {name: 'Pedestal fans', acwattage: 60, dcwattage:20, quantity: 0, icon: require("../assets/icon/electric-fan.png")},
    {name: 'Led Bulb', dcwattage: 10, acwattage:40, quantity: 0, icon: require("../assets/icon/led-lamp.png")},
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
