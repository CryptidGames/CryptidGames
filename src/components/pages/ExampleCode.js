import React from 'react';
import '../../App.css';
import { Document, Page } from 'react-pdf';
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
      <Document file = "/public/images/UFOMotor.pdf"
       onLoadSuccess={this.onDocumentLoad}>
       {/* This is needed to fix the issue */}
        <Page pageNumber={1}/>
      </Document>
      </div>
    </h1>
    </>
    );
}