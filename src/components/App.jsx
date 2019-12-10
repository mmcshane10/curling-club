import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Animation1 from './Animation1';
import DailyResults from './DailyResults';
import { Switch, Route } from 'react-router-dom';

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
          <Route exact path='/results' component={DailyResults} />
        </Switch>
        {/* <Animation1 /> */}
      </div>
    );
  }
}

export default(App);