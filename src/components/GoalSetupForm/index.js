import React, { useReducer, useState } from 'react'
import { useEffect } from "react";
import { ReactDOM } from 'react'
import { useLocation } from 'react-router'
import history from '../../history'

import s from './game-setup.module.scss'
import reactDom from 'react-dom'

export default function GoalSetupForm(props) { 
  const initialValues = {
    selGoal: ''
  }    
  
  const location = useLocation();
  let gameInfo = '';

  useEffect(() => {
     gameInfo = location.state.gameData
  }, [location]);

  function goalClick (selGoal, e) {
    e.preventDefault();

    history.push({
      pathname: '/game-tracking',
      state: {
        gameData: gameInfo,
        startGoal: selGoal
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