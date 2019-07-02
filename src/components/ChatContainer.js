import React, { useEffect } from "react";
import styled from "styled-components";

import Message from "./Message";
import ChatInput from "./ChatInput.js";

const StyledChat = styled.div`
  border: 1px solid black;
  border-bottom: 0px;
  width: 60%;
  height: 500px;
  margin-top: 30px;
  box-sizing: border-box;
  background-color: white;
  li {
    width: 100%;
    list-style-type: none;
    font-size: 1rem;
  }
  .users {
    width: 100%;
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
        <div className="users">{totalUsers} Currently Connected</div>
        <li>Welcome to PairMe {userName ? `${userName}!` : "user!"}</li>
        {messages.map(msg => (
          <Message msg={msg} userName={userName} key={msg.id} />
        ))}
      </StyledChat>
      <ChatInput buttonDisabled={buttonDisabled} totalUsers={totalUsers} submitMessage={submitMessage} makePair={makePair} />
    </>
  );
};

export default ChatContainer;