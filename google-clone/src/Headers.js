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
        <div class="Left"> <a>About</a>
        <a>Store</a>
        </div>
      </div>
      <div className="Right">
        <a href="#" >Gmail</a>
        <a href="#">Images</a>
        <AppsIcon className="Apps" />
        <AccountCircleIcon className='Account_Circle' />
      </div>
    </div>
        )
    }
}



export function SignUP(props){
    const [user, setUser] = useState('');
        const uiConfig = {
          signInOptions: [{ provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
          firebase.auth.GoogleAuthProvider.PROVIDER_ID], credentialHelper: 'none', signInFlow: 'popup',
          callbacks: {
            signInSuccessWithAuthResult: () => false,
          },
      
        };
    useEffect(() => {
        const registerUser = firebase.auth().onAuthStateChanged((firebaseUser) => {
          if (firebaseUser) {
            setUser(firebaseUser);
          } else {
            setUser(null);
          }
    
        })
        return function unRemove() {
          registerUser();
        }
      })
      const handleSignOut = () => {
        firebase.auth().signOut();
    
      }
}

//an object of configuration values
const firebaseUIConfig = {
    signInOptions: [ 
      GoogleAuthProvider.PROVIDER_ID,
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup', 
    credentialHelper: 'none',
    callbacks: { 
      signInSuccessWithAuthResult: () => {
        return false; 
      }
    }
  }
  
  //the React compnent to render
  function MySignInScreen() {
  
    const auth = getAuth(); //access the "authenticator"
  
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
      </div>
    );
  }