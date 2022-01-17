import React from 'react'
import Page from '../../components/Page'
import GoalSetupForm from '../../components/GoalSetupForm'

import s from './goal-setup.module.scss'

export default function GoalSetup() {

  return (
    <div className={s.goalSetup}>
      <div>
        <Page title={"Goal Setup"} backLink={"/game-setup"}backText={"Game Setup"} link={"/game-tracking"} linkText={"Track Game"} content={GoalSetupForm}/>
      </div>
    </div>
  )
}