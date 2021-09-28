import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/Home Page/HomePage'
import GameSetup from './pages/gameSetup/game-setup'
import GoalSetup from './pages/goalSetup/goal-setup'
import TrackingPage from './pages/TrackingPage'

import './sass/main.global.scss'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/game-setup" component={GameSetup} />
      <Route path="/goal-setup" component={GoalSetup} />
      <Route path="/game" component={TrackingPage} />
    </Switch>
  )
}