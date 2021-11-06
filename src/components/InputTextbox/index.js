import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeInput } from './inputTextboxSlice'

import s from './input-textbox.module.scss'

export default function InputTextbox(props) {
	const eleName = props.inputName
  //const inputValue = useSelector((state) => state.inputTextbox.value)
  const inputTextbox = useSelector((state) => (state, eleName))
  const dispatch = useDispatch()

  
  function handleChange (e) {
    const inputValue = e.target.value

    dispatch(changeInput(eleName, inputValue))
}

  return (
      <div>        
        <label>{props.label}:
          <input id={eleName} type="text" name={eleName} value={inputTextbox.inputValue} onChange={handleChange} />        
        </label>
      </div>
  )
}