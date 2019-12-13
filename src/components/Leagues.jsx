import React from 'react';
import { connect } from 'react-redux';
import './Leagues.css';

class Leagues extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='leagues row'>
        <h2 className='heading'>Member Leagues</h2>
        <p className='paragraph'>Evergreen Curling Club offers member leagues seven nights a week during the curling season, as well as some daytime sessions. Current membership is required before you are allowed to register for a member league. League registration is first-come-first serve after our pre-registration period.</p>
        <p className='paragraph'>Our curling season is divided into three sessions.  Fall typically runs October 1 thru mid-December, or approximately 12 weeks.  Winter typically runs January 3 thru mid to late March, or approximately 11 weeks.  Spring typically runs mid to late March thru end of April, approximately 5-6 weeks.</p>
        <h3 className='heading'>Winter Leagues:</h3>
        {console.log('LEAGUES:', this.props.memberLeagues)}
        {Object.keys(this.props.memberLeagues).map(leagueId => {
          let league = this.props.memberLeagues[leagueId];          
          return (
            <div key={leagueId} className='col s12 m6'>
              <div className='card-panel'>
                <h5 className='day-heading'>{league.day}</h5>
                <p><span className="labels">Time: </span> {league.time}</p>
                <p><span className="labels">Skill Level: </span> {league.level}</p>
                <p><span className="labels"># of Weeks: </span> {league.weeks}</p>
                <p><span className="labels">Registration Fee: </span> {league.cost}</p>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    memberLeagues: state.memberLeagues
  }
}

export default connect(mapStateToProps)(Leagues);