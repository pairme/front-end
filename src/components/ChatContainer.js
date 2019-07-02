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
  li {
    width: 100%;
    list-style-type: none;
    font-size: 1rem;
  }
  .users {
    width: 100%;
  }
`;

const ChatContainer = ({ messages, submitMessage, userName, totalUsers, makePair, socket }) => {

  useEffect(() => {
    socket.emit('add connection', true)
    console.log('chat container rerendered!!!')
  }, [])

  return (
    <>

      <StyledChat>
        <div className="users">{totalUsers} Currently Connected</div>
        <li>Welcome to PairMe {userName ? `${userName}!` : "user!"}</li>
        {messages.map(msg => (
          <Message msg={msg} userName={userName} key={msg.id} />
        ))}
      </StyledChat>
      <ChatInput submitMessage={submitMessage} makePair={makePair} />
    </>
  );
};

export default ChatContainer;
