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
    this.props.fetchDailyResults()    
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Matchup</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.dailyMatches).map(matchId => {
              let game = this.props.dailyMatches[matchId];
              return (
                <tr key={matchId}>
                  <td>{game.status}</td>
                  <td>{game.teamOne} - {game.teamTwo}</td>
                  <td>{game.teamOneScore} - {game.teamTwoScore}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  dailyMatches: state.dailyMatches,
})

const mapDispatchToProps = {
  fetchDailyResults,
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyResults);