// Navbar.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Autocomplete from '@mui/material/Autocomplete';
import InputBase from "@mui/material/InputBase";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState('User1'); // Initial user
  const [searchValue, setSearchValue] = useState('');
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUserChange = (user) => {
    setSelectedUser(user);
    handleMenuClose();
  };

  const handleSearchChange = (event, value) => {
    setSearchValue(value);
    // Perform API call or fetch suggestions based on the search value
    // For now, let's simulate a loading state
    setLoading(true);
    setTimeout(() => {
      // Simulating API response with autocomplete suggestions
      setAutocompleteOptions(['Option 1', 'Option 2', 'Option 3']);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='w3-bar' >
     <Box  display="flex" borderRadius={3} borderColor={'black'} border={1}>
     <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
     <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>


 {/* Buttons  */}
      <Box   display={'flex'} position={'absolute'} right={5}>
     
      <IconButton  color="inherit" onClick={handleMenuOpen}>
        <SettingsIcon />
      </IconButton>

      {/* Notification Button */}
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton>

      {/* Avatar and Dropdown */}
      <IconButton
        color="inherit"
        onClick={handleMenuOpen}
        style={{ marginLeft: '10px' }}
      >
        <Avatar  alt={selectedUser} src={`avatar/${selectedUser}.jpg`} />
      </IconButton>

      <Menu 
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleUserChange('User1')}>User1</MenuItem>
        <MenuItem onClick={() => handleUserChange('User2')}>User2</MenuItem>
        {/* Add more users as needed */}
      </Menu>
      </Box>
    </div>
  );
}

export default Navbar;
