import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
`

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  text-decoration: none;
`

const Header: React.FC = () => {
  return (
    <Container>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/signin">Signin</StyledNavLink>
    </Container>
  )
}

export default Header
