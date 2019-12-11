import React from 'react';
import './Footer.css';
import Shield from '../img/newShield.png';
import twitter from '../img/twitter.png';
import IG from '../img/IG.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col s6'>
          <h5>Evergreen Curling Club</h5>
          <p>10950 SW 5th St.</p>
          <p>Suite #155</p>
          <p>Beaverton, OR 97005</p>
          <p>Phone: 503-430-0910</p>
          <div className='social'>
            <a href="https://twitter.com/curlportland/" target='_blank'><img className='social-img' src={twitter} alt="twitter logo" /></a>
            <a href="https://www.instagram.com/curlportland/?ref=badge" target='_blank'><img className='social-img' src={IG} alt="Instagram logo" /></a>
          </div>
        </div>
        <div className='col s6 imgCol'>
          <img className='footer-logo' src={Shield} alt="ECC logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;