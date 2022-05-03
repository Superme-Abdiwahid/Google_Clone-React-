import React from 'react';
import './style.css'
import Search_Fields  from './Search_Fields';
import Google from './img/GOOGLE.jpg'
import Footers from './Footers';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
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
import Images from './Images'
export default class Overall extends React.Component{
    render(){
        return(
            <div class="All">
      <Images />
      <Search_Fields />
     
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