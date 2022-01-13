import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeInput } from '../InputTextbox/inputTextboxSlice';
import Popup from 'reactjs-popup';

import DateTextbox from '../DateTextbox'
import InputTextbox from '../InputTextbox'
import HomeCheckbox from '../HomeCheckbox'
import history from '../../history'

import { changeHalf } from './gameSetupSlice'

import s from './game-setup.module.scss'

function GameSetupForm(props) {
  const dispatch = useDispatch()
  const [clearData, setClearData] = useState(false);
  const [submitting, setSubmitting] = useState(true);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  
  let isValid = true

  function handleClear (e) {
    clearLocalStorage()
    clearReduxStore()
    setOpen(false)

  }

  function clearLocalStorage() {
    localStorage.removeItem('gameDate')
    localStorage.removeItem('yourName')
    localStorage.removeItem('yourAbbrev')
    localStorage.removeItem('isHome')
    localStorage.removeItem('oppName')
    localStorage.removeItem('oppAbbrev')

  }

  function clearReduxStore() {
    dispatch(changeInput('yourName', ''))

  }

  function handleSubmit (e) {
    e.preventDefault();
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
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className={s.modal}>
          <div className={s.modal_body}>
            <p>Are you sure you want to reset the Game Setup?</p> 
          </div>
          <div className={s.modal_buttons}>
            <input type="button" value="Yes" class="buttonGreen buttonMed" onClick={handleClear}/>
            <input type="button" value="No" class="buttonRed buttonMed" onClick={() => setOpen(o => !o)} />
          </div>
        </div>      
      </Popup>
      <form className={s.gameSetupForm} onSubmit={handleSubmit} disabled={submitting}>
        <div className={s.inputWrapper}>        
          <DateTextbox />
        </div>
        <div className={s.teamWrapper}>
          <div className={s.teamName}>
            <p>Your Team:</p>
          </div>
          <div className={s.inputWrapper}>
            <InputTextbox inputName="yourName" label="Name"  maxLen="35" style="teamName"/>
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
            <InputTextbox inputName="oppName" label="Name"  maxLen="35" style="teamName"/>
          </div>
          <div className={s.inputWrapper}>
            <InputTextbox inputName="oppAbbrev" label="Abbrev"  maxLen="4" style="teamAbbrev"/>
          </div>
        </div>
          <div className={` ${s.inputWrapper} ${s.buttons}`}>
            <div className={s.buttonWrapper}>
              <input type="button" value="Clear" class="buttonRed buttonLarge" onClick={() => setOpen(o => !o)}/>
            </div>
            <div className={s.buttonWrapper}>
              <input type="submit" value="Next" class="buttonOrange" disabled={submitting} onClick={handleSubmit}  />
              <div className={s.buttonNote}>to goal setup</div>
            </div>
          </div>
          <p className={props.error ? "error active" : "error"}>
            {props.error}
          </p>
      </form>
    </div>
  );
}


export default GameSetupForm;
