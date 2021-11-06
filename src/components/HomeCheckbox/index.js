import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isHomeToggled } from './homeCheckboxSlice'

import s from './home-checkbox.module.scss'

export default function HomeCheckbox(props) {
  //const inputValue = useSelector((state) => state.inputTextbox.value)
  const isHome = useSelector((state) => (state, 'isHome'))
  const dispatch = useDispatch()

  
  function handleChange (e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    dispatch(isHomeToggled(value))
}

  return (
    <div className={s.homeCheckbox}>
      <div className={s.toggleLabel}><p>Visitor</p></div>
      <input type="checkbox" name="isHome" id="toggle" className={s.offscreen} checked={isHome.checked} onChange={handleChange} />
      <label htmlFor="toggle" className={s.switch}></label>
      <div className={s.toggleLabel}><p>Home</p></div>
    </div>
  )
}