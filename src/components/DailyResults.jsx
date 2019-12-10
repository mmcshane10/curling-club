import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDailyResults } from './../actions';

function DailyResults({ dispatch, dailyMatches }) {

  dispatch(fetchDailyResults());
  return(
    <div>
      <table>
        <tr>
          <th>Status</th>
          <th>Team</th>
          <th>Team</th>
        </tr>
      </table>
    </div>
  );
}

DailyResults.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(DailyResults);