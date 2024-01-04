// components/ControlPanel.js
import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import DevicesIcon from '@mui/icons-material/Devices';
import { IconButton } from '@mui/material';
import { CircleSlider } from 'react-circle-slider';
import '../App.css';
import '../styles/ControlPanel.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ControlPanel = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const [temperature, setTemperature] = useState(20);

  const handleSwitchChange = () => {
    setSwitchOn(!isSwitchOn);
  };

  const handleTemperatureChange = (value) => {
    setTemperature(value);
  };

  const increaseTemperature = () => {
    setTemperature((prevTemperature) => Math.min(prevTemperature + 1, 30));
  };

  const decreaseTemperature = () => {
    setTemperature((prevTemperature) => Math.max(prevTemperature - 1, 0));
  };

  return (
    <div className="control-panel">
      <div className="header">
        <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
          <IconButton>
            <DevicesIcon />
          </IconButton>
          <Typography variant="body1" style={{ marginLeft: '8px', marginTop: '20px' }}>
            Devices Name
          </Typography>
        </div>

        <Switch
          className="switch"
          checked={isSwitchOn}
          onChange={handleSwitchChange}
          color="default"
        />
      </div>

      <div className="Slider">
        <div className="buttonContainer">
          <IconButton onClick={decreaseTemperature}><RemoveIcon/></IconButton>
          
        </div>
        <div className="textContainer">
          {temperature}°C
          <div className="minute">Temperature</div>
        </div>
        <CircleSlider
          value={temperature}
          stepSize={1}
          onChange={(value) => handleTemperatureChange(value)}
          size={250}
          max={30}
          gradientColorFrom="#ec008c"
          gradientColorTo="#fc6767"
          knobRadius={20}
          circleWidth={40}
          
        />
         <div className="buttonContainer">
        <IconButton onClick={increaseTemperature}><AddIcon/></IconButton>
        </div>      
      </div>
    </div>
  );
};

export default ControlPanel;
