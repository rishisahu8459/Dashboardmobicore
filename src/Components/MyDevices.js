import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card'; // Assume you have a Card component
import '../App.css'; // Import your external CSS file

const MyDevices = () => {
  const [selectedOption, setSelectedOption] = useState('all');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Dummy data for cards (you can replace it with your actual data)
  const cards = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    { id: 4, title: 'Card 4' },
    { id: 5, title: 'Card 5' },
    { id: 6, title: 'Card 6' },
    // Add more cards as needed
  ];

  return (
    <div  className="MyDevicesPaper">
      <div className="MyDevicesHeader" >
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
  {cards.map((card) => (
    <Grid item key={card.id} xs={6} sm={6} md={6}>
      <Card title={card.title} />
    </Grid>
  ))}
</Grid>

      </div>
    </div>
  );
};

export default MyDevices;
