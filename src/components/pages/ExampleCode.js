import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import { Button } from '../Button';

export default function ExampleCode() {
    return (
    <>
    <h1 className='examplecode'>
        Example Code
      <h5>
      Here is an example of my code used in the game. The code provided is the 
      motor script for the enemy UFO. It controls movements, attacks, audio data,
      and some UI animations.
      <object data="/public/images/UFOMotor.pdf" type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href="/public/images/UFOMotor.pdf">to the PDF!</a></p>
      </object>
      </h5>      <p className='examplecodeP'>
      If you would like the full CS file, click the download below!
      </p>

      <Button buttonStyle='btn--outline1' onClick={() => { window.location.href = "https://www.instagram.com/cryptid_games_studio/"; } }>
        Instagram
      </Button>
      <Button buttonStyle='btn--outline1' onClick={() => { window.location.href = "https://alleckmh94.wixsite.com/amh-games"; } }>
        Portfolio
      </Button>
    </h1>
    </>
    );
}