import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import DevicesIcon from '@mui/icons-material/Devices';
import { IconButton } from '@mui/material';
import { CircleSlider } from 'react-circle-slider';
import RoundSlider from './RoundSlider'; // Import the appropriate file for RoundSlider
import '../App.css';
import '../styles/ControlPanel.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArcSlider from './ArcSlider';
import SingleButton from './SingleButton';
import ThreeButton from './ThreeButton';

const ControlPanel = ({ selectedDeviceType }) => {
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

  // Render different sections based on the selected device type
  

  return (
    <div className="control-panel">
      {/* ... (other parts of the component) */}
      <div className='control-panel-section'>
      <SingleButton/>
      

      </div>
    </div>
  );
};

export default ControlPanel;
