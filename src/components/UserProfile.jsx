import React from 'react';
import './UserProfile.css';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="user-profile">
        <h1>Hello {this.props.currentUser.displayName}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(UserProfile);