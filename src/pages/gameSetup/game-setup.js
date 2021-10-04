import React from 'react'
import Page from '../../components/Page'
import GameSetupForm from '../../components/GameSetupForm'

import s from './game-setup.module.scss' 

export default function  GameSetup() {

  return (
    <div className={s.gameSetup}>
      <div>
        <Page title={"Game Setup"} link={"/goal-setup"} linkText={"Goal Setup"} content={GameSetupForm}/>
      </div>
    </div>
  )
}