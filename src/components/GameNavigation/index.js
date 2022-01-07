import React from 'react'
import { Link } from 'react-router-dom'

import s from './game-navigation.module.scss'

export default function GameNavigation(props) {

    return (
        <nav className={s.gameNavigation}>
            <ul className={s.trackingNavigation}> 
                { props.backText &&
                    <li className={s.trackingNavigation_link}>
                        <Link to={props.backLink} className={s.trackingNavigation_link_prev}>Back <span>(to {props.backText})</span></Link>
                    </li>
                }
                { props.linkText &&
                    <li className={s.trackingNavigation_link}>
                        <Link to={props.link} className={s.trackingNavigation_link_next}>Next <span>(to {props.linkText})</span></Link>
                    </li>
                }
            </ul>
        </nav>
    )
}
