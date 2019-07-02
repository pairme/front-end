import React from 'react'
import styled from 'styled-components'

const StyledUserInfoInput = styled.form`
  width: 60%;
  box-sizing: border-box;
  margin-top: 200px;
  display: flex;
  height: 40px;
  flex-flow: row;
  align-items: center;
  input {
    width: 70%;
    height: 100%;
    box-sizing: border-box;
  }
  .button {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgray;
    background-color: whitesmoke;
    box-sizing: border-box;
    cursor: pointer;
  }
`

const UserInfoInput = ({ userName, setUserName, userMeetingUrl, setUserMeetingUrl, setLoggedIn }) => (
  <StyledUserInfoInput onSubmit={()=>setLoggedIn(true)}>
    <input onChange={(e) => setUserName(e.target.value)} value={userName} placeholder="Enter Your Nickname!" />
    <input onChange={(e) => setUserMeetingUrl(e.target.value)} value={userMeetingUrl} placeholder="Enter Meeting url" />
    <p className="button" onClick={()=>setLoggedIn(true)}>Enter Queue!</p>
  </StyledUserInfoInput>)

export default UserInfoInput