import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  const [isInvalid, setIsInvalid] = useState(false);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  
  const gameDate = useSelector((state) => state.dateTextbox)
  const yourName = useSelector((state) => state.inputTextbox.entities.yourName)
  const yourAbbrev = useSelector((state) => state.inputTextbox.entities.yourAbbrev)
  const oppName = useSelector((state) => state.inputTextbox.entities.oppName)
  const oppAbbrev = useSelector((state) => state.inputTextbox.entities.oppAbbrev)


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

    setIsInvalid(false)

  }

  function clearReduxStore() {
    dispatch(changeInput('yourName', ''))

  }

  function handleSubmit (e) {
    e.preventDefault();

    dispatch(changeHalf(1))

    if(!isInvalid) {
      history.push({
        pathname: '/goal-setup',
      })
    } else {
      //props.onError(errMsg)    
    }
    setIsInvalid(false);
  }

  // TODO: Need to validate form
  function checkIsValid () {
    let errMsg = ''

    if (gameDate === null || gameDate === "") {
      setIsInvalid(false)
      //errMsg = "The game date cannot be blank."
      
    } else if (yourName === null || yourName === "") {
      setIsInvalid(false)
      //errMsg = "Your Team Name cannot be blank."
      
    } else if (yourAbbrev === null || yourAbbrev === "") {
      setIsInvalid(false)
      //errMsg = "Your Team Abbrev cannot be blank."
      
    } else if (oppName === null || oppName === "") {
      setIsInvalid(false)
      //errMsg = "The Opponent Team Name cannot be blank."
      
    } else if (oppAbbrev === null || oppAbbrev === "") {
      setIsInvalid(false)
      //errMsg = "The Opponent Abbrev cannot be blank."
      
    } else {
      setIsInvalid(true)

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
            <input type="button" value="Yes" className="buttonGreen buttonMed" onClick={handleClear}/>
            <input type="button" value="No" className="buttonRed buttonMed" onClick={() => setOpen(o => !o)} />
          </div>
        </div>      
      </Popup>
      <form className={s.gameSetupForm} onSubmit={handleSubmit} disabled={isInvalid}>
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
              <input type="button" value="Reset" class="buttonRed buttonLarge" onClick={() => setOpen(o => !o)}/>
            </div>
            <div className={s.buttonWrapper}>
              <input type="submit" value="Next" class="buttonOrange" disabled={isInvalid} onClick={handleSubmit}  />
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
