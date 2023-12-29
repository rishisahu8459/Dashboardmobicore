// src/components/Rooms.js
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DevicesIcon from '@mui/icons-material/Devices';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import Modal from 'react-modal';

const mockData = {
  livingRoom: ['Refrigerator', 'Smart AC', 'Lights', 'Fan', 'Washing machine', 'Lamp', 'Air Purifier', 'TV', 'Alarm Clock'],
  bedRoom: ['Lamp', 'Air Purifier', 'TV', 'Alarm Clock'],
  kitchen: ['Microwave', 'Coffee Maker', 'Toaster'],
};

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState('livingRoom');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleRoomChange = (room) => {
    setSelectedRoom(room);
    setAnchorEl(null); // Close the dropdown menu when a room is selected
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
            {/* Icon for humidity */}
          </IconButton>
          <Typography variant="body2">Humidity: 70%</Typography>
        </div>
        <div className='temperature'>
          <IconButton>
            {/* Icon for temperature */}
          </IconButton>
          <Typography variant="body2">Temperature: 25°C</Typography>
        </div>
        <div className='dropdown'>
          {/* Dropdown menu for rooms */}
          <Typography variant="body2" style={{ marginRight: '8px' }}>
            {selectedRoom === 'livingRoom' ? 'Living Room' : selectedRoom === 'bedRoom' ? 'Bed Room' : 'Kitchen'}
          </Typography>
          <IconButton onClick={handleMenuOpen}>
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleRoomChange('livingRoom')}>Living Room</MenuItem>
            <MenuItem onClick={() => handleRoomChange('bedRoom')}>Bed Room</MenuItem>
            <MenuItem onClick={() => handleRoomChange('kitchen')}>Kitchen</MenuItem>
          </Menu>
        </div>
      </div>
      <div className='scrollable-section'>
        {mockData[selectedRoom].map((device, index) => (
          <Card key={index} device={device} />
        ))}
      </div>
    </Paper>
  );
};

const Card = ({ device }) => {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSwitchChange = () => {
    setSwitchOn(!isSwitchOn);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='card'>
      <div className='status-text' style={{ color: isSwitchOn ? 'green' : 'red' }}>
        {isSwitchOn ? 'ON' : 'OFF'}
      </div>
      <div className='card-content'>
        <Typography variant="body2" className='device-name'>
          {device}
        </Typography>
        <div className='device-icon' onClick={openModal}>
          <IconButton>
            {/* Icon based on device name */}
            <DevicesIcon />
          </IconButton>
        </div>
      </div>
      <div className='switch-container'>
        <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Device Modal"
      >
        <h2>{device}</h2>
        {/* Add more content to the modal as needed */}
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default Rooms;
