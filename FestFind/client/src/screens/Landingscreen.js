import React from 'react';
import { Link } from 'react-router-dom';
import './Landingscreen.css'; // Import the CSS file here

function Landingscreen() {
  return (
    <div className='landing'>
      <div className='bg-animation'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='stars4'></div>
      </div>
      <div className='centered-content'>
        <p className='fest-text'>FindFest</p>
        <p className='inspiration-text'>We will find your event in Apple City!</p>
        <Link to='/home'>
          <button className='get-started mt-3'>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Landingscreen;
