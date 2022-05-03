import React, { useState, useEffect, Component } from "react";
import { render } from 'react-dom';
import { Jumbotron } from "react-bootstrap";
import firebase from "firebase/app";
import addPostToFireBase from './AbdiwahidBack';
let requestEntries;
let keysOfMap;
let fireBaseUpdate;
let itemsReceived;



export class SubmitTo extends React.Component{
    render(){
        return (
            <QuestionsSubmits> </QuestionsSubmits>
        )
    }
}


export default function FireBaseAll(props){
    const [updatePosts, updatePostsOvertime] = useState("");
    useEffect(() => {
      const UpdataDataBase = firebase.database().ref("Abdiwahid_Bishar_Answers");
      UpdataDataBase.on("value", (addEntries) => {
      
          const allEntriesInFireBase = addEntries.val();
          keysOfMap = Object.keys(allEntriesInFireBase);
          fireBaseUpdate = keysOfMap.map((dataToFetch) => {
            requestEntries = allEntriesInFireBase[dataToFetch];
            requestEntries.dataToFetch = dataToFetch;
            return requestEntries;
          });
        
        updatePostsOvertime(fireBaseUpdate);
      });
      return;
    }, []);
  

    const thePostsToShow = (eventListner) => {
      eventListner.preventDefault();
      const newQuestionAdded = {
        text: addPostToFireBase,
        time: firebase.database.ServerValue.TIMESTAMP,
        count: 0,
       
      };
      let targetLocationInFireBase = firebase.database().ref("Add_Questions");
      targetLocationInFireBase.push(newQuestionAdded);
      updatePostsOvertime("");
    };
  
    return <div className="container">{itemsReceived}</div>
}
  
  function QuestionsSubmits(props) {
    let questionsSubmiited = this.props.questionsSubmiited;
          return(
            
              <Jumbotron>
                <div className="user-questions question-card" key={KeyboardEvent}>
                  <div class="input-form styleFAQ">
                    <div className="handle userDisplay">
                      {questionsSubmiited.userName}
                    </div>
                    <div className="faq">{questionsSubmiited.text}</div>
                    <div>
            <label for="message-input">Question:</label>
                        <textarea id="message-input" name="message" required placeholder="Enter your message or question."
                            maxlength="1200" />
                            </div>
                  </div>
                  </div>
                  </Jumbotron>
          )
  }