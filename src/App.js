import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import socket from "./socket";
import { colors } from './extras/colors'
import ChatContainer from "./components/ChatContainer";
import UserInfoInput from "./components/UserInfoInput";
import { from } from "rxjs";



const serverURL = process.env.NODE_ENV === "production" ? `https://herokucarlo.herokuapp.com/` : `http://localhost:5000/`

const App = () => {
  const [userName, setUserName] = useState("");
  const [userMeetingUrl, setUserMeetingUrl] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [messages, setMessages] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [socketID, setSocketID] = useState('');

  socket.on("message", msg => setMessages([...messages, msg]));
  socket.on("socketid", socketid => setSocketID(socketid));
  socket.on("private message", msg => setMessages([...messages, msg]));
  socket.on("button disabled", () => setButtonDisabled(true));
  socket.on("connections count", connectionsCount =>
    setTotalUsers(connectionsCount)
  );
  const submitMessage = (e, message) => {
    e.preventDefault();
    const newMessage = { message, id: Math.floor(Math.random() * 1000) + 1, name: userName };
    socket.emit("message", newMessage);
  };
  const makePair = (e) => {
    e.preventDefault();
    const payload = { url: userMeetingUrl, socketid: socketID }
    axios
      .post(`${serverURL}makepair`, payload)
      .then(res => {
        console.log(res.status)
        setButtonDisabled(true)
      })
      .catch(err => console.log(err))
  };
  return (
    <StyledApp className="App">

      {!loggedIn ? (
        <UserInfoInput
          setUserName={setUserName}
          setUserMeetingUrl={setUserMeetingUrl}
          userName={userName}
          userMeetingUrl={userMeetingUrl}
          setLoggedIn={setLoggedIn}
        />
      ) : (
          <ChatContainer
            socket={socket}
            submitMessage={submitMessage}
            userName={userName}
            messages={messages}
            totalUsers={totalUsers}
            makePair={makePair}
            buttonDisabled={buttonDisabled}
          />
        )}
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  box-sizing: border-box;
  background-color: ${colors.navy};
  h1 {
    width: 60%;
    font-size: 4rem;
    margin-bottom: 0;
  }
`;