import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

const App = () => {

  
  const [userEmail, setUserEmail] = useState('')
  const [emailRecieved, setEmailRecieved] = useState(false)
  const [messages, setMessages] = useState([])
  useEffect(() => {
    console.log(socket.id);
    socket.on("message", msg => setMessages([...messages, msg]));
  }, [messages]);
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
        :
        <ChatContainer submitMessage={submitMessage} email={userEmail} messages={messages} />)}
    </StyledApp>
  );
};

export default App;
