import React from 'react';
import '../../App.css';
import { pdfjs  } from 'react-pdf';
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
      </h5>      <p className='examplecodeP'>
      If you would like the full CS file, click the download below!
      </p>
      <div>
      <pdfjs  file = "/public/images/UFOMotor.pdf">
      </pdfjs >
      </div>
    </h1>
    </>
    );
}