import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import AppsIcon from '@mui/icons-material/Apps'
import './style.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FirebaseAuth } from 'react-firebaseui';
import { FirebaseApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
export default class Headers extends React.Component{
    
  
    render(){
        
        return(
    <div class="Main">
      <div className="header_left">
        <div class="Left"> <a href="#" onClick={AboutGoogle}>About</a>
        <a href="#" onClick={GoogleStore}> Store</a>
        </div>
      </div>
      <div className="Right">
        <a href="#" onClick={Gmail} >Gmail</a>
        <a href="#" onClick={GoogleImages} >Images</a>
        <AppsIcon className="Apps" />
        <AccountCircleIcon className='Account_Circle' />
      </div>
    </div>
        )
    }
}

const AboutGoogle = (event) =>{
  window.location.href= "https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header";
}


const GoogleStore = (event) =>{
  window.location.href="https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US&pli=1";
}

const GoogleImages = (event) =>{
  window.location.href = 'https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl}';
}

const Gmail = (event) => {
  window.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox";
}
