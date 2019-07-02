import React from 'react'
import styled from 'styled-components'

const StyledUserInfoInput = styled.form`
  width: 60%;
  box-sizing: border-box;
  margin-top: 200px;
  display: flex;
  height: auto;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  label{
    width: 70%;
    text-align: center;
    font-size: 3rem;
  }
  input {
    width: 70%;
    height: 40px;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid black;
    text-align:center;
  }
  .button {
    width: 30%;
    margin: 30px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: white;
    box-sizing: border-box;
    cursor: pointer;
  }
`

const UserInfoInput = ({ userName, setUserName, userMeetingUrl, setUserMeetingUrl, setLoggedIn }) => (
  <StyledUserInfoInput onSubmit={() => setLoggedIn(true)}>
    <label>Choose A NickName</label>
    <input onChange={(e) => setUserName(e.target.value)} value={userName} autoFocus/>
    <label>Meeting URL?</label>
    <input onChange={(e) => setUserMeetingUrl(e.target.value)} value={userMeetingUrl} />
    <p className="button" onClick={() => setLoggedIn(true)}>Enter Queue!</p>
  </StyledUserInfoInput>)

export default UserInfoInput