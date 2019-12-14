import React from 'react';
import './Bonspiel.css';
import { connect } from 'react-redux';

class Bonspiel extends React.Component {

  render() {
    return (
      <div className='bonspiels row'>
        <h2 className='heading'>Bonspiels</h2>
        <p className='paragraph'>A bonspiel is a curling tournament held over a party-filled weekend. Bonspiels usually include a Saturday banquet, at least 3 games of curling, themes, costumes, drawings, prizes, and other party activities. Unless specifically stated otherwise, they are open to all types of teams and all levels of curlers.</p>
        <p className='paragraph'>Bonspiel committee reserves the right to make changes to format, number of teams, close date, etc. based on circumstances including but not limited to volunteers, club schedule, to any bonspiel.</p>
        <h3 className='heading'>2019-2020 Schedule:</h3>
        {console.log('BONSPIELS:', this.props.memberBonspiels)}
        {Object.keys(this.props.memberBonspiels).map(bonspielId => {
          let bonspiel = this.props.memberBonspiels[bonspielId];
          return (
            <div key={bonspielId} className='col s12 m6'>
              <div className='card-panel'>
                <h5 className='day-heading'>{bonspiel.name}</h5>
                <p><span className="labels">Start Date: </span> {bonspiel.startDate}</p>
                <p><span className="labels">End Date: </span> {bonspiel.endDate}</p>
                <p><span className="labels">Cost: </span> {bonspiel.cost}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    memberBonspiels: state.memberBonspiels
  };
};

export default connect(mapStateToProps)(Bonspiel);