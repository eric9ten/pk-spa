import React, { useState } from 'react'

import s from './input-counter.module.scss'


export default function InputCounter(props) {
    
    const [count, setCount] = React.useState( 0 );

    function incrementCount(e) {
        setCount(count +1)
    }

    function decrementCount(e) {
        count > 0 ? setCount(count -1) : setCount(0)
    }

    return (
        <div className={s.inputCounter}>
            <input type="button" value="-" className={`${s.counterButton} ${s.buttonMinus}`} onClick={decrementCount}/>
            <input type="number" step="1" max={props.maxInc} value={count} name={props.inputName} size={props.size} className={s.input} />
            <input type="button" value="+" className={`${s.counterButton} ${s.buttonPlus}`} onClick={incrementCount}/>
        </div>
    )
}