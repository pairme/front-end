import React, { useEffect, useState } from "react";
import styled from "styled-components";
import io from "socket.io-client";

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

const App = () => {
<<<<<<< HEAD
  const [socket] = useState(io.connect("http://localhost:5000"));
  const [userEmail, setUserEmail] = useState("");
  const [emailRecieved, setEmailRecieved] = useState(false);
  const [messages, setMessages] = useState([
    { message: `Welcome to PairMe!`, id: 1 }
  ]);
  const [totalUsers, setTotalUsers] = useState(0);
  useEffect(() => {
    console.log(socket.id);
    socket.on("message", msg => setMessages([...messages, msg]));
  }, [messages, socket]);
=======

  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userMeetingUrl, setUserMeetingUrl] = useState('')
  const [emailRecieved, setEmailRecieved] = useState(true)
  const [messages, setMessages] = useState([])

  socket.on("message", msg => setMessages([...messages, msg]))
  socket.on("socketid", socketid => console.log(socketid, "socketid"));
  socket.on("connections count", connectionsCount =>
    console.log(connectionsCount)
  );
>>>>>>> cab1a610b8d4f11f421847b0f1764f31e9932227
  const submitMessage = (e, message) => {
    e.preventDefault();
    const newMessage = { message, id: Math.floor(Math.random() * 1000) + 1 };
    socket.emit("message", newMessage);
  };
  return (
    <StyledApp className="App">
      <h1>PairMe</h1>
      {!emailRecieved ? (
        <EmailInput
          email={userEmail}
          setEmail={setUserEmail}
          setEmailRecieved={setEmailRecieved}
        />
      ) : (
        <ChatContainer
          submitMessage={submitMessage}
          messages={messages}
          totalUsers={totalUsers}
        />
      )}
    </StyledApp>
  );
};

export default App;
