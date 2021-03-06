import React from 'react';
import { connect } from 'react-redux';
import './Leagues.css';
import { addMemberToLeague } from '../actions';

class Leagues extends React.Component {

  render() {

    // let registerButton = <button key={leagueId} onClick={() => this.props.onRegisterClick(leagueId)} className='btn red lighten-1'>Register</button>

    // let userSignedIn = this.props.currentUser.email ? registerButton : null;

    return (
      <div className='leagues row flow-text'>
        <h2 className='heading'>Member Leagues</h2>
        <p className='paragraph'>Evergreen Curling Club offers member leagues seven nights a week during the curling season, as well as some daytime sessions. Current membership is required before you are allowed to register for a member league. League registration is first-come-first serve after our pre-registration period.</p>
        <p className='paragraph'>Our curling season is divided into three sessions.  Fall typically runs October 1 thru mid-December, or approximately 12 weeks.  Winter typically runs January 3 thru mid to late March, or approximately 11 weeks.  Spring typically runs mid to late March thru end of April, approximately 5-6 weeks.</p>
        <h3 className='heading'>Winter Leagues:</h3>
        {Object.keys(this.props.memberLeagues).map(leagueId => {
          let league = this.props.memberLeagues[leagueId];
          let registered = Object.entries(league.members).length;
          let available = league.capacity - registered;
          return (
            <div key={leagueId} className='col s12'>
              <div className='card-panel'>
                <h5 className='day-heading'>{league.day}</h5>
                <div className="row">
                  <div className="col s10">
                    <p><span className="labels">Time: </span> {league.time}</p>
                    <p><span className="labels">Skill Level: </span> {league.level}</p>
                    <p><span className="labels"># of Weeks: </span> {league.weeks}</p>
                    <p><span className="labels">Registration Fee: </span> {league.cost}</p>
                  </div>
                  <div className="col s2 col-right">
                    <button onClick={() => this.props.onRegisterClick(league.lid, this.props.currentUser)} className='btn red lighten-1'>Register</button>
                    <button className='btn blue lighten-1'>Attendees</button>
                  </div>
                </div>
                <div className="bon-stats">
                  <p><span className="labels">Capacity: {league.capacity}</span></p><p><span className="labels">Registered: {registered}</span></p><p><span className="labels">Available: {available}</span></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    memberLeagues: state.memberLeagues,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRegisterClick: (id, currentUser) => dispatch(addMemberToLeague(id, currentUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);