import React from 'react'
import styled from 'styled-components'

import Message from './Message'
import ChatInput from './ChatInput.js'

const StyledChat = styled.div`
  border: 1px solid black;
  width: 60%;
  height: 500px;
  margin-top: 30px;
  box-sizing: border-box;
`;

const ChatContainer = ({messages, submitMessage}) => {

  return (
    <>
      <StyledChat>
        {messages.map(msg => <Message msg={msg} key={msg.id} />)}
      </StyledChat>
      <ChatInput submitMessage={submitMessage}/>
    </>
  )
}

export default ChatContainer
