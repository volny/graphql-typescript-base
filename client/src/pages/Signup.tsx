import React from 'react'
import styled from 'styled-components'

import Signup from '../components/Signup'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Login: React.FC = () => {
  return (
    <Container>
      <Signup />
    </Container>
  )
}

export default Login
