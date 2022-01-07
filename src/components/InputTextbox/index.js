import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeInput } from './inputTextboxSlice'

import s from './input-textbox.module.scss'

export default function InputTextbox(props) {
	const eleName = props.inputName
  const maxLen = props.maxLen
  const style = props.style === 'teamAbbrev' ? s.teamAbbrev : s.teamName

  const inputTextbox = useSelector((state) => state.inputTextbox)
  const dispatch = useDispatch()

  
  function handleChange (e) {
    const inputValue = e.target.value

    dispatch(changeInput(eleName, inputValue))
}

  return (
      <div className={s.inputTextbox}>        
        <label>{props.label}:
          <input id={eleName} className={style} type="text" name={eleName} value={inputTextbox.entities[eleName]} maxlength={maxLen} onChange={handleChange} />        
        </label>
      </div>
  )
}