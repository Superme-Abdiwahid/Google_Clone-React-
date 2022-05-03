import './App.css';
import React, { Component, useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/database';
import { Jumbotron } from "react-bootstrap";
import ServerSideBase from './ServerSideBase';
import Footer from "./footer";
import requestEntries from './RunFromBackEnd';
import keysOfMap from './RunFromBackEnd';
import fireBaseUpdate from './RunFromBackEnd';
import itemsReceived from './RunFromBackEnd';



export class Faq extends Component {
  render() {
    return (<FAQ>  </FAQ>);
  }
}


export function FAQ(props) {
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
  if (!user) {
    return (
      <div className="container">
        <h1>Sign Up To View Page</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  else {
    return (
      <Jumbotron>
      <div>
        <h1 user={user}>
          <button className="btn btn-dark" onClick={handleSignOut}>
            Log Out {user.displayName}
          </button>
        </h1>
        <section>
          <div className="section-header">
            <h2 className="faq-heading">Sign Up</h2>
            <div className="faq">
              <div className="all-questions"></div>
              <div className="beliefs hidden"></div>
              <div className="rules hidden"></div>
              <div className="other hidden"></div>
              <div class="section-header questions ">
                <div class="user-questions">
                  <ServerSideBase currentUser={user} key={KeyboardEvent} click={requestEntries}
                    keys={keysOfMap} onchange={fireBaseUpdate} />{itemsReceived}
                </div>
              </div>
            </div>
          </div>
          < Footer />
        </section>
      </div>
   </Jumbotron>
    );
  }
}
export default Faq;