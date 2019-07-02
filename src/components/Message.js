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
const StyledAdminMessage = styled.li`
  width: 100%;
  color: red;
  list-style-type: none;
  font-size: 1rem;
  text-align: center;
`

const Message = ({ msg }) => {
  const { message, name } = msg
  return (
    <>
      {name ? 
        <StyledMessage>
          <span className="username">{name}:</span> 
          {message}
        </StyledMessage>
        :
        <StyledAdminMessage>{message}</StyledAdminMessage>
      }
      
    </>
  )
}

export default Message
