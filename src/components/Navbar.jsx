import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
      <ul>
        <li><a href='#home'>Home</a></li>
        <li className='dropdown'>
          <a href='#' className='dropbtn'>Events</a>
          <div className='dropdown-content'>
            <a href='#'>Leagues</a>
            <a href='#'>Bonspiels</a>
            <a href='#'>Corporate Parties</a>
          </div>
        </li>
        <li className='dropdown'>
          <a href='#' className='dropbtn'>Evergreen CC</a>
          <div className='dropdown-content'>
            <a href='#'>About</a>
            <a href='#'>History</a>
            <a href='#'>Contact</a>
            <a href='#'>Membership</a>
            <a href='https://www.youtube.com/channel/UCYVxXAWpuM2Al3Mch8dRpdQ' target="_blank">Video Stream</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;