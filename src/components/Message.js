import React from 'react'
import styled from 'styled-components'

const StyledMessage = styled.li`
  width: 100%;
  list-style-type: none;
  font-size: 1rem;
  span {
    color: blue;
    font-weight: bold;
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

const Message = ({ msg }) => {
  const { message, name } = msg
  const getColor = () => {
    const colors = ["grey", "grey-neutral", "grey-dark", "navy", "lime", "coral"]
    return colors[Math.floor(Math.random() * colors.length)];
  }
  return (
    <>
      {name ?
        <StyledMessage>
          <span className={getColor()}>{name}: </span>
          {message}
        </StyledMessage>
        :
        <StyledAdminMessage>{message}</StyledAdminMessage>
      }

    </>
  )
}

export default Message
