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
  }
  button {
    width: 30%;
  }
`

const ChatInput = ({ msg, submitMessage }) => {
  const [message, setMessage] = useState('')
  return (
    <StyledInput onSubmit={(e) => {
      submitMessage(e, message)
      setMessage('')
    }}>
      <input
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Type your message..."
        value={message} />
      <button type="submit">Send</button>
    </StyledInput>
  )
}

export default ChatInput
