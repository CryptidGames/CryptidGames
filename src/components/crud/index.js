import React from 'react';
import { ref, set, get, update, remove, child } from "firebase/database";
import StartFirebase from '../Firebase/Index';
import { Button } from '../Button';
import {Link} from '@imtbl/imx-sdk';
import UserCreated from '../../components/pages/UserCreated';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'; 

export class Crud extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        db: '',
        username: '',
        password: '',
        passConf: '',
        walletAdd: '',
        }
        this.interface = this.interface.bind(this);
    }

    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }

    render(){
        return(
            <>
                <label>Enter Username</label>
                <input type='text' id="userbox" value={this.state.username} onChange={e => {this.setState({username: e.target.value});}}/>
                <br/><br/>

                <label>Enter Password</label>
                <input type='text' id="passwordbox" value={this.state.password} onChange={e => {this.setState({password: e.target.value});}}/>
                <br/><br/>

                <label>Re-Enter Password</label>
                <input type='text' id="passConfbox" value={this.state.passConf} onChange={e => {this.setState({passConf: e.target.value});}}/>
                <br/><br/>

                <Button id="addBtn" buttonStyle='btn--outline1' onClick={this.interface} type='btn--outline'>Create Account</Button>
                {/*<button id="updateBtn" onClick={this.interface}>Update Data</button>
                <button id="deleteBtn" onClick={this.interface}>Delete Data</button>
                <button id="selectBtn" onClick={this.interface}>Get Data from DB</button>*/}
            </>
        )
    }

    interface(event){
        const id = event.target.id;

        if(id=='addBtn'){
            this.insertData();
        }

        else if(id=='updateBtn'){
            this.updateData();
        }

        else if(id=='deleteBtn'){
            this.deleteData();
        }

        else if(id=='selectBtn'){
            this.selectData();
        }
    }

    getAllInputs(){
        return {
            username: this.state.username,
            password: this.state.password,
            passConf: this.state.passConf,
            walletAdd: this.state.walletAdd
        }
    }

    insertData(){
        const dbref = ref(this.state.db);
        const username = this.getAllInputs().username;
        const db = this.state.db;
        const data = this.getAllInputs();
        const link = new Link('https://link.x.immutable.com',null,'v3')

        get(child(dbref, 'Users/' +username)).then(async (snapshot) =>{


            try{
                const {address, starkPublicKey } = await link.setup({});
                localStorage.setItem('WALLET_ADDRESS', address);
                localStorage.setItem('STARK_PUBLIC_KEY', starkPublicKey);

                if (snapshot.exists()){
                    alert("User Exists!")
                }
    
                else{
                    alert("No User Found!");
    
                    if (data.password.valueOf() == data.passConf.valueOf())
                    {   
                        set(ref(db, 'Users/' +data.username),
                        {
                            password: data.password,
                            walletAdd: localStorage.getItem('WALLET_ADDRESS')
                        })
                        .then(() =>{alert('User was created Successfully!\nYou can now login to the game.')})
                        .catch((error)=>{alert('there was an error, details: ' +error)});
                    }
                    else{
                        alert("Passwords Do Not Match!");
                    }
                    }
            }catch(error){
                console.error(error)
                alert(error);
            }
        })
        .catch((error)=>{alert('there was an error, details: ' +error)});
    }

    updateData(){
        const db = this.state.db;
        const data = this.getAllInputs();


        if (data.password.valueOf() == data.passConf.valueOf())
        {
            set(ref(db, 'Users/' +data.username),
            {
                password: data.password
            })
            .then(() =>{alert('data was updated successfully')})
            .catch((error)=>{alert('there was an error, details: ' +error)});
        }  
        else{
            alert("Passwords Do Not Match!");
        }                     
    }

    deleteData(){
        const db = this.state.db;
        const data = this.getAllInputs();

        remove(ref(db, 'Users/' +data.username))
        .then(() =>{alert('data was deleted successfully')})
        .catch((error)=>{alert('there was an error, details: ' +error)});
    }

    selectData(){
        const dbref = ref(this.state.db);
        const username = this.getAllInputs().username;

        get(child(dbref, 'Users/' +username)).then((snapshot) =>{
            if (snapshot.exists()){
                this.setState({
                    password: snapshot.val().password
                })
            }

            else{
                alert("no data found!");

                return false;
            }
        })
        .catch((error)=>{alert('there was an error, details: ' +error)});

        return true;
    }

    checkData(){
        const dbref = ref(this.state.db);
        const username = this.getAllInputs().username;

        get(child(dbref, 'Users/' +username)).then((snapshot) =>{
            if (snapshot.exists()){
                alert("User Exists!")
                return true;
            }

            else{
                alert("No User Found!");

                return false;
            }
        })
        .catch((error)=>{alert('there was an error, details: ' +error)});
    }
}