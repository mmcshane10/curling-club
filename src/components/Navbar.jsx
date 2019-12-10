import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='nav'>
      <ul>
        <li><Link to='/'>Home</Link></li>
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
            <Link to='/history'>History</Link>
            <a href='#'>Contact</a>
            <a href='#'>Membership</a>
            <a href='https://www.youtube.com/channel/UCYVxXAWpuM2Al3Mch8dRpdQ' target="_blank">Video Stream</a>
          </div>
        </li>
        <li><Link to='/results'>Results</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;