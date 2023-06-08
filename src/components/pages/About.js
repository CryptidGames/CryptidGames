import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import { Button } from '../Button';

export default function About() {
    return (
    <>
    <h1 className='about'>
        About
      <p className='aboutP'>
      In this game, the UFO will listen to whatever audio your computer is playing
       and turn it into attacks/movements. Try not to get abducted, or hypnotized, 
       by the mesmerizing light show! Every song creates a different experience 
       and level of difficulty, making the gameplay 100% unique for the player's
       audio of choice. Listen to anything from music, to movies, and even your friends
       voices on voice-chat and see if you can survive...
      </p>
      <p className='aboutP'>
        Check out our Instagram and my Portfolio for more!
      </p>

      <Button onClick={() => { window.location.href = "https://www.instagram.com/cryptid_games_studio/"; } }>
        Instagram
      </Button>
      <Button onClick={() => { window.location.href = "https://alleckmh94.wixsite.com/amh-games"; } }>
        Portfolio
      </Button>
    </h1>
    </>
    );
}