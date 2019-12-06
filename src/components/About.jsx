import React from 'react';
import './About.css';

function About() {
  return (
    <section className='about'>
      <div className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading'>
            About Evergreen Curling Club
          </h2>
        </div>

        <div className='row'>
          <div className='col-1-of-2'>
            <p className='paragraph'>
              Evergreen Curling Club operates the only dedicated curling facility in the state of Oregon, and one of only four in the continental United States west of the Rockies.  The other three being Granite Curling Club in Seattle, Coyotes Curling Club in Tempe, Arizona, and Lake Tahoe Epic Curling in Stateline, Nevada.
            </p>

            <p className='paragraph'>
              We offer leagues seven days a week during the October thru April curling season, private and public instruction and coaching for new and novice curlers, and clinics for members.  Juniors (grades 1-12) meet for lessons and practice on most Saturdays during the curling season. We host multiple bonspiels and playdowns each year, and we hosted the 2017 USA Curling Senior Women's Nationals.  The public is welcome to watch league games and competitions from our warm-room.
            </p>

            <p className='paragraph'>
              Our facility is not air-conditioned, limiting the months in which curling events, lessons, and leagues may be offered.  ECC is actively exploring opportunities for increasing the number of sheets (playing fields) to accommodate larger events, leagues and bonspiels.
            </p>

            <p className='paragraph'>
              We are a volunteer-based 501(c)(3) non-profit sports organization.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;