// src/components/HomeContainer.js
import React from 'react';
import "../App.css"
import Paper from '@mui/material/Paper';
import Rooms from './Rooms';

const HomeContainer = () => {
  return (
    <div className='main-content'>
      
      <Paper className='left-section' elevation={1}>
        <Paper  elevation={3}>
          <div className='weather-section'>
          <h1>Weather Widgets
          </h1>
          </div>
        </Paper>

        <div>
          <Rooms/>
        </div>
     
      </Paper>
      <div className='right-section'>
      <Paper  elevation={3}>
          <div className='weather-section'>
          <h1>Weather Widgets
          </h1>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default HomeContainer;
