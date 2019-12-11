import React from 'react';
import './DailyResults.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDailyResults } from './../actions';

class DailyResults extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDailyResults();    
  }

  render() {

    let resultsHeader = '';
    console.log(Object.entries(this.props.dailyMatches).length);
    
    if (Object.entries(this.props.dailyMatches).length === 0) {
      resultsHeader = <h3>No results found for today's date. Check back tomorrow!</h3>;
    } else {
      resultsHeader = 
        <thead>
          <tr>
            <th>Status</th>
            <th>Matchup</th>
            <th>Score</th>
          </tr>
        </thead>;
    }

    return (
      <div className='results'>
        <h2 className='heading'>Live Results:</h2>
        <table>
          {resultsHeader}
          <tbody>
            {Object.keys(this.props.dailyMatches).map(matchId => {
              let game = this.props.dailyMatches[matchId];
              return (
                <tr key={matchId}>
                  <td>{game.status}</td>
                  <td>{game.teamOne} - {game.teamTwo}</td>
                  <td>{game.teamOneScore} - {game.teamTwoScore}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dailyMatches: state.dailyMatches,
});

const mapDispatchToProps = {
  fetchDailyResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyResults);