import React from 'react';
import logo from '../../assets/images/png/pitch-keeper-icon.png';

import s from './logo.module.scss';


function Logo(props) {
    return (
        <div className={s.logo}>
            <img src={logo} alt="Pitch Keeper logo" />
        </div>
    )
}

export default Logo;