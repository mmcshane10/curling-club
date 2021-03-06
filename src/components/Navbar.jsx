import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.jpg';
import { connect } from 'react-redux';
import { logOutUser } from '../actions';

const Navbar = (props) => {

  const { currentUser } = props;
  
  function handleSignOut() {
    logOutUser()();
    alert('Sign out successful!');
  }
  
  let profileTab = <li className='dropdown uppercase flow-text'>
    <Link to='/profile'>Profile</Link>
    <div className='dropdown-stuff'>
      <Link to='/' onClick={() => handleSignOut()}>Sign Out</Link>
    </div>
  </li>;

  let userSignedIn = currentUser.email ? profileTab : null;

  return (
    <div className='nav'>
      <ul>
        <li className='navhover uppercase flow-text'><Link to='/'>Home</Link></li>
        <li className='dropdown uppercase flow-text'>
          <li className='dropbtn navhover'>Events</li>
          <div className='dropdown-stuff'>
            <Link to='/leagues'>Leagues</Link>
            <Link to='/bonspiels'>Bonspiels</Link>
            <Link to='/parties'>Private Parties</Link>
          </div>
        </li>
        <li className='dropdown uppercase flow-text'>
          <li className='dropbtn navhover'>Evergreen CC</li>
          <div className='dropdown-stuff'>
            <Link to='/history'>History</Link>
            <Link to='/info'>Membership Info</Link>
            <a href='https://www.youtube.com/channel/UCYVxXAWpuM2Al3Mch8dRpdQ' target="_blank">Video Stream</a>
          </div>
        </li>
        <li className='navhover uppercase flow-text'><Link to='/results'>Results</Link></li>
        {userSignedIn}

        {/* <li className='dropdown uppercase flow-text'>
          <Link to='/profile'>Profile</Link>
          <div className='dropdown-stuff'>
            <Link to='/' onClick={() => handleSignOut()}>Sign Out</Link>
          </div>
        </li> */}

        <img className='logoImg' src={Logo} />
      </ul>
      <hr />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(Navbar);