import React from 'react'

import Page from './../../components/Page'
import Logo from './../../components/Logo'

import s from './home-page.module.scss'

export default function HomePage() {

  return (
    <div className={s.homePage}>
      <Page title={"Home Page"} link={"/game-setup"} linkText={"Game Setup"} content={Logo}/>
    </div>
  )
}