import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Animation1 from './Animation1';
import Parallax from './Parallax';
import DailyResults from './DailyResults';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Parallax />
        <DailyResults />
        {/* <Animation1 /> */}
      </div>
    );
  }
}

export default(App);