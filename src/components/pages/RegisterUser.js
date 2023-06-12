import React from 'react';
import '../../App.css';
import {Crud} from '../crud/index';
  
export default function RegisterUser() {
    return (
        <div className='register-user'>
            <h1>Register User</h1>
            <h5>
                To play Cryptid Games, you must first authenticate your IMX wallet and register your account here.
                If you are the owner of a Happy Camper: UAP series NFT, you will be able to create your account. 
                Forget your username or password? No problem, just enter your new info and click "Update User Info".
                Once your account is created, or updated, hop into the game and sign in using your new login info.
                If done correctly, you will now be able to play the game and all of your HC: UAP assets will be available!
            </h5>
            <Crud/>
        </div>
    )
}