import React from 'react';
import './UserProfile.css';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="user-profile">
        <h2 className='heading greeting'>Hello {this.props.currentUser.displayName}</h2>

        <h5>Your Registered Events</h5>
        <ul>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    memberLeagues: state.memberLeagues,
    memberBonspiels: state.memberBonspiels
  }
}

export default connect(mapStateToProps)(UserProfile);