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
  const messages = [{message:'hi', id:1}, {message:'hello, wanna pair program?', id:2}, {message:'fo sho', id:3}, {message:'lessgitit', id:4}, {message:'https://us04web.zoom.us/j/553930217', id:5}]
  return (
    <>
      <StyledChat>
        {messages.map(msg => <Message msg={msg} key={msg.id} />)}
      </StyledChat>
      <ChatInput />
    </>
  )
}

export default ChatContainer
