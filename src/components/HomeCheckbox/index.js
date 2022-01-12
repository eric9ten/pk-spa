import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isHomeToggled } from './homeCheckboxSlice'

import s from './home-checkbox.module.scss'

export default function HomeCheckbox(props) {
  const isHome = useSelector((state) => state.isHome)
  const eleName = "isHome"
  const dispatch = useDispatch()

  if (localStorage.getItem(eleName) !== '') {

    const storedValue = localStorage.getItem(eleName) === 'true' ? true : false
    dispatch(isHomeToggled(storedValue))

  }

  
  function handleChange (e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    dispatch(isHomeToggled(value))
    localStorage.setItem(eleName, value)
}

  return (
    <div className={s.homeCheckbox}>
      <div className={`${s.toggleLabel} ${s.toggleLabel_vis}`}><p>Visitor</p></div>
      <input type="checkbox" name={eleName} id="toggle" className={s.offscreen} checked={isHome.checked} onChange={handleChange} />
      <label htmlFor="toggle" className={s.switch}></label>
      <div className={`${s.toggleLabel} ${s.toggleLabel_home}`}><p>Home</p></div>
    </div>
  )
}