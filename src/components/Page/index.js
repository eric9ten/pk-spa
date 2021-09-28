import React from 'react';
import { Link } from 'react-router-dom'

import Title from './../PageTitle'

import '../../sass/main.global.scss'
import s from './page.module.scss'

function Page(props) {

    let GameComponent = "";
    var body;

    if ( typeof props.content != "undefined" ) {
      if (props.content) {
        GameComponent = props.content; 
        body =  <div className={s.body}>
                  <GameComponent />
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
            <div class={s.linkWrapper}>
              <p className={s.link}>
                <Link to={props.link}>{props.linkText}</Link>
              </p>
            </div>
          </div>
        </div>
    );
}

export default Page;
