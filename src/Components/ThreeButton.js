// ThreeButton.js
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import '../styles/ThreeButton.css'; // You can create a new CSS file for this component
import Pumpbig from '../icons/pumpbig.png';

const ThreeButton = ({ roomName = 'Room Name', deviceName = 'Device Name' }) => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const handleSwitchChange = (switchNumber) => {
    switch (switchNumber) {
      case 1:
        setSwitch1(!switch1);
        break;
      case 2:
        setSwitch2(!switch2);
        break;
      case 3:
        setSwitch3(!switch3);
        break;
      default:
        break;
    }
  };

  return (
    <div className="ThreeButton">
      <div className="room-info">
        <Typography variant="h5" marginLeft={2}>
          {roomName}
        </Typography>
        <Typography variant="h5" marginLeft={2}>
          {deviceName}
        </Typography>
      </div>
      <div className="big-device-icon">
          <img src={Pumpbig}/>
          </div>
      <div className="switches-container">
        <div className="switch-item">
          <Typography variant="body2">Switch 1</Typography>
          <Switch checked={switch1} onChange={() => handleSwitchChange(1)} />
        </div>
        <div className="switch-item">
          <Typography variant="body2">Switch 2</Typography>
          <Switch checked={switch2} onChange={() => handleSwitchChange(2)} />
        </div>
        <div className="switch-item">
          <Typography variant="body2">Switch 3</Typography>
          <Switch checked={switch3} onChange={() => handleSwitchChange(3)} />
        </div>
      </div>
    </div>
  );
};

export default ThreeButton;
