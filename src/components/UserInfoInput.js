import React, { useState } from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { colors } from '../extras/colors';

const UserInfoInput = ({
  userName,
  setUserName,
  userMeetingUrl,
  setUserMeetingUrl,
  setLoggedIn,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (!userName || !userMeetingUrl) {
      setLoggedIn(false);
      setError(true);
    } else {
      setLoggedIn(true);
    }
  }
  const [error, setError] = useState(false);
  return (
    <StyledUserInfoInput
      onSubmit={handleSubmit()}
    >
      <Fade top when={error}>
        <div className="error">Please fill in both fields</div>
      </Fade>

      <label>Nickname?</label>
      <input
        onChange={e => setUserName(e.target.value)}
        value={userName}
        autoFocus
        type="text"
      />
      <label>Meeting URL?</label>
      <input
        onChange={e => setUserMeetingUrl(e.target.value)}
        value={userMeetingUrl}
        type="text"
      />
      <input type="submit" className="button" value="" />
    </StyledUserInfoInput>
  );
};

export default UserInfoInput;

const StyledUserInfoInput = styled.form`
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  height: auto;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 100px;
  .error {
    background-color: red;
    width: 60%;
    height: 100px;
    background-color: lightpink;
    color: red;
    opacity: 0.5;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
  }
  label {
    width: 70%;
    text-align: center;
    font-size: 2rem;
    color: white;
    margin-bottom: 30px;
  }
  input {
    width: 70%;
    height: 60px;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    text-align: center;
    font-size: 2rem;
    background-color: ${colors.navy};
    color: white;
    padding-bottom: 10px;
    margin-bottom: 80px;
    &:focus {
      outline: none;
    }
  }
  .button {
    width: 50%;
    margin: 30px;
    height: 40px;
    display: flex;
    visibility: hidden;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 2rem;
    color: ${colors.lime};
    background-color: ${colors.navy};
    box-sizing: border-box;
    cursor: pointer;
  }
`;