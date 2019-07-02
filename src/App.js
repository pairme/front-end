import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import socket from "./socket";

import ChatContainer from "./components/ChatContainer";
import EmailInput from "./components/EmailInput";


const StyledApp = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  box-sizing: border-box;
  h1 {
    width: 60%;
    font-size: 4rem;
    margin-bottom: 0;
  }
`;

const url = 'https://herokucarlo.herokuapp.com/getuserinfo'

const App = () => {

  const [userEmail, setUserEmail] = useState('')
  const [userData, setUserData] = useState({})
  const [emailRecieved, setEmailRecieved] = useState(false)
  const [messages, setMessages] = useState([])

  socket.on("message", msg => setMessages([...messages, msg]))

  const submitMessage = (e, message) => {
    e.preventDefault();
    const newMessage = { message, id: Math.floor(Math.random() * 1000) + 1 };
    socket.emit("message", newMessage);
  };
  const zoomEmailReq = () => {
    axios.post(url, userEmail)
      .then((res) => {
        // handle success
        console.log(res.data);
        // setUserData({...res.data})
        // setEmailRecieved(true)
        // console.log(userData)
      })
      .catch((err) => {
        // handle error
        console.log(err);
      })
  }
  return (
    <StyledApp className="App">
      <h1>PairMe</h1>
      {!emailRecieved ? (
        <EmailInput
          email={userEmail}
          setEmail={setUserEmail}
          zoomEmailReq={zoomEmailReq}
        />)
        : (
          <ChatContainer submitMessage={submitMessage} email={userEmail} messages={messages} />)}
    </StyledApp>
  );
};

export default App;
