import React, { useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled.form`
  width: 100%;
  font-size: 1rem;
  width: 60%;
  height: 40px;
  box-sizing: border-box;
  display: flex; 
  flex-flow: row;
  input {
    width: 70%;
    border: 1px solid black;
    border-right: 0px;
  }
  button {
    width: 30%;
    border: 1px solid black;
  }
`

const ChatInput = ({submitMessage }) => {
  const [message, setMessage] = useState('')
  const messageHandler = (e) => {
    submitMessage(e, message)
    setMessage('')
  }
  return (
    <StyledInput onSubmit={messageHandler}>
      <input
        onChange={e => setMessage(e.target.value)}
        placeholder="Type your message..."
        value={message} />
      <button type="submit" >Send</button>
    </StyledInput>
  )
}

export default ChatInput
