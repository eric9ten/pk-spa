import React from 'react'
import Page from '../../components/Page'
import StatTrackForm from '../../components/StatTrackingForm'

import s from './stat-tracker.module.scss'

export default function GoalSetup() {

  return (
    <div className={s.goalSetup}>
      <div>
        <Page title={"Game Tracker"} link={"/game"} linkText={"Game"} content={StatTrackForm}/>
      </div>
    </div>
  )
}