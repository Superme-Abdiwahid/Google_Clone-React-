import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import {AppsIcon} from '@mui/icons-material/Apps'
import './style.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FirebaseAuth } from 'react-firebaseui';
import { FirebaseApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import {AccountCircleIcon} from '@mui/icons-material/AccountCircle'
import {StyledFirebaseAuth} from 'react-firebaseui/StyledFirebaseAuth';
import GroupsIcon from '@mui/icons-material/Groups';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactsIcon from '@mui/icons-material/Contacts';

export default class Footers extends React.Component{
    render(){
        return(
            <footer>
        
            <p>&copy; 2022 Abdiwahid Bishar Hajir</p>
            <address>

                <div className="Contact">
                <ContactsIcon />
                  Contact Abdiwahid at <a className="Space" href="mailto:abdiwahidhajir91@gmail.com">abdiwahidhajir91@gmail.com</a>
                </div>
                <a className="style-instagram" href="https://www.instagram.com/abdiwahid_hajir" aria-label="instagram"><i className="fa fa-instagram"></i></a>
                <div className="Calender">
                    <GroupsIcon className="Space"/>Schedule a meeting With Abdiwahid
                   
                </div>
                <div className="CashApp">
                    <AttachMoneyIcon />Donate Cash App To Abdiwahid
                    <i className="fas fa-dollar-sign"></i>
                </div>
            </address>
        </footer>
        )
    }
}
