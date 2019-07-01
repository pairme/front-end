import React from 'react'
import styled from 'styled-components'

import Message from './Message'
import ChatInput from './ChatInput.js'

const StyledChat = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 500px;
  margin-top: 30px;
`;

const ChatContainer = () => {
  const messages = ['hi', 'hello', 'lets pair program', 'sounds good', 'https://us04web.zoom.us/j/553930217']
  return (
    <StyledChat>
      {messages.map(msg=><Message msg={msg}/>)}
      <ChatInput/>
    </StyledChat>
  )
}

export default ChatContainer
