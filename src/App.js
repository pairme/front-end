import React from 'react';
import ChatContainer from './components/ChatContainer'
import styled from 'styled-components'

const StyledApp = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <StyledApp className="App">
      <ChatContainer />
    </StyledApp>
  );
}

export default App;
