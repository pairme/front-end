import React from 'react'
import styled from 'styled-components'

const StyledMessage = styled.li`
  width: 100%;
  list-style-type: none;
  font-size: 1rem;
`

const Message = ({msg}) => {
  const {message} = msg
  return (
    <StyledMessage>{message}</StyledMessage>
  )
}

export default Message
