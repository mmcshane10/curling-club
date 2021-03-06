import React from 'react';
import './MemberInfo.css';
import Olympics from '../img/Olympics.png';
import { Link } from 'react-router-dom';

function MemberInfo() {
  return (
    <div className='member-info'>
      <div>
        <h2 className='heading'>Become a Member and Curl with ECC:</h2>
        <p className='flow-text'>1. Join ECC as a new member using the online <a target='_blank' href="https://www.youtube.com/watch?v=PoD9gVdeIS4">link</a>.</p>
        <p className='flow-text'>2. Wait for ECC to contact you with your new website credentials.  This is a manual process carried out by a volunteer and may take a few days.</p>
        <p className='flow-text'>3. Log-in to ECCs website and begin exploring the leagues and clinics (both seasonal) that are available to you.  Registration for all member events and leagues may be limited. Membership does not guarantee a spot in events or leagues.</p>
        <p className='flow-text'>Memberships run $85 for adults, $45 for youths for the curling season.  Half-year memberships run $50 for adults and $30 for youths.</p>
      </div>
      <div>
        <img className='olympic-img' src={Olympics} alt='curling olympic logo'/>
        <h2 className='heading'>Membership Benefits</h2>
        <ul>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Access to member-only curling leagues (additional fee)</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Substitute on a team at no additional cost</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Practice for free during off-hours (subject to ice availability)</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Use of top-notch club equipment</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Junior curling weekly practice sessions (for curlers under age 21)</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Subscription to members' email newsletter</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Membership in Mountain Pacific Curling Association (MoPac)</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Membership in US Curling Association (USCA)</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Opportunity to compete in USA Curling National Championships</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Subscription to USA Curling's publication, US Curling News</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Right to vote in ECC elections</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Right to hold office in ECC</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Participate in ECC members-only curling events (additional fee)</li>
          <li className='member-list flow-text'><i className='tiny material-icons'>arrow_forward</i>Access to members' web site and members' Facebook group</li>
        </ul>
      </div>
    </div>
  );
}

export default MemberInfo;