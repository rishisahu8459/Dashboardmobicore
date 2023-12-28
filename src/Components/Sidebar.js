// Sidebar.js
import React from 'react';
import { SidebarData } from './SidebarData';
import "../App.css";

function Sidebar() {
  return (
    <div className='Sidebar'>
      {SidebarData.map((item, index) => (
        <div key={index} className='SidebarItem'>
          {React.cloneElement(item.icon, { style: { fontSize: 45 } })}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
