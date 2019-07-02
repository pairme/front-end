import React from 'react'
import styled from 'styled-components'

const StyledEmailInput = styled.form`
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

const EmailInput = ({ email, setEmail, zoomEmailReq }) => (
  <StyledEmailInput onSubmit={zoomEmailReq}>
    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email to Join the Queue!" />
    <p className="button" onClick={zoomEmailReq}>Enter Queue!</p>
  </StyledEmailInput>)

export default EmailInput