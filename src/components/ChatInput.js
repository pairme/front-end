import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.form`
  width: 100%;
  font-size: 1rem;
  width: 60%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  input {
    width: 70%;
    border: 1px solid black;
  }
  button {
    width: 15%;
    border: 1px solid black;
    border-left: 0px;
  }
`;
let timeout = null;

const ChatInput = ({ submitMessage, makePair, buttonDisabled, totalUsers }) => {
  const [message, setMessage] = useState("");
  const messageHandler = e => {
    submitMessage(e, message);
    setMessage("");
  };
  return (
    <StyledInput onSubmit={messageHandler}>
      <input
        onChange={e => setMessage(e.target.value)}
        placeholder="Type your message..."
        value={message}
        onKeyDown={e => console.log("keydown")}
        onKeyUp={e => {
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            console.log("he stopped typing");
          }, 500);
        }}
      />
      <button type="submit">Send</button>
      {buttonDisabled || totalUsers < 2 ? (
        <button type="button" disabled>
          Pair
        </button>
      ) : (
        <button type="button" onClick={makePair}>
          Pair
        </button>
      )}
    </StyledInput>
  );
};

export default ChatInput;
