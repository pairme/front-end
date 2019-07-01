import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  list-style-type: none;
  font-size: 1rem;
  width: 50%;
  height: 40px;
  margin-top: 20px;
`

const ChatInput = ({msg}) => {
  return (
    <StyledInput>{msg}</StyledInput>
  )
}

export default ChatInput
