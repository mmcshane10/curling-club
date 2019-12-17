import * as types from './../constants/ActionTypes';
import Moment from 'moment';
import { v4 } from 'uuid';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

export function sendNewUserToFireBase(email, password, displayName) {
  return () => firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
    var currentUser = firebase.auth().currentUser;
    currentUser.updateProfile({
      displayName: displayName
    });
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

export function logInUser(email, password) {
  return () => firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

export function logOutUser() {
  return () => firebase.auth().signOut().then(function () {
    console.log('sign out successfull');
    console.log(state);
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

export function watchAuthStateChanged() {
  return function (dispatch) {
    firebase.auth().onAuthStateChanged(function (currentUser) {
      console.log('the user is', currentUser);
      dispatch(sendUserToRedux(currentUser));
    });
  };
}

export const sendUserToRedux = (currentUser) => {
  return {
    type: types.NEW_USER,
    currentUser,
  };
};

export const removeUserState = () => {
  return {
    type: types.LOG_OUT,
  };
};

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