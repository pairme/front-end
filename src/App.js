import React, {useEffect} from 'react';
import ChatContainer from './components/ChatContainer'
import styled from 'styled-components'
import io from "socket.io-client";


const StyledApp = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  h1 {
    width: 50%;
    font-size: 4rem;
    margin-bottom: 0;
  }
`;

function App() {
  useEffect(() => {
    console.log("socket connecting");
    /*
    init our socket
    socket will trigger socket.on("connection") on the backend!
    */
    const socket = io.connect("http://localhost:5000");
	
})
  return (
    <StyledApp className="App">
      <h1>PairMe</h1>
      <ChatContainer />
    </StyledApp>
  );
}

export default App;
