import React from 'react';
import { Avatar } from '@material-ui/core';
import pic from './casual_pic_1.jpg';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div className='MenuBar'>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Avatar alt='Rayson Koh' style={{ width: '9em', height: '9em' }} src={pic} />
      </div>
      THIS IS THE MENUBAR!
    </div>
  )
}

export default MenuBar;