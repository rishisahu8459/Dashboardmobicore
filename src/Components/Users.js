// Users.js

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../styles/Users.css';

const Users = () => {
  // Dummy data for users (replace it with your actual data)
  const users = [
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'Full Access' },
    { id: 3, name: 'Guest User', role: 'Guest' },
    { id: 4, name: 'Guest User', role: 'Guest' },
    { id: 5, name: 'Guest User', role: 'Guest' },
    // Add more users as needed
  ];

  return (
    <div className="UsersContainer" >
      <Typography variant='h6' >Members</Typography>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item key={user.id}>
            <div className="UserItem">
              <Avatar alt={user.name} src={`https://i.pravatar.cc/150?u=${user.id}`} className="Avatar" />
              <Typography variant="body2" className="UserName">
                {user.name}
              </Typography>
              <Typography variant="caption" className="UserRole">
                {user.role}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Users;
