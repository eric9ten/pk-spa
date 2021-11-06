import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeAmount } from './inputCounterSlice'

import s from './input-counter.module.scss'

export default function InputCounter(props) {
	const inputSide = props.inputSide === 'right' ? s.inputRight : s.inputLeft
	const eleName = props.inputName
    const counter = useSelector((state) => state.inputCounter)
    const dispatch = useDispatch()
    
    let tempCount = 0

    function incrementCount(e) {
        tempCount = counter.entities[eleName] + 1;
        
        dispatch(changeAmount(eleName, tempCount))
    }

    function decrementCount(e) {
        tempCount = counter.entities[eleName] > 0 ? counter.entities[eleName] - 1 : 0
        
        dispatch(changeAmount(eleName, tempCount))

    }

    function handleChange (e) {
        const fieldValue = e.target.value
        
        dispatch(changeAmount(eleName, fieldValue))
    }

    return (
        <div className={ `${s.inputCounter} ${inputSide}` }>
            <input type="button" value="-" className={` ${s.counterButton} ${s.buttonMinus} `} aria-label="Decrement value"
                onClick={decrementCount} />
            <input type="button" value="+" className={`${s.counterButton} ${s.buttonPlus}`} aria-label="Increment value"
                 onClick={incrementCount} />
            <input type="number" step="1" max={props.maxInc} value={counter.entities[eleName]} name={eleName} size={props.size} 
                className={s.input} onChange={handleChange} />
        </div>
    )
}