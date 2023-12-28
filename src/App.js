// src/App.js

import './App.css';
import Navbar from './Components/Navbar';
import Sidebar  from './Components/Sidebar';

const App = () => {

  return (
    <div className='app'>
      <Sidebar/>
      <Navbar/>
    </div>
    
  );
};

export default App;
