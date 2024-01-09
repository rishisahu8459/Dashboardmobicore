// ArcSlider.js
import React, { useState } from 'react';
import CircularSlider from 'react-circular-slider-svg';
import '../styles/ArcSlider.css';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ArcSlider = () => {
  const [value, setValue] = useState(0);
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setSwitchOn(!isSwitchOn);
  };

  const decreaseValue = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const increaseValue = () => {
    setValue((prevValue) => Math.min(prevValue + 1, 100));
  };

  return (
    <div className="ArcSlider">
      <div className="room-info">
        <Typography variant="h5" marginLeft={2}>Living Room</Typography>
        <Typography variant="h5" marginLeft={2}>Fan</Typography>
      </div>
      <div className="switch-container">
        <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
      </div>
      <div className="slider-value">{value}</div>
      <div className="icon-button">
        <IconButton onClick={decreaseValue}>
          <RemoveIcon />
        </IconButton>
      </div>
      <CircularSlider
        size={340}
        minValue={0}
        maxValue={100}
        startAngle={90}
        endAngle={270}
        angleType={{
          direction: 'ccw',
          axis: '-y',
        }}
        handle1={{
          value: value,
          onChange: (v) => setValue(v),
        }}
        arcColor="#ccdcff"
        arcBackgroundColor="#ff942a"
        circleWidth={100} // Increase the width of the slider bar
        knobRadius={500}  // Increase the size of the knob
        className="circular-slider-container"
      />
      <div className="icon-button">
        <IconButton onClick={increaseValue}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ArcSlider;
