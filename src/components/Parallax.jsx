import React from 'react';
import ParallaxImg from '../img/parallax.jpg'


function Parallax() {
  var parallaxStyle = {
    backgroundImage: `url(${ParallaxImg})`,
    backgroundAttachment: 'fixed',
    height: '40vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  // .header {
  //   height: 90vh;
  //   background - image: linear - gradient(to right bottom, rgb(70, 179, 230, 0.7), rgb(77, 128, 228, 0.7)), url(../img/hero.jpg);
  //   background - size: cover;
  //   background - position: top;
  //   position: relative;
  //   clip - path: polygon(0 0, 100 % 0, 100 % 75vh, 0 100 %)
  // }
  return (
    <header style={parallaxStyle} className='parallax'>
    </header>
  );
}

export default Parallax;