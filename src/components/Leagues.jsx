import React from 'react';
import { connect } from 'react-redux';

class Leagues extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='leagues row'>
        {console.log('LEAGUES:', this.props.memberLeagues)}
        <h2 className='heading'>Member Leagues</h2>
        {Object.keys(this.props.memberLeagues).map(leagueId => {
          let league = this.props.memberLeagues[leagueId];
          console.log('ID:', leagueId);
          
          return (
            <div key={leagueId} className='col s12 m6'>
              <div className='card-panel'>
                <h5>{league.day}</h5>
                <p>{league.time}</p>
                <p>{league.level}</p>
                <p>{league.weeks}</p>
                <p>{league.cost}</p>
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