import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeDate } from './dateTextboxSlice'

import s from './date-textbox.module.scss'

export default function DateTextbox(props) {
	const eleName = props.inputName
  const gameDate = useSelector((state) => state.dateTextbox.value)
  const dispatch = useDispatch()

  return (
      <div>        
        <label>Date:
          <input type="date" name="gameDate" value={gameDate} onChange={e => dispatch(changeDate(e.target.value))} />        
        </label>
      </div>
  )
}