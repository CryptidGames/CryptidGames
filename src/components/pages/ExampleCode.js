import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import { Button } from '../Button';
import UFOMotor from './UFOMotor.cs';

export default function ExampleCode() {
    return (
    <>
    <h1 className='examplecode'>
        Example Code
      <h5>
      Below is an example of my code used in the game. The code provided is the 
      motor script for the enemy UFO. It controls movements, attacks, audio data,
      and some UI animations.
      </h5>      
      <p className='examplecodeP'>
      <a href={UFOMotor} download="UFOMotor.cs" target="_blank" rel="noreferrer"><p className='examplecodeL'>UFOMotor.cs</p></a>
      </p>
    </h1>
    </>
    );
}