import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import DailyResults from './DailyResults';
import History from './History';
import Footer from './Footer';
import MemberInfo from './MemberInfo';
import Leagues from './Leagues';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Bonspiel from './Bonspiel';
import Parties from './Parties';
import Profile from './UserProfile';
import { watchAuthStateChanged } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.listenForUser();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/results' component={DailyResults} />
          <Route exact path='/history' component={History} />
          <Route exact path='/info' component={MemberInfo} />
          <Route exact path='/leagues' component={Leagues} />
          <Route exact path='/bonspiels' component={Bonspiel} />
          <Route exact path='/join' component={SignUp} />
          <Route exact path='/login' component={SignIn} />
          <Route exact path='/parties' component={Parties} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listenForUser: () => {
      dispatch(watchAuthStateChanged());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);