import React, { useEffect, useState } from "react";
import styled from "styled-components";

import logo from '../pairme-logo.png'
import Message from "./Message";
import ChatInput from "./ChatInput.js";


const ChatContainer = ({ messages, submitMessage, userName, makePair, socket, buttonDisabled, totalUsers }) => {
  const [typers, setTypers] = useState([])

  useEffect(() => {
    socket.emit('add connection', userName)
    console.log('add connection effect rerendered!!!')
  }, [socket, userName])
  useEffect(() => {
    socket.on('typing users', users => setTypers([...users]))
    console.log('typers', typers)
    console.log('typing effect rerendered!!!')
  }, [socket])
  return (
    <>
      <StyledChat>
        <div className="header">
          <img src={logo} alt="pairme logo" />
        </div>
        <p>{totalUsers} Users Connected</p>
        {messages.map(msg => (
          <Message msg={msg} userName={userName} key={msg.id} />
        ))}

      </StyledChat>
      <StyledTypers className="typers">
        Typing:{typers.map(typer => <p key={typer}>{typer}{' '}</p>)}
      </StyledTypers>
      <ChatInput
        buttonDisabled={buttonDisabled}
        userName={userName} 
        socket={socket} 
        totalUsers={totalUsers} 
        submitMessage={submitMessage} 
        makePair={makePair} 
      />
    </>
  );
};

export default ChatContainer;

const StyledChat = styled.div`
  width: 100%;
  height: 86%;
  box-sizing: border-box;
  background-color: white;
  padding: 0 20px;
  li {
    width: 100%;
    list-style-type: none;
    font-size: 1rem;
  }
  .header {
    width: 100%;
    display: flex; 
    justify-content: center;
    padding-top: 10px;
  }
  p {
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }
`;
const StyledTypers = styled.div`
  width: 100%;
  height: 4%;
  background-color: grey;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding:20px;
  font-size: .8rem;
  box-sizing: border-box;
`;