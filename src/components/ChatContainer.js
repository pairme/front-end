import React, { useEffect } from "react";
import styled from "styled-components";

import logo from '../pairme-logo.png'
import Message from "./Message";
import ChatInput from "./ChatInput.js";

const StyledChat = styled.div`
  width: 100%;
  height: 92%;
  box-sizing: border-box;
  background-color: white;
  padding: 0 20px;
  li {
    width: 100%;
    list-style-type: none;
    font-size: 1rem;
  }
  .header {
    width: 100%;
    display: flex; 
    justify-content: center;
    padding-top: 10px;
  }
  p {
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const ChatContainer = ({ messages, submitMessage, userName, makePair, socket, buttonDisabled, totalUsers }) => {

  useEffect(() => {
    socket.emit('add connection', userName)
    console.log('chat container rerendered!!!')
  }, [socket, userName])

  return (
    <>
      <StyledChat>
        <div className="header">
          <img src={logo} alt="pairme logo"/>
        </div>
        <p>{totalUsers} Users Connected</p>
        {messages.map(msg => (
          <Message msg={msg} userName={userName} key={msg.id} />
        ))}
      </StyledChat>
      <ChatInput buttonDisabled={buttonDisabled} totalUsers={totalUsers} submitMessage={submitMessage} makePair={makePair} />
    </>
  );
};

export default ChatContainer;
