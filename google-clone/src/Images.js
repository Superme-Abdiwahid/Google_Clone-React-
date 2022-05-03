import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Google from './img/GOOGLE.jpg'

export default class Images extends React.Component{
    render(){
        return(
            <img src={Google} alt="Google" />
        )
    }
}
