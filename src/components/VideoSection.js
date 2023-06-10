import React from 'react';
import { Button } from './Button';
import './VideoSection.css';

function VideoSection(){
    return (
        <div className='video-container'>
        <video src="/videos/HappyCamperPartyUp.mp4" autoPlay loop muted />
            <h1>Cryptid Games</h1>
            <div className='video-btns'>
                <Button dest='/RegisterUser' className='btns' buttonStyle='btn--outline1'
                buttonSize='btn--large'>
                    Register User
                </Button>
                <Button dest='/GamePlayVideo' className='btns' buttonStyle='btn--outline1'
                buttonSize='btn--large'>
                    Videos
                </Button>
            </div>
        </div>
    )
}

export default VideoSection