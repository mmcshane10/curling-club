import React from 'react';
import Header from './Header';
import About from './About';
import Animation1 from './Animation1';
import Parallax from './Parallax';
import Affiliations from './Affiliations';

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Parallax />
      <Affiliations />
    </div>
  );
}

export default Home;