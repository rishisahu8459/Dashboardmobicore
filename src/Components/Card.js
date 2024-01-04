// CardComponent.js
import React from 'react';
import Switch from '@mui/material/Switch';
import DevicesIcon from '@mui/icons-material/Devices';

import "../styles/Card.css";
import { Card } from '@mui/material';

const colors = ['#7c41f5', '#f5c525', '#ff9062', '#3acbe8'];

const CardComponent = ({ title }) => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[colorIndex];

  return (
    <Card className="Card" style={{ backgroundColor: selectedColor, borderRadius: '20px' }}>
      <DevicesIcon style={{ fontSize: 30, margin: '10px', color: 'white' }} />
      <p className="CardTitle">{title}</p>
      <div className="SwitchContainer">
        <Switch className="Switch" />
      </div>
    </Card>
  );
};

export default CardComponent;
