import React from 'react'
import Page from '../../components/Page'
import GameStatsTable from '../../components/GameStatsTable'

import s from './game-stats.module.scss'

export default function GoalSetup(props) {

  return (
    <div className={s.goalSetup}>
      <div>
        <Page title={props.half} content={GameStatsTable}/>
      </div>
    </div>
  )
}