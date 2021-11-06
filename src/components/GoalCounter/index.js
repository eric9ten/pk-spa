import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCount } from './goalCounterSlice'

import s from './goal-counter.module.scss'

export default function GoalCounter(props) {
	const inputSide = props.inputSide === 'right' ? s.inputRight : s.inputLeft
	const eleName = props.inputName
    const goalInputCounter = useSelector((state) => state.goalCounter)
    const dispatch = useDispatch()
    
    let tempCount = 0

    function incrementCount(e) {
        tempCount = goalInputCounter.entities[eleName] + 1;
        
        dispatch(changeCount(eleName, tempCount))
    }

    function decrementCount(e) {
        tempCount = goalInputCounter.entities[eleName] > 0 ? goalInputCounter.entities[eleName] - 1 : 0
        
        dispatch(changeCount(eleName, tempCount))

    }

    function handleChange (e) {
        const fieldValue = e.target.value
        
        dispatch(changeCount(eleName, fieldValue))
    }

    return (
        <div className={ `${s.goalCounter} ${inputSide}` }>
            <div className={s.scoreBoard}>
                <h2 className={s.teamAbbrev}>{props.teamAbbrev}</h2>
                <input id={eleName} type="number" step="1" max={props.maxInc} value={goalInputCounter.entities[eleName]} name={props.inputName} size={props.size} className={s.input} 
                    onChange={handleChange} />
            </div>
            <div className={s.buttons}>
                <input type="button" value="-" aria-label="Increment value" className={` ${s.counterButton} ${s.buttonMinus} `} onClick={decrementCount}/>
                <input type="button" value="+" aria-label="Decrement value" className={`${s.counterButton} ${s.buttonPlus}`} onClick={incrementCount}/>
            </div>
        </div>
    )
}