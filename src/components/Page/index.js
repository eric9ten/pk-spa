import React from 'react'
import { Link } from 'react-router-dom'

import Title from './../PageTitle'

import '../../assets/sass/main.scss'
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
              <Title title={props.title} />
              <div className={s.body}>
                {body}
              </div>
            </div>
            <div className="trackingNavigation"> 
              { props.backText &&
                <div classNames="trackingLink trackingLink_prev">
                  <Link to={props.backLink}>Back <span>(to {props.backText})</span></Link>
                </div>
              }
              { props.linkText &&
                <div className={`${s.trackingLink} ${s.trackingLink_next}`}>
                  <Link to={props.link}>Next <span>(to {props.linkText})</span></Link>
                </div>
              }
            </div>
          </div>
        </div>
    );
}

