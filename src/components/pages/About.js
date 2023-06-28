import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import { Button } from '../Button';

export default function About() {
    return (
    <>
    <h1 className='about'>
        About
      <h5>
      Cryptid Games is an independent game studio solely operated by Alleck Henrie,
      and is based out of Los Angeles, CA. The Happy Camper series is focused on
      creating unique gameplay experiences for every player, with audio as the driver.
      In order to play Happy Camper: Unidentified Ariel Phenomenon, you have to currently
      own a Happy Camper: U.A.P. NFT!
      </h5>      <p className='aboutP'>
      If you would like to find out more about the studio, or about me as a developer,
      please visit the links below!
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