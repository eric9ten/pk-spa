import React, { useReducer, useState } from 'react'
import { useEffect } from "react";
import { useLocation } from 'react-router'
import history from '../../history'

import s from './game-setup.module.scss'

export default function GoalSetupForm() { 
  
  const [gameInfo, setGameInfo] = useState([]);  
  
  const location = useLocation();

  useEffect(() => {
     setGameInfo(location.state.gameData)

  }, [location]);

  function goalClick (selGoal, e) {
    e.preventDefault();

    //setGameInfo(startGoal => selGoal)
    setGameInfo( {startGoal: selGoal});

    console.log("The starting goal is " + selGoal)
    console.log("The starting goal is " + gameInfo.startGoal)

    history.push({
      pathname: '/game-tracking',
      state: {
        gameData: gameInfo
      }
    })

  }

  return (
    <div className={s.goalSetupFormContainer}>
        <h2>Which goal is your team defending?</h2>
        <div className={s.goalSelection}>
          <button type="button" className={s.goal} onClick={(e) => goalClick('left', e)}>&larr;</button>
          <button type="button" className={s.goal} onClick={(e) => goalClick('right', e)}>&rarr;</button>
        </div>
    </div>
  );
}