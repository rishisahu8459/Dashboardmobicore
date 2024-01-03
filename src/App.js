// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mui/material';

import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import HomeContainer from './Components/HomeContainer'; // Import the HomeContainer component

const App = () => {
  return (
    <div className='app'>
      
      <Sidebar />
      <div >
      <Navbar/>
        <HomeContainer/> {/* Use the HomeContainer component */}
      </div>
    </div>
  );
};

export default App;
