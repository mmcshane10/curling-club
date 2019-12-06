import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <div className='nav'>
      <ul>
        <li className='dropdown'>
          <a href='javascript:void(0)' className='dropbtn'>Dropdown</a>
          <div className='dropdown-content'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
        </li>
        <li className='dropdown'>
          <a href='javascript:void(0)' className='dropbtn'>Dropdown</a>
          <div className='dropdown-content'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
        </li>
        <li className='dropdown'>
          <a href='javascript:void(0)' className='dropbtn'>Dropdown</a>
          <div className='dropdown-content'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;