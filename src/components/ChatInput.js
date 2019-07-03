import React, { useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled.form`
  width: 100%;
  font-size: 1rem;
  width: 96%;
  height: 8%;
  box-sizing: border-box;
  display: flex; 
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  input {
    width: 87%;
    height: 60%;
    box-sizing: border-box;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 6%;
    height: 60%;
    background-color: #b6eb1a;
    border-left: 0px;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
`

const ChatInput = ({ submitMessage, makePair, buttonDisabled, totalUsers }) => {
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
      <button type="submit" >CHAT</button>
      {buttonDisabled || totalUsers < 2 ? <button type="button" disabled>PAIR</button> : <button type="button" onClick={makePair} >PAIR</button>}


    </StyledInput>
  )
}

export default ChatInput
