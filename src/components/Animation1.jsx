import React from 'react';
import sketch1 from '../sketches/sketch1';
import P5Wrapper from 'react-p5-wrapper';

function Animation1() {

  return (
    <P5Wrapper sketch={sketch1} />
  );
}

export default Animation1;