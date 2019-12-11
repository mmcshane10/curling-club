import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Affiliations.css';
import mopac from '../img/mopac.jpg';
import usacurling from '../img/usacurling.jpg';
import wcf from '../img/wcf.jpg';

function Affiliations() {
  return (
    <section className='affiliations'>
      <h2 className='heading'>Our Affiliations</h2>
      <div className='row'>
        <div className='col s4'>
          <img className='affImage' src={mopac} />
          <p className='paragraph'>MoPac is one of ten regions in the United States and represents: Arizona, California, Idaho, Montana, Nevada, Oregon and Utah. MoPac has 17 member clubs and hosts the playdowns for the United States Curling Association, USCA.</p>
        </div>
        <div className='col s4'>
          <img className='affImage' src={usacurling} />
          <p className='paragraph'>The United States Curling Association (USCA), doing business as USA Curling, is the National Governing Body for the Olympic sport of curling. The association is headquartered in Stevens Point, Wisconsin.</p>
        </div>
        <div className='col s4'>
          <img className='affImage' src={wcf} />
          <p className='paragraph'>The World Curling Federation represents curling internationally and facilitates the growth of the sport through a network of Member Associations / Federations. It is the world governing body of the Olympic Winter Sport of Curling and the Paralympic Winter Sport of Wheelchair Curling.</p>
        </div>
      </div>
    </section>
  );
}

export default Affiliations;