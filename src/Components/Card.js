// CardComponent.js

import React from 'react';

import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Switch from '@mui/material/Switch';
import DevicesIcon from '@mui/icons-material/Devices';
import "../styles/Card.css"
import { Card } from '@mui/material';

const colors = ['#7c41f5', '#f5c525', '#ff9062', '#3acbe8'];

const CardComponent = ({ title }) => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[colorIndex];

  return (
    
    <div className="Card" style={{ backgroundColor: selectedColor }} >
      <CardHeader
        avatar={<DevicesIcon style={{ fontSize: 30 }} />}
        title={title}
        titleTypographyProps={{ variant: 'body1', position: 'absolute' , top: '40'}}
        className="CardHeader"
      />
      <CardContent className="CardContent">
        <Switch color="default"  className="Switch" />
      </CardContent>
    </div>
  );
};

export default CardComponent;
