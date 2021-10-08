import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom'
import history from '../../history'

import s from './game-stats.module.scss'

export default function GameStatsTable() { 

  return (
    <div className={s.gameSetupFormContainer}>
      Game Stats
    </div>
  );
}
