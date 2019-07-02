import React from 'react'
import styled from 'styled-components'

const StyledMessage = styled.li`
  width: 100%;
  list-style-type: none;
  font-size: 1rem;
  .username {
    color: blue;
    font-weight: bold;
  }
`

const Message = ({ msg }) => {
  const { message, name } = msg
  return (
    <StyledMessage><span className="username">{name ? name : 'User'}:</span> {message}</StyledMessage>
  )
}

export default Message
