import React from 'react';
import './Header.css';

function Header() {
  return (
      <header className='header'>
        {/* <div className='logo-box'>
          <img src='../img/logo.jpg' alt='logo' className='logo'/>
        </div> */}
          <div className='text-box'>
            <h1 className='heading-primary'>
              <span className='heading-primary-main'>Evergreen</span>
              <span className='heading-primary-sub'>Curling CLub</span>
            </h1>
            <a href='#' className='btn btn-white btn-animated'>Become A Member</a>
          </div>
    </header>
      );
    }
    
export default Header;