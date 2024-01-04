// src/components/HomeContainer.js
import React from 'react';
import "../App.css"
import Paper from '@mui/material/Paper';
import Rooms from './Rooms';
import MyDevices from './MyDevices';
import Users from './Users';
import LineChart from './LineChart';
import Weathercard from './Weathercard';
import ControlPanel from './ControlPanel';





const HomeContainer = () => {
  return (
    <div className='main-content'>
      
      <Paper className='left-section' elevation={1}>
        <div className='weather-section'>
       <Weathercard/>
        </div>

        <div>
          <Rooms/>
        </div>
        <Paper className='control-panel' elevation={3}>
          <ControlPanel/>
          </Paper>
      </Paper>
      <div className='right-section'>
      <MyDevices />
         <Users />
       
      </div>
    </div>
  );
};

export default HomeContainer;
