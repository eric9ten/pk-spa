import React from 'react'
import Page from './../../components/Page'
import GoalSetup from './../../components/GoalSetupForm'

import s from './goal-setup.module.scss'

export default function GameSetup() {

  return (
    <div className={s.goalSetup}>
      <div>
        <Page title={"Goal Setup"} link={"/game"} linkText={"Game"} content={GoalSetup}/>
      </div>
    </div>
  )
}