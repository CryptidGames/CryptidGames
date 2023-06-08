import React from 'react';
import '../../App.css';
import {Crud} from '../crud/index';
  
export default function RegisterUser() {
    return (
        <div className='register-user'>
            <h1>Register User</h1>
            <p>
                To play Cryptid Games, you must first authenticate your IMX wallet and register your account here.
                If you are the owner of a Happy Camper: UAP series NFT, you will be able to create your account.
                Once your account is created, hop into the game and sign in using your new login info.
                If done correctly, you will now be able to play the game!
            </p>
            <Crud/>
        </div>
    )
}