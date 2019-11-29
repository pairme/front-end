import React from 'react'
import styled from 'styled-components'


const Message = ({ msg }) => {

  const { message, name } = msg

  return (
    <>
      {name ?
        <StyledMessage>
          <span className='user'>{name}: </span>
          {message}
        </StyledMessage>
        :
        <StyledAdminMessage>{message}</StyledAdminMessage>
      }

    </>
  )
}

export default Message

const StyledMessage = styled.li`
  width: 100%;
  list-style-type: none;
  font-size: 1rem;
  .user {
    font-weight: bold;
    color: blue;
    .grey{
      color: #9795b8;
    }
    .grey-neutral{
      color: #888888;
    }
    .grey-dark{
      color: #4b495c;
    }
    .navy{
      color: #37346e;
    }
    .lime{
      color: #b6eb1a;
    }
    .coral{
      color: #FD806A;
    }
  }
`

const StyledAdminMessage = styled.li`
  width: 100%;
  color: red;
  list-style-type: none;
  font-size: 1rem;
  text-align: center;
`