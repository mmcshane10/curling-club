import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>Evergreen</span>
          <span className='heading-primary-sub'>Curling CLub</span>
        </h1>
        <Link to='/join' className='button button-white button-animated'>Become A Member</Link>
        
      </div>
    </header>
  );
}
    
export default Header;