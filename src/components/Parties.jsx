import React from 'react';
import { Link } from 'react-router-dom';
import './Parties.css';
import WarmRoom from '../img/warmroom.jpg';

function Parties() {
  return (
    <div className="parties">
      <h2 className='heading'>Private Events and Parties</h2>
      <img className='party-img' src={WarmRoom} alt='ECC Warm Room' />
      <p>The great Olympic sport of curling appeals to people of all ages and physical abilities and lets men and women compete equally. Curling encourages strategy, leadership, team communication, problem solving, sportsmanship, socialization and competition. Curling provides a fun, unique and memorable experience. It’s a day where everyone interacts and works together as a team toward a shared goal. Whether your event is corporate team building, school field trip, private learn-to-curl, or just a mess of people who want ice time, we can get you curling.</p>
      <h5>At your event...</h5>
      <li>Your curling event will begin with a brief off-ice introduction, safety talk, and stretch.</li>
      <li>Next you will move to the ice for instruction in the basics of delivery, sweeping and skipping. Then play a game for the rest of your event.</li>
      <li>No experience necessary.  Curling is an accessible sport.</li>
      <div className="row row-div">
        <div className="col s4">
          <h5>Managing Group Size</h5>
          <li>1 sheet = 8 recommended limit, max is 10 people</li>
          <li>2 sheets = 16 recommended limit, max is 20 people</li>
          <li>3 sheets = 24 recommended limit, max is 30 people</li>
        </div>
        <div className="col s4">
          <h5>2-Hour Event</h5>
          <li>One sheet: $440</li>
          <li>Two sheets: $770</li>
          <li>Three sheets: $1089</li>
          <li>Curling lesson followed by 1-3 ends (innings) of a game as time allows.  Includes all necessary equipment.</li>
        </div>
        <div className="col s4">
          <h5>3-Hour Event</h5>
          <li>One sheet: $583</li>
          <li>Two sheets: $1045</li>
          <li>Three sheets: $1485</li>
          <li>Curling lesson followed by 3-5 ends (innings) of a game as time allows.  Includes all necessary equipment.</li>
        </div>
      </div>
    </div>
  );
}

export default Parties;