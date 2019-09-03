import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/Header'
import Feed from './pages/Feed'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Create from './pages/Create'

import './App.css'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const Main = withRouter(({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => unlisten()
  })

  return <Container>{children}</Container>
})

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={Create} />
        </Switch>
      </Main>
    </Router>
  )
}

export default App
