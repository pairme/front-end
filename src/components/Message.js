import React from 'react';
import styled from 'styled-components';


const Message = ({ msg }) => {

  const { message, name } = msg;

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
  );
};

export default Message

const StyledMessage = styled.li`
  width: 100%;
  list-style-type: none;
  font-size: 1rem;
  .user {
    font-weight: bold;
    color: blue;
  }
`;

const StyledAdminMessage = styled.li`
  width: 100%;
  color: red;
  list-style-type: none;
  font-size: 1rem;
  text-align: center;
`;