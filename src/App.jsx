import React, { useState } from "react";
import Chirp from "./components/Chirp";
// import Moment from 'react-moment';
import * as moment from 'moment';

const App = () => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [chirps, setChirps] = useState([
    { username: "Tristan", 
      content: "I don't want to go to school. I'm sleepy!", 
      timestamp:  moment().format("MMMM Do YYYY, h:mm:ss a") 
    },
    { username: "Garrett", 
      content: "What it do?", 
      timestamp: moment().format("MMMM Do YYYY, h:mm:ss a") 
    },
    { username: "Jake", 
      content: "I was on vacay and came back to help you finish this lab :-P", 
      timestamp: moment().format("MMMM Do YYYY, h:mm:ss a") 
    },
    { username: "Josh", 
      content: "It's 5 o'clock somewhere!", 
      timestamp: moment().format("MMMM Do YYYY, h:mm:ss a") 
    },

  ]);

  const handleUsernameChange = (username) => setUsername(username);
  const handleContentChange = (content) => setContent(content);
  const handleClick = () => {
    setChirps([...chirps, { 
        username: username, 
        content: content, timestamp: 
        moment().format("MMMM Do YYYY, h:mm:ss a") 
    }]);
  };
   
  //const time = Moment().format("MMMM Do YYYY, h:mm:ss a")

  return (
    <div>
    <div className="title">
      <h1> ~ Welcome to Chirper ~ </h1>
      </div>
      
      <div className="input"></div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => handleUsernameChange(e.target.value)}
      />
      <label htmlFor="content">Content:</label>
      <textarea
        name="content"
        id=""
        cols="30"
        rows="10"
        value={content}
        onChange={(e) => handleContentChange(e.target.value)}
      ></textarea>
        <div className='button'>
        <button type="submit" onClick={handleClick}>~ Post Chirp ~</button>  
        </div>
     
      {chirps.map((chirp) => {
        return <Chirp username={chirp.username} content={chirp.content} timestamp={chirp.timestamp}/>;
  

      })}
      

    </div>
  );
};

export default App;
