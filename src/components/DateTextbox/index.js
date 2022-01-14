import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeDate, resetDate } from './dateTextboxSlice'

import s from './date-textbox.module.scss'

export default function DateTextbox(props) {
  const gameDate = useSelector((state) => state.dateTextbox)
  const eleName = "gameDate"
  const dispatch = useDispatch()

  if (localStorage.getItem(eleName) !== null) {
    dispatch(changeDate(eleName, localStorage.getItem(eleName)))

  } else {
    dispatch(resetDate())
  }

  function handleChange (e) {
    const inputValue = e.target.value

    dispatch(changeDate(eleName, inputValue))
    localStorage.setItem(eleName, inputValue)

  }

  return (
      <div>        
        <label>Date:
          <input type="date" name={eleName} value={gameDate.value} onChange={handleChange} />        
        </label>
      </div>
  )
}