import logo from './logo.svg';
import './App.css';
import React from 'react'
import Headers from './Headers';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import './style.css'
import Overall from './Overall';
import Footers from './Footers'
export default class App extends React.Component{
  render(){
  return (
    <body>
    <div>
      <Headers />
      <Overall />
      
    </div>
     <Footers />
     </body>
  );
  }
}



