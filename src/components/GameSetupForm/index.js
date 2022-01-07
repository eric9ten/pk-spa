import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import DateTextbox from '../DateTextbox'
import InputTextbox from '../InputTextbox'
import HomeCheckbox from '../HomeCheckbox'
import history from '../../history'

import { changeHalf } from './gameSetupSlice'

import s from './game-setup.module.scss'

function GameSetupForm(props) {  
  const half = useSelector((state) => state.gameSetupForm)
  const dispatch = useDispatch()
  const [submitting, setSubmitting] = useState(false);
  
  let isValid = true

  function handleChange(event) {
    const isCheckbox = event.target.type === 'checkbox';
    const name = event.target.name

    const value = isCheckbox ? event.target.checked : event.target.value

    props.onChangeData(name, value)

  }

  function handleSubmit (event) {
    event.preventDefault();
    setSubmitting(true);

    dispatch(changeHalf(1))

    if(isValid) {
      history.push({
        pathname: '/goal-setup',
      })
    } else {
      //props.onError(errMsg)    
    }
    setSubmitting(false);
  }

  function checkIsValid () {
    let errMsg = ''
    console.log("is Valid is: " + isValid)

    if (props.gameDate === '') {
      errMsg = "The game date cannot be blank."
      
    } else if (props.yourName === '') {
      errMsg = "Your Team Name cannot be blank."
      
    } else if (props.yourAbbrev === '') {
      errMsg = "Your Team Abbrev cannot be blank."
      
    } else if (props.oppName === '') {
      errMsg = "The Opponent Team Name cannot be blank."
      
    } else if (props.oppAbbrev ==='') {
      errMsg = "The Opponent Abbrev cannot be blank."
      
    } else {
      isValid = true
    }

    return errMsg

  }

  return (
    <div className={s.gameSetupFormContainer}>
      <form className={s.gameSetupForm} onSubmit={handleSubmit} disabled={submitting}>
        <div className={s.inputWrapper}>        
          <DateTextbox />
        </div>
        <div className={s.teamWrapper}>
          <div className={s.teamName}>
            <p>Your Team:</p>
          </div>
          <div className={s.inputWrapper}>
            <InputTextbox inputName="yourName" label="Name"  maxLen="25" style="teamName"/>
          </div>
          <div className={s.inputWrapper}>
            <InputTextbox inputName="yourAbbrev" label="Abbrev" maxLen="4" style="teamAbbrev"/>
          </div>
          <div className={s.inputWrapper}>
            <HomeCheckbox />
          </div>
        </div>
        <div className={s.teamWrapper}>
          <div className={s.teamName}>
            <p>Opponent:</p>
          </div>
          <div className={s.inputWrapper}>
            <InputTextbox inputName="oppName" label="Name"  maxLen="25" style="teamName"/>
          </div>
          <div className={s.inputWrapper}>
            <InputTextbox inputName="oppAbbrev" label="Abbrev"  maxLen="4" style="teamAbbrev"/>
          </div>
        </div>
          <div className={s.inputWrapper}>  
            <input type="submit" value="Next" disabled={submitting} onClick={handleSubmit} className="button-green" />
          </div>
          <p className={props.error ? "error active" : "error"}>
            {props.error}
          </p>
      </form>
    </div>
  );
}


export default GameSetupForm;
