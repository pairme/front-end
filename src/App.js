import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import socket from "./socket";

import ChatContainer from "./components/ChatContainer";
import UserInfoInput from "./components/UserInfoInput";

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
    const newMessage = { message, id: Math.floor(Math.random() * 1000) + 1 };
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
      <h1>PairMe</h1>
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
            totalUsers={totalUsers}
          />
        )}
    </StyledApp>
  );
};

export default App;
