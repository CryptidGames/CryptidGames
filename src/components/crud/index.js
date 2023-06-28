import React from 'react';
import { ref, set, get, update, remove, child } from "firebase/database";
import StartFirebase from '../Firebase/Index';
import { Button } from '../Button';
import {Link, ImmutableXClient, ERC721TokenType, ETHTokenType} from '@imtbl/imx-sdk';
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
        HCNFTS: '',
        ID: '',
        nfts: '',
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

                <Button id="addBtn" buttonStyle='btn--outline2' onClick={this.interface}>Create Account</Button>
                {<Button id="updateBtn" buttonStyle='btn--outline2' onClick={this.interface}>Update User Info</Button>/*
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
            walletAdd: this.state.walletAdd,
            HCNFTS: this.state.HCNFTS,
            ID: this.state.ID,
            nfts: this.state.nfts,
        }
    }

    async insertData(){
        const dbref = ref(this.state.db);
        const db = this.state.db;
        const data = this.getAllInputs();
        const link = new Link('https://link.x.immutable.com',null,'v3');
        const apiAddress = 'https://api.x.immutable.com/v1';


        try{
            const {address, starkPublicKey } = await link.setup({});
            const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });
            localStorage.setItem('WALLET_ADDRESS', address);
            localStorage.setItem('STARK_PUBLIC_KEY', starkPublicKey);
            if (data.password.valueOf() == data.passConf.valueOf())
            {   
                get(child(dbref, 'Users/' +localStorage.getItem('WALLET_ADDRESS'))).then(async (snapshot) =>{
                        // Add to look for NFT being registered already
                        if (snapshot.exists()){
                            alert("Wallet Already Registered!")
                        }
            
                        else{
                            let assetCursor
                            let assets = []
                            do {
                            let assetRequest = await client.getAssets({
                                user: localStorage.getItem('WALLET_ADDRESS'),
                                cursor: assetCursor,
                                status: 'imx',
                            })
                            assets = assets.concat(assetRequest.result)
                            assetCursor = assetRequest.cursor
                            } while (assetCursor)

                            var owned = false;
                            for (let asset of assets) {
                                // fix this if statement. We need to look and see if they have an HC: UAP NFT,
                                // then we need to check if that NFT has been redeemed before. 
                                // If it has, then we need to revoke the NFT from the old wallet's
                                if (asset.collection.name == "Undead Blocks Exclusives Vault (UBEXCLUSIVESVAULT)") {
                                    data.HCNFTS = data.HCNFTS + "$$" + asset.name;
                                    data.nfts = data.nfts + "$$" + asset.id;
                                    get(child(dbref, 'Redeemed'+asset.id)).then(async (snapshot) =>{
                                        // Add to look for NFT being registered already  
                                                set(ref(db, 'Redeemed/' +asset.id),
                                                {
                                                    walletAdd: localStorage.getItem('WALLET_ADDRESS'),
                                                })
                                                    
                                                .then(() =>{

                                                })
                                                .catch((error)=>{alert('there was an error, details: ' +error)})
                                                
                                        })
                                        .catch((error)=>{alert('there was an error, details: ' +error)});
                                    owned = true;
                                }
                            }
                            if (owned)
                            { 
                                get(child(dbref, 'Users')).then(async (snapshot) =>{
                                    // Add to look for NFT being registered already
                                        set(ref(db, 'Users/' +localStorage.getItem('WALLET_ADDRESS')),
                                        {
                                            username: data.username,
                                            password: data.password,
                                            HCNFTS: data.HCNFTS,
                                            nfts: data.nfts,
                                        })
                                        .then(() =>{
                                            alert('User was created Successfully!\nYou can now login to the game.')
                                        })
                                        .catch((error)=>{alert('there was an error, details: ' +error)});
                                    
                                        }    
                                    )
                                    .catch((error)=>{alert('there was an error, details: ' +error)});
                                }
                    }
                            
                })
                .catch((error)=>{alert('there was an error, details: ' +error)});
                }
                else{
                    alert("Passwords Don't Match!");
                }
            }catch(error){
                console.error(error)
                alert(error);
            }
    }

    async updateData(){  
        const dbref = ref(this.state.db);
        const db = this.state.db;
        const data = this.getAllInputs();
        const link = new Link('https://link.x.immutable.com',null,'v3');
        const apiAddress = 'https://api.x.immutable.com/v1';


        try{
            const {address, starkPublicKey } = await link.setup({});
            const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });
            localStorage.setItem('WALLET_ADDRESS', address);
            localStorage.setItem('STARK_PUBLIC_KEY', starkPublicKey);
            if (data.password.valueOf() == data.passConf.valueOf())
            {
            get(child(dbref, 'Users/' +localStorage.getItem('WALLET_ADDRESS'))).then(async (snapshot) =>{
                    // Add to look for NFT being registered already
                        let assetCursor
                        let assets = []
                        do {
                        let assetRequest = await client.getAssets({
                            user: localStorage.getItem('WALLET_ADDRESS'),
                            cursor: assetCursor,
                            status: 'imx',
                        })
                        assets = assets.concat(assetRequest.result)
                        assetCursor = assetRequest.cursor
                        } while (assetCursor)

                        var owned = false;
                        for (let asset of assets) {
                            // fix this if statement. We need to look and see if they have an HC: UAP NFT,
                            // then we need to check if that NFT has been redeemed before. 
                            // If it has, then we need to revoke the NFT from the old wallet's
                            if (asset.collection.name == "Undead Blocks Exclusives Vault (UBEXCLUSIVESVAULT)") {
                                data.nfts = data.nfts + "$$" + asset.name;
                                get(child(dbref, 'Redeemed'+asset.id)).then(async (snapshot) =>{
                                    // Add to look for NFT being registered already  
                                            set(ref(db, 'Redeemed/' +asset.id),
                                            {
                                                walletAdd: localStorage.getItem('WALLET_ADDRESS'),
                                            })
                                                
                                            .then(() =>{

                                            })
                                            .catch((error)=>{alert('there was an error, details: ' +error)})
                                            
                                    })
                                    .catch((error)=>{alert('there was an error, details: ' +error)});
                                owned = true;
                            }
                        }
                        if (owned)
                        { 
                            get(child(dbref, 'Users')).then(async (snapshot) =>{
                                // Add to look for NFT being registered already
                                   
                                    set(ref(db, 'Users/' +localStorage.getItem('WALLET_ADDRESS')),
                                    {
                                        username: data.username,
                                        password: data.password,
                                        HCNFTS: data.nfts,
                                    })
                                    .then(() =>{
                                        alert('User was created Successfully!\nYou can now login to the game.')
                                    })
                                    .catch((error)=>{alert('there was an error, details: ' +error)});
                                
                                    } 
                                )
                                .catch((error)=>{alert('there was an error, details: ' +error)});
                            }
                        
            })
            .catch((error)=>{alert('there was an error, details: ' +error)});
        }
        else{
            alert("Passwords Don't Match!")
        }   

        }catch(error){
            console.error(error)
            alert(error);
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