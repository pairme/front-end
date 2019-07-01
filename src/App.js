import React, { useEffect, useState } from 'react';
import ChatContainer from './components/ChatContainer'
import styled from 'styled-components'
import io from "socket.io-client";


const StyledApp = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  box-sizing: border-box;
  h1 {
    width: 60%;
    font-size: 4rem;
    margin-bottom: 0;
  }
`;

const App = () => {
  const [messages, setMessages] = useState([{ message: 'Welcome to PairMe', id: 1 }])

  useEffect(() => {
    let socket = io("http://localhost:5000");
    socket.on('connect', () => {
      console.log('socket connected')
      console.log(`socket id: ${socket.id}`)
      socket.on('message', (msg) => setMessages([...messages, msg]))
    })
  })
  const submitMessage = (e, message) => {
    e.preventDefault()
    const newMessage = { message, id: Math.floor(Math.random() * 1000) + 1 }
    // socket.emit('message', newMessage)
  }
  return (
    <StyledApp className="App">
      <h1>PairMe</h1>
      <ChatContainer submitMessage={submitMessage} messages={messages} />
    </StyledApp>
  );
}

export default App;
