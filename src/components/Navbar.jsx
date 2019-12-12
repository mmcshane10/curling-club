import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.jpg';


function Navbar() {
  return (
    <div className='nav'>
      <ul>
        <li className='navhover uppercase flow-text'><Link to='/'>Home</Link></li>
        <li className='dropdown uppercase flow-text'>
          <a href='#' className='dropbtn navhover'>Events</a>
          <div className='dropdown-stuff'>
          <Link to='/leagues'>Leagues</Link>
            <a href='#'>Bonspiels</a>
            <a href='#'>Private Parties</a>
          </div>
        </li>
        <li className='dropdown uppercase flow-text'>
          <a href='#' className='dropbtn navhover'>Evergreen CC</a>
          <div className='dropdown-stuff'>
            <Link to='/history'>History</Link>
            <Link to='/info'>Membership Info</Link>
            <a href='https://www.youtube.com/channel/UCYVxXAWpuM2Al3Mch8dRpdQ' target="_blank">Video Stream</a>
          </div>
        </li>
        <li className='navhover uppercase flow-text'><Link to='/results'>Results</Link></li>
        <img className='logoImg' src={Logo} />
      </ul>
      <hr/>
    </div>
  );
}

export default Navbar;