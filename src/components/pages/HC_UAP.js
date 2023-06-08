import React from 'react';
import '../../App.css';
import { Button } from '../Button';

export default function HC_UAP() {
    return (
        <h1 className='hc_uap'>
            <h1>
        Happy Camper: Unidentified Audio Phenomenon
        </h1>
            <p>
                In HC: Unidentified Audio Phenomenon, 
                the UFO will listen to whatever audio your computer is playing
                and turn it into attacks/movements. 
                Try not to get abducted, or hypnotized, by the mesmerizing light show! 
                Every song creates a different experience and level of difficulty, 
                making the gameplay 100% unique for the player's audio of choice. 
                Listen to anything from music, to movies, 
                and even your friends voices on voice-chat and see if you can survive...
            </p>
                    <Button buttonStyle='btn--outline1' onClick={() => { window.location.href = "https://cryptid-games.itch.io/happy-camper-unidentified-audio-phenomenon"; } }>
                    Download Game Here!
                    </Button>
        </h1>
    );
}