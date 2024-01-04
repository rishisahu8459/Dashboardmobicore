// MyDevices.js
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardComponent from './Card';
import '../App.css';

const MyDevices = () => {
  const [selectedOption, setSelectedOption] = useState('all');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Dummy data for cards (you can replace it with your actual data)
  const cards = [
    { id: 1, title: 'Card 1', isOn: true },
    { id: 2, title: 'Card 2', isOn: false },
    { id: 3, title: 'Card 3', isOn: true },
    { id: 4, title: 'Card 4', isOn: false },
    { id: 5, title: 'Card 5', isOn: true },
    { id: 6, title: 'Card 6', isOn: false },
    // Add more cards as needed
  ];

  const filteredCards = selectedOption === 'all' ? cards : cards.filter((card) => (card.isOn && selectedOption === 'on') || (!card.isOn && selectedOption === 'off'));

  return (
    <div className="MyDevicesPaper">
      <div className="MyDevicesHeader">
        <Typography variant="h5" marginLeft={1}>
          My Devices
        </Typography>

        <FormControl>
          <Select
            value={selectedOption}
            onChange={handleChange}
            className="dropdown"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="on">ON</MenuItem>
            <MenuItem value="off">OFF</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="CardsContainer" style={{ overflowX: 'hidden' }}>
        <Grid container spacing={2} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
          {filteredCards.map((card) => (
            <Grid item key={card.id} xs={6} sm={6} md={6}>
              <CardComponent title={card.title} isOn={card.isOn} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default MyDevices;
