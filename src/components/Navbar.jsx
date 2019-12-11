import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Unnamed from '../img/unnamed.png';


function Navbar() {
  return (
    <div className='nav'>
      <ul>
        <li className='navhover'><Link to='/'>Home</Link></li>
        <li className='dropdown'>
          <a href='#' className='dropbtn navhover'>Events</a>
          <div className='dropdown-stuff'>
            <a href='#'>Leagues</a>
            <a href='#'>Bonspiels</a>
            <a href='#'>Private Parties</a>
          </div>
        </li>
        <li className='dropdown'>
          <a href='#' className='dropbtn navhover'>Evergreen CC</a>
          <div className='dropdown-stuff'>
            <Link to='/history'>History</Link>
            <a href='#'>Membership Info</a>
            <a href='https://www.youtube.com/channel/UCYVxXAWpuM2Al3Mch8dRpdQ' target="_blank">Video Stream</a>
          </div>
        </li>
        <li className='navhover'><Link to='/results'>Results</Link></li>
        <img className='logoImg' src={Unnamed} />
      </ul>
    </div>
  );
}

export default Navbar;