import React from 'react'
import styled from 'styled-components'

import Login from '../components/Login'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Login />
    </Container>
  )
}

export default LoginPage
