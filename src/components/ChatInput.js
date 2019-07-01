import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.div`
  width: 100%;
  font-size: 1rem;
  width: 50%;
  height: 40px;
  margin-top: 20px;
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

const ChatInput = ({ msg }) => {
  return (
    <StyledInput>
      <input type="text" placeholder="Type your message..." />
      <button>Send</button>
    </StyledInput>
  )
}

export default ChatInput
