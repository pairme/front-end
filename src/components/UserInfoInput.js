import React from 'react'
import styled from 'styled-components'

const StyledUserInfoInput = styled.form`
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  height: auto;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  label{
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
    text-align:center;
    font-size: 2rem;
    background-color: #37346e;
    color: white;
    padding-bottom: 10px;
    margin-bottom: 80px;
    &:focus { 
      outline:none;
    }
  }
  .button {
    width: 50%;
    margin: 30px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 2rem;
    color: #b6eb1a;
    background-color: #37346e;
    box-sizing: border-box;
    cursor: pointer;
  }
`

const UserInfoInput = ({ userName, setUserName, userMeetingUrl, setUserMeetingUrl, setLoggedIn }) => (
  <StyledUserInfoInput onSubmit={() => setLoggedIn(true)}>
    <label>Choose A NickName</label>
    <input onChange={(e) => setUserName(e.target.value)} value={userName} autoFocus />
    <label>Meeting URL?</label>
    <input onChange={(e) => setUserMeetingUrl(e.target.value)} value={userMeetingUrl} />
    <p className="button" onClick={() => setLoggedIn(true)}>Enter Queue!</p>
  </StyledUserInfoInput>)

export default UserInfoInput