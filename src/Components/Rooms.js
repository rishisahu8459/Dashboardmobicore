// src/components/Rooms.js
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Switch from '@mui/material/Switch';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import DevicesIcon from '@mui/icons-material/Devices';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FanIcon from '@mui/icons-material/Air';
import CoffeeMakerIcon from '@mui/icons-material/Coffee';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const mockData = {
  livingRoom: ['Refrigerator', 'Smart AC', 'Lights', 'Fan', 'Washing machine', 'Lamp', 'Air Purifier', 'TV', 'Alarm Clock'],
  bedRoom: ['Lamp', 'Air Purifier', 'TV', 'Alarm Clock'],
  kitchen: ['Microwave', 'Coffee Maker', 'Toaster'],
};

const deviceIcons = {
  'Smart AC': <AcUnitIcon />,
  'TV': <TvIcon />,
  'Lamp': <TvIcon />,
  'Fan': <FanIcon />,
  'Coffee Maker': <CoffeeMakerIcon />,
  'Microwave': <MicrowaveIcon />,
  'Water Purifier': <WaterDropIcon />,
  'Refrigerator' : <KitchenIcon/>,
  // Add more mappings as needed
};

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState('livingRoom');
  const [selectedCard, setSelectedCard] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleRoomChange = (room) => {
    setSelectedRoom(room);
    setSelectedCard(null);
    handleMenuClose();
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={3} className='rooms'>
      <div className='header'>
        <Typography variant="h6">{`User's Home`}</Typography>
        <div className='humidity'>
          <IconButton>
            <WaterDropIcon />
          </IconButton>
          <Typography variant="body2">Humidity: 70%</Typography>
        </div>
        <div className='temperature'>
          <IconButton>
            <DeviceThermostatIcon />
          </IconButton>
          <Typography variant="body2">Temperature: 25°C</Typography>
        </div>
        <div className='dropdown'>
          <Typography variant="body2" style={{ marginRight: '8px' }}>
            {selectedRoom === 'livingRoom' ? 'Living Room' : selectedRoom === 'bedRoom' ? 'Bed Room' : 'Kitchen'}
          </Typography>
          <IconButton onClick={handleMenuOpen}>
            <ArrowDropDownIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={() => handleRoomChange('livingRoom')}>Living Room</MenuItem>
            <MenuItem onClick={() => handleRoomChange('bedRoom')}>Bed Room</MenuItem>
            <MenuItem onClick={() => handleRoomChange('kitchen')}>Kitchen</MenuItem>
          </Menu>
        </div>
      </div>
      <div className='scrollable-section'>
        {mockData[selectedRoom].map((device, index) => (
          <Card
            key={index}
            device={device}
            isSelected={selectedCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </Paper>
  );
};

const Card = ({ device, isSelected, onClick }) => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setSwitchOn(!isSwitchOn);
  };

  return (
    <div
      className={`card ${isSelected ? 'selected-card' : ''}`}
      onClick={onClick}
    >
      <div className='status-text' style={{ color: isSwitchOn ? 'green' : 'red' }}>
        {isSwitchOn ? 'ON' : 'OFF'}
      </div>
      <div className='card-content'>
        <Typography variant="body2" className={`device-name ${isSelected ? 'selected-text' : ''}`}>
          {device}
        </Typography>
        <div className='device-icon'>
          <IconButton>
            {deviceIcons[device] || <DevicesIcon className={`device-icon ${isSelected ? 'selected-icon' : ''}`} />}
          </IconButton>
        </div>
      </div>
      <div className='switch-container'>
        <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
      </div>
    </div>
  );
};

export default Rooms;
