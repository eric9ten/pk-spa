import React, { useReducer, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { connect } from 'react-redux'

import HomePage from './pages/HomePage/HomePage'
import GameSetup from './pages/GameSetup/game-setup'
import GoalSetup from './pages/GoalSetup/goal-setup'
import StatTrackingPage from './pages/StatTracker/stat-tracker'

import '../src/assets/sass/main.scss';

function App() {
  const initialValues = {
    gameDate: '', yourName: '', yourAbbrev: '', oppName: '', oppAbbrev: '', startGoal: '', isHome: false,
    teamAGoals: 0, teamAPasses: 0, teamAShots: 0, teamACorners: 0, teamAGoalKicks: 0, teamATackles: 0, teamAOffsides: 0, teamAFouls: 0, teamAYellowCards: 0, teamARedCards: 0,
    teamBGoals: 0, teamBPasses: 0, teamBShots: 0, teamBCorners: 0, teamBGoalKicks: 0, teamBTackles: 0, teamBOffsides: 0, teamBFouls: 0, teamBYellowCards: 0, teamBRedCards: 0,

  }
  const [gameData, setGameData] = useState(initialValues)
  /*const [gameData, setGameData] = useReducer (
    (curVals, newVals) => ({ ...curVals, ...newVals}), initialValues
  )*/

  const { gameDate, yourName, yourAbbrev, oppName, oppAbbrev,
    teamAGoals, teamAPasses, teamAShots, teamACorners, teamAGoalKicks, teamATackles, teamAOffsides, teamAFouls, teamAYellowCards, teamARedCards,
    teamBGoals, teamBPasses, teamBShots, teamBCorners, teamBGoalKicks, teamBTackles, teamBOffsides, teamBFouls, teamBYellowCards, teamBRedCards
  } = gameData;
  
    
  function updateGameData(name, value) {

    setGameData({[name]: value})
  }

  //const store = createStore(reducer);

  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/game-setup" component={ () => <GameSetup gameData={gameData} onDataChange={updateGameData} /> } />
        <Route path="/goal-setup" component={GoalSetup} />
        <Route path="/game" component={StatTrackingPage} />
      </Switch>
  )
}

const mapStatetoProps = (state) => {
  return {
    name: state.name,
  }
}


export default connect(mapStatetoProps)(App);