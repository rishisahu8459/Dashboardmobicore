// MyDevices.js
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Grid from '@mui/material/Grid';
import CardComponent from './Card';
import '../App.css';
import DevicesIcon from '@mui/icons-material/Devices';
import AcUnitIcon from '../icons/air-conditioner.png';
import TvIcon from '@mui/icons-material/Tv';

import FanIcon from '../icons/ceiling-fan.png';
import CoffeeMakerIcon from '@mui/icons-material/Coffee';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

import RefrigeratorIcon from '../icons/refrigerator.png';
import LightsIcon from '../icons/hang-lamp.png';
import WashingMachineIcon from '../icons/washing-machine.png';
import LampIcon from '../icons/floor-lamp.png';
import AirPurifierIcon from '../icons/air-purifier.png';
import AlarmClockIcon from '../icons/alarm-clock.png';
import ToasterIcon from '../icons/toaster.png';
import CeilingLampIcon from '../icons/led-bulb.png';

// Define your deviceIcons mapping
const deviceIcons = {
  'Smart AC': <img src={AcUnitIcon} alt="Air Purifier" />,
  'TV': <TvIcon />,
  'Fan': <img src={FanIcon} alt={DevicesIcon} />,
  'Coffee Maker': <CoffeeMakerIcon />,
  'Microwave': <MicrowaveIcon />,
  'Water Purifier': <WaterDropIcon />,
  'Refrigerator': <img src={RefrigeratorIcon} alt="Refrigerator" />,
  'Lights': <img src={LightsIcon} alt="Lights" />,
  'Washing machine': <img src={WashingMachineIcon} alt="Washing machine" />,
  'Lamp': <img src={LampIcon} alt="Lamp" />,
  'Air Purifier': <img src={AirPurifierIcon} alt="Air Purifier" />,
  'Alarm Clock': <img src={AlarmClockIcon} alt="Alarm Clock" />,
  'Toaster': <img src={ToasterIcon} alt="Toaster" />,
  'Ceiling Lamp': <img src={CeilingLampIcon} alt="Ceiling Lamp" />, // Added for 'Ceiling Lamp'
  // Add more mappings as needed
};

const MyDevices = () => {
  const [selectedOption, setSelectedOption] = useState('all');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Dummy data for cards (you can replace it with your actual data)
  const mockData = [
    { id: 1, title: 'Refrigerator', isOn: true },
    { id: 2, title: 'Smart AC', isOn: false },
    { id: 3, title: 'Lights', isOn: true },
    { id: 4, title: 'Fan', isOn: false },
    { id: 5, title: 'Washing machine', isOn: true },
    { id: 6, title: 'Lamp', isOn: false },
    { id: 7, title: 'Air Purifier', isOn: true },
    { id: 8, title: 'TV', isOn: false },
    { id: 9, title: 'Alarm Clock', isOn: true },
    // Add more devices as needed
  ];

  const filteredDevices = selectedOption === 'all' ? mockData : mockData.filter((device) => (device.isOn && selectedOption === 'on') || (!device.isOn && selectedOption === 'off'));

  return (
    <div className="MyDevicesPaper">
      <div className="MyDevicesHeader">
        <Typography variant="h5" marginLeft={1}>
          My Devices
        </Typography>

        <FormControl>
          <Select
            value={selectedOption}
            onChange={handleChange}
            className="dropdown"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="on">ON</MenuItem>
            <MenuItem value="off">OFF</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="CardsContainer" style={{ overflowX: 'hidden' }}>
        <Grid container spacing={2} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
          {filteredDevices.map((device) => (
            <Grid item key={device.id} xs={6} sm={6} md={6}>
              <CardComponent title={device.title} isOn={device.isOn} icon={deviceIcons[device.title]} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default MyDevices;
