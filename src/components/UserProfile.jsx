import React from 'react';
import './UserProfile.css';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let leagueKeys = Object.keys(this.props.memberLeagues);
    let userLeagues = [];
    leagueKeys.forEach(leagueKeys => {
      if (this.props.memberLeagues[leagueKeys].members.includes(this.props.currentUser.displayName)) {
        userLeagues.push(this.props.memberLeagues[leagueKeys].day + ' at ' + this.props.memberLeagues[leagueKeys].time)
      }
    })

    let bonspielKeys = Object.keys(this.props.memberBonspiels);
    console.log(bonspielKeys);
    let userBonspiels = [];
    bonspielKeys.forEach(bonspielKeys => {
      if (this.props.memberBonspiels[bonspielKeys].members.includes(this.props.currentUser.displayName)) {
        userBonspiels.push(this.props.memberBonspiels[bonspielKeys].name + ' (' + this.props.memberBonspiels[bonspielKeys].startDate + ')')
      }
    })

    return (
      <div className="user-profile flow-text">
        <h2 className='heading greeting'>Hello {this.props.currentUser.displayName}</h2>
        <div className="row">
          <div className="col s6 profile-column">
            <h5 className='profile-heading'>Your Registered Leagues:</h5>
            <ul>
              {userLeagues.map(event => <li className='list-item'>{event}</li>)}
            </ul>
          </div>
          <div className="col s6 profile-column">
            <h5 className='profile-heading'>Your Registered Bonspiels:</h5>
            <ul>
              {userBonspiels.map(bon => <li className='list-item'>{bon}</li>)}
            </ul>
          </div>
        </div>
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