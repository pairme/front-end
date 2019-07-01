import React from 'react'
import styled from 'styled-components'

const StyledEmailInput = styled.form`
  width: 60%;
  box-sizing: border-box;
  margin-top: 200px;
  display: flex;
  height: 40px;
  flex-flow: row;
  input {
    width: 70%;
  }
  button {
    width: 30%;
  }
`

const EmailInput = ({ email, setEmail, setEmailRecieved }) => (
  <StyledEmailInput onSubmit={() => setEmailRecieved(true)}>
    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email to Join the Queue!"/>
    <button type="submit">Enter Queue!</button>
  </StyledEmailInput>)

export default EmailInput