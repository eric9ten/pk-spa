import React from 'react'
import { Link } from 'react-router-dom'

import Title from './../PageTitle'
import GameNavigation from './../GameNavigation'

import s from './page.module.scss'

export default function Page(props) {
    let GameComponent = "";
    var body;

    if ( typeof props.content != "undefined" ) {
      if (props.content) {
        GameComponent = props.content; 
        body =  <div className={s.body}>
                  <GameComponent gameData={props.gameData} onDataChange={props.onDataChange} />
                </div>
      } else {
        body = "";
      }
    } else {
      body = "";
    }

    return (
        <div className={s.page}>
          <div className={s.container}>
            <div className={s.wrapper}>
                { props.title && <Title title={props.title} /> }
              <div className={s.body}>
                {body}
              </div>
            </div>
            <GameNavigation 
              backLink={props.backLink}
              backText={props.backText}
              link={props.link}
              linkText={props.linkText}
            />
          </div>
        </div>
    );
}