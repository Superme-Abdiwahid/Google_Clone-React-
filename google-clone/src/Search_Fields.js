import React from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
export default class Search_Fields extends React.Component{
    render(){
        return(
            

      <div className="Search_bar">
        <div className="Search_Text_Fields">
          <SearchIcon onClick={Search}/>
          <label for="Text">
          <input type="text" onChange={Target} id="Text"/>
          </label>
          <MicIcon />
        </div>
        <div className="Under_SearchBar">
          <button>Google Search</button>
          <button>I am having Fun</button>
        </div>
      </div>
        )
    }
}


const Target = (event) =>{
    let input = event.target.value;
    
    return input
}

const Search =  (value) =>{
    window.location.href =  'https://www.google.com/search?gs_ssp=eJzj4tTP1TewzEouK1ZgNGB0YPBir8wvLSlNSgUAUQAG7g&q=youtube&oq=y&aqs=chrome.1.69i60j46i39i199i291j69i57j46i131i199i433i465i512j69i60j69i61j69i60l2.1145j0j7&sourceid=chrome&ie=UTF-8'
}