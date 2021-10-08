import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom'
import history from '../../history'

import s from './game-setup.module.scss'

export default function GameStatsTable() { 
  const initialValues = {
    gameDate: '',
    yourName: '',
    yourAbbrev: '',
    oppName: '',
    oppAbbrev: '',

  }

  const [isHome, setIsHome] = React.useState( true );

  const [formValues, setFormValues] = useReducer (
    (curVals, newVals) => ({ ...curVals, ...newVals}), initialValues
  )
  const { gameDate, yourName, yourAbbrev, oppName, oppAbbrev } = formValues;
  const [submitting, setSubmitting] = useState(false);
  //const [isValid, checkIsValid] = useState(false);

  function handleChange(event) {
    const isCheckbox = event.target.type === 'checkbox';
    const { name, value } = event.target
    
    setFormValues({
      [name]: isCheckbox ? event.target.checked : value
     })

    //isValid = checkIsValid()

  }

  function handleSubmit (event) {
    
    event.preventDefault();
    setSubmitting(true);

    //if(isValid) {
      history.push({
        pathname: '/goal-setup',
        state: {gameData: formValues}
      })
    //}
    setSubmitting(false);
  }

  function checkIsValid () {

    //isValid = gameDate === '' ? false : true
    if (yourName === '') {
      console.log ("yourName is not valid")
      return
    }
    if (yourAbbrev === '') {
      console.log ("yourAbbrev is not valid")
      return
    }
    if (oppName === '') {
      console.log ("oppName is not valid")
      return
    }
    if (oppAbbrev ==='') {
      console.log ("oppAbbrev is not valid")
      return
    }

    //isValid = true

  }

  return (
    <div className={s.gameSetupFormContainer}>
      <form className={s.gameSetupForm} onSubmit={handleSubmit} disabled={submitting}>
        <div className={s.inputWrapper}>        
          <label>Date:
            <input type="date" name="gameDate" value={gameDate} onChange={handleChange} />        
          </label>
        </div>
        <div className={s.teamWrapper}>
          <div className={s.teamName}>
            <p>Your Team:</p>
          </div>
          <div className={s.inputWrapper}>        
            <label>Name:
              <input type="text" name="yourName" value={yourName} onChange={handleChange} />        
            </label>
          </div>
          <div className={s.inputWrapper}>        
            <label>Abbrev:
              <input type="text" name="yourAbbrev" value={yourAbbrev} onChange={handleChange} />        
            </label>
          </div>
          <div className={s.inputWrapper}>
            <div className={s.toggleLabel}><p>Visitor</p></div>
            <input type="checkbox" name="isHome" id="toggle" className={s.offscreen} onChange={handleChange} />
            <label htmlFor="toggle" className={s.switch}></label>
            <div className={s.toggleLabel}><p>Home</p></div>
          </div>
        </div>
        <div className={s.teamWrapper}>
          <div className={s.teamName}>
            <p>Opponent:</p>
          </div>
          <div className={s.inputWrapper}>        
            <label>Name:
              <input type="text" name="oppName" value={oppName} onChange={handleChange} />        
            </label>
          </div>
          <div className={s.inputWrapper}>        
            <label>Abbrev:
              <input type="text" name="oppAbbrev" value={oppAbbrev} onChange={handleChange} />   
            </label>
          </div>
        </div>
          <div className={s.inputWrapper}>  
            <input type="submit" value="Submit" disabled={submitting} />
          </div>
      </form>
    </div>
  );
}
