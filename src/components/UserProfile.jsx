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
      <div className="user-profile">
        <h2 className='heading greeting'>Hello {this.props.currentUser.displayName}</h2>

        <h5>Your Registered Leagues</h5>
        <ol>
          {userLeagues.map(event => <li>{event}</li>)}
        </ol>

        <h5>Your Registered Bonspiels</h5>
        <ol>
          {userBonspiels.map(bon => <li>{bon}</li>)}
        </ol>
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