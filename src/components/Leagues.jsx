import React from 'react';
import { connect } from 'react-redux';

class Leagues extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='leagues row'>
        {console.log('/////', this.props.memberLeagues)}
        <h2 className='heading'>Member Leagues</h2>
        {Object.keys(this.props.memberLeagues).map(leagueId => {
          let league = this.props.memberLeagues[leagueId];
          return (
            <div className='col s12 m6'>
              <div key={leagueId} className='card-panel'>
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