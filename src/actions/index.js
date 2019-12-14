import * as types from './../constants/ActionTypes';
import Moment from 'moment';
import { v4 } from 'uuid';

export function fetchDailyResults() {
  return function (dispatch) {
    let moment = new Moment().format();
    let date = moment.slice(0, 10);
    let testDate = '2019-04-01';
    return fetch('http://api.sportradar.us/curling-t1/en/schedules/' + testDate + '/results.json?api_key=ufmacmt7he47k8kcf75c98a8').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function (json) {
      if (json.results.length > 0) {
        let dailyMatches = {};
        for (let i = 0; i < json.results.length; i++) {
          let newMatch = {
            id: v4(),
            event: json.results[i].sport_event.tournament.name,
            teamOne: json.results[i].sport_event.competitors[0].name,
            teamTwo: json.results[i].sport_event.competitors[1].name,
            status: json.results[i].sport_event_status.match_status,
            teamOneScore: json.results[i].sport_event_status.home_score,
            teamTwoScore: json.results[i].sport_event_status.away_score
          };
          dailyMatches = Object.assign({}, dailyMatches, {
            [newMatch.id]: newMatch
          });
        }
        dispatch(receiveDailyResults(dailyMatches));
      } else {
        console.log('No search results :(');
      }
    });
  };
}

export const receiveDailyResults = dailyMatches => ({
  type: types.RECEIVE_DAILY_MATCHES,
  dailyMatches
});

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: types.LOGIN_SUCCESS });
    }).catch((err) => {
      dispatch({ type: types.LOGIN_ERROR, err });
    });
  };
};