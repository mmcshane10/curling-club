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

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/results' component={DailyResults} /> */}
          <Route exact path='/history' component={History} />
          <Route exact path='/info' component={MemberInfo} />
          <Route exact path='/leagues' component={Leagues} />
          <Route exact path='/join' component={SignUp} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;