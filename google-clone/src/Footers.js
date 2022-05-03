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




export default class Footers extends React.Component{
    render(){
        return(
            <footer>
        
            <p>&copy; 2022 Abdiwahid Bishar Hajir</p>
            <address>

                <div class="Contact">
                
                Contact Abdiwahid at <a href="mailto:abdiwahidhajir91@gmail.com"> abdiwahidhajir91@gmail.com</a>
                </div>
                <a class="style-instagram" href="https://www.instagram.com/abdiwahid_hajir" aria-label="instagram"><i class="fa fa-instagram"></i></a>
                <div class="Calender">
                    <a class="calendar" href="https://calendly.com/abdiwahidhajir" aria-label="instagram">Schedule a meeting With Abdiwahid
                    <i class="fa fa-calendar" aria-hidden="true"></i></a>
                </div>
                <div class="CashApp">
                    <a target="_blank" class="dollar-sign" href="https://cash.app/$Abdiwahidhajir" aria-label="instagram">Donate Cash App To Abdiwahid
                    <i class="fas fa-dollar-sign"></i></a>
                </div>
            </address>
        </footer>
        )
    }
}