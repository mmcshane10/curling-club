import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default(App);