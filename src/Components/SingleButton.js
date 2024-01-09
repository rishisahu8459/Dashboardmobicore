// SingleButton.js
import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OpacityIcon from '@mui/icons-material/Opacity'; // Pump icon
import '../styles/SingleButton.css';
import Pumpbig from '../icons/pumpbig.png';
import Switch from '@mui/material/Switch';

const SingleButton = ({ roomName = 'Living Room', deviceName = 'Pump' }) => {
    const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setSwitchOn(!isSwitchOn);
  };
  return (
    <div className="SingleButton">
      <div className="room-info">
        <Typography variant="h5" marginLeft={2}>{roomName}</Typography>
        <Typography variant="h5" marginLeft={2}>{deviceName}</Typography>
      </div>
      <div className="switch-container">
        <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
      </div>
      <div className="big-device-icon">
          <img src={Pumpbig}/>
          </div>
     
    </div>
  );
};

export default SingleButton;
