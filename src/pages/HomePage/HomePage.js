import React from 'react'

import Page from './../../components/Page'
import StatsHome from '../../components/StatsHome';

import s from './home-page.module.scss'

export default function HomePage() {

  return (
    <div className={s.homePage}>
      <Page content={StatsHome}/>
    </div>
  )
}