import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import GameSetup from './pages/GameSetup/game-setup'
import GoalSetup from './pages/GoalSetup/goal-setup'
import StatTrackingPage from './pages/StatTracker/stat-tracker'
import './sass/main.global.scss'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/game-setup" component={GameSetup} />
      <Route path="/goal-setup" component={GoalSetup} />
      <Route path="/game" component={StatTrackingPage} />
    </Switch>
  )
}