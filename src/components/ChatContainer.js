import React from 'react'
import styled from 'styled-components'

import Message from './Message'
import ChatInput from './ChatInput.js'

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
`;

const ChatContainer = ({ messages, submitMessage, email }) => {

  return (
    <>
      <StyledChat>
        <li>Welcome to PairMe {email ? `${email}!` : "user!"}</li>
        {messages.map(msg => <Message msg={msg} key={msg.id} />)}
      </StyledChat>
      <ChatInput submitMessage={submitMessage} />
    </>
  )
}

export default ChatContainer
