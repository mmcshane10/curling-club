import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import About from './About'

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
      </div>
    );
  }
}

export default(App);