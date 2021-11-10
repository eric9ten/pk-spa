import React from 'react'
import { Link } from 'react-router-dom'

import s from './game-navigation.module.scss'

export default function GameNavigation(props) {

    return (
        <nav className={s.gameNavigation}>
            <ul className={s.trackingNavigation}> 
                { props.backText &&
                    <li classNames={`${s.trackingLink} ${s.trackingLink_next}`}>
                        <Link to={props.backLink}>Back <span>(to {props.backText})</span></Link>
                    </li>
                }
                { props.linkText &&
                    <li className={`${s.trackingLink} ${s.trackingLink_next}`}>
                        <Link to={props.link}>Next <span>(to {props.linkText})</span></Link>
                    </li>
                }
            </ul>
        </nav>
    )
}
