import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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

const url = "https://herokucarlo.herokuapp.com/getuserinfo";

const App = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMeetingUrl, setUserMeetingUrl] = useState("");
  const [emailRecieved, setEmailRecieved] = useState(true);
  const [messages, setMessages] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  socket.on("message", msg => setMessages([...messages, msg]));
  socket.on("socketid", socketid => console.log(socketid, "socketid"));
  socket.on("connections count", connectionsCount =>
    setTotalUsers(connectionsCount)
  );
  const submitMessage = (e, message) => {
    e.preventDefault();
    const newMessage = { message, id: Math.floor(Math.random() * 1000) + 1 };
    socket.emit("message", newMessage);
  };
  const zoomEmailReq = () => {
    axios
      .post(url, { email: userEmail })
      .then(res => {
        // handle success
        setUserName(
          `${res.data.response.first_name} ${res.data.response.last_name}`
        );
        setUserMeetingUrl(`${res.data.response.personal_meeting_url}`);
        setEmailRecieved(true);
      })
      .catch(err => {
        // handle error
        console.log(err);
      });
  };
  return (
    <StyledApp className="App">
      <h1>PairMe</h1>
      {!emailRecieved ? (
        <EmailInput
          email={userEmail}
          setEmail={setUserEmail}
          zoomEmailReq={zoomEmailReq}
        />
      ) : (
        <ChatContainer
          submitMessage={submitMessage}
          userName={userName}
          messages={messages}
          totalUsers={totalUsers}
        />
      )}
    </StyledApp>
  );
};

export default App;
