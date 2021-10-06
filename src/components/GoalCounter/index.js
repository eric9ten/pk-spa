import React, { useState } from 'react'

import s from './goal-counter.module.scss'

export default function GoalCounter(props) {
    
	const inputSide = props.inputSide === 'right' ? s.inputRight : s.inputLeft
    const [count, setCount] = React.useState( 0 );

    function incrementCount(e) {
        setCount(count +1)
    }

    function decrementCount(e) {
        count > 0 ? setCount(count -1) : setCount(0)
    }

    return (
        <div className={ `${s.goalCounter} ${inputSide}` }>
            <div className={s.scoreBoard}>
                <h2 className={s.teamAbbrev}>{props.teamAbbrev}</h2>
                <input type="number" step="1" max={props.maxInc} value={count} name={props.inputName} size={props.size} className={s.input} />
            </div>
            <div className={s.buttons}>
                <input type="button" value="-" className={` ${s.counterButton} ${s.buttonMinus} `} onClick={decrementCount}/>
                <input type="button" value="+" className={`${s.counterButton} ${s.buttonPlus}`} onClick={incrementCount}/>
            </div>
        </div>
    )
}