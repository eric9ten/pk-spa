import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { changeHalf } from '../GameSetupForm/gameSetupSlice';
import { changeDate } from '../DateTextbox/dateTextboxSlice';
import { changeInput } from '../InputTextbox/inputTextboxSlice';
import Popup from 'reactjs-popup';
//import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import history from '../../history';

import s from './game-stats.module.scss';

export default function GameStatsTable(props) { 
  const dispatch = useDispatch()
  const location = useLocation()
  const gDate = useSelector((state) => state.dateTextbox)
  const gameHalf = useSelector((state) => state.gameHalf)
  const isHome = useSelector((state) => state.isHome)
  const yourAbb = useSelector((state) => state.inputTextbox.entities.yourAbbrev)
  const oppAbb = useSelector((state) => state.inputTextbox.entities.oppAbbrev)
  const goalCount = useSelector((state) => state.goalCounter)
  const inputCount = useSelector((state) => state.inputCounter)
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  let currHalf = 0
  let gameDate = new Date()
  let yourAbbrev = ''
  let oppAbbrev = ''
  
  //const currHalf = location.trackingProps.half

  if (localStorage.getItem('gameHalf') !== null ) {
    currHalf = parseInt(localStorage.getItem('gameHalf'))
    dispatch(changeHalf(currHalf))

  } else {
    currHalf = gameHalf.value
    localStorage.setItem('gameHalf', currHalf)

  }

  if (localStorage.getItem('gameDate') !== null ) {
    gameDate = new Date(localStorage.getItem('gameDate'))
    dispatch(changeDate(localStorage.getItem('gameDate')))

  } else {
    gameDate = new Date(gDate.value)
    localStorage.setItem('gameDate', gDate.value)

  }

  if (localStorage.getItem('yourAbbrev') !== null ) {
    yourAbbrev = localStorage.getItem('yourAbbrev')
    dispatch(changeInput(localStorage.getItem('yourAbbrev')))

  } else {
    yourAbbrev = yourAbb.value
    localStorage.setItem('yourAbbrev', yourAbb.value)

  }

  if (localStorage.getItem('oppAbbrev') !== null ) {
    oppAbbrev = localStorage.getItem('oppAbbrev')
    dispatch(changeInput(localStorage.getItem('oppAbbrev')))

  } else {
    oppAbbrev = oppAbb.value
    localStorage.setItem('oppAbbrev', oppAbb.value)

  }

  const half = currHalf === 1 ? "Halftime" : "Game Over"

  let homeAbbrev = 'hhhh';
  let visAbbrev = 'vvvv';
  let leftGoals, leftPasses, leftShots, leftCKs, leftGKs, leftTackles, leftOff, leftFouls, leftYCs, leftRCs = 0
  let rightGoals, rightPasses, rightShots, rightCKs, rightGKs, rightTackles, rightOff, rightFouls, rightYCs, rightRCs = 0
  
  if (isHome) {
    homeAbbrev = yourAbbrev;
    leftGoals = goalCount.entities['teamAGoals'] !== 0 ? goalCount.entities['teamAGoals'] : localStorage.getItem('teamAGoals') //teamAGoals
    leftPasses = inputCount.entities['teamAPasses'] !== 0 ? inputCount.entities['teamAPasses'] : localStorage.getItem('teamAPasses') //"teamAPasses"
    leftShots = inputCount.entities['teamAShots'] !== 0 ? inputCount.entities['teamAShots'] : localStorage.getItem('teamAShots') //"teamAShots"
    leftCKs = inputCount.entities['teamACorners'] !== 0 ? inputCount.entities['teamACorners'] : localStorage.getItem('teamACorners') //"teamACorners"
    leftGKs = inputCount.entities['teamAGoalKicks'] !== 0 ? inputCount.entities['teamAGoalKicks'] : localStorage.getItem('teamAGoalKicks') //"teamAGoalKicks"
    leftTackles = inputCount.entities['teamATackles'] !== 0 ? inputCount.entities['teamATackles'] : localStorage.getItem('teamATackles') //"teamATackles"
    leftOff = inputCount.entities['teamAOffsides'] !== 0 ? inputCount.entities['teamAOffsides'] : localStorage.getItem('teamAOffsides') //"teamAOffsides"
    leftFouls = inputCount.entities['teamAFouls'] !== 0 ? inputCount.entities['teamAFouls'] : localStorage.getItem('teamAFouls') //"teamAFouls"
    leftYCs = inputCount.entities['teamAYellowCards'] !== 0 ? inputCount.entities['teamAYellowCards'] : localStorage.getItem('teamAYellowCards') //"teamAYellowCards"
    leftRCs = inputCount.entities['teamARedCards'] !== 0 ? inputCount.entities['teamARedCards'] : localStorage.getItem('teamARedCards') //"teamARedCards"

    visAbbrev = oppAbbrev;
    rightGoals = goalCount.entities['teamBGoals'] !== 0 ? goalCount.entities['teamBGoals'] : localStorage.getItem('teamBGoals') //"teamBGoals"
    rightPasses = inputCount.entities['teamBPasses'] !== 0 ? inputCount.entities['teamBPasses'] : localStorage.getItem('teamBPasses') //"teamBPasses"
    rightShots = inputCount.entities['teamBShots'] !== 0 ? inputCount.entities['teamBShots'] : localStorage.getItem('teamBShots') //"teamBShots"
    rightCKs =  inputCount.entities['teamBCorners'] !== 0 ? inputCount.entities['teamBCorners'] : localStorage.getItem('teamBCorners') //"teamBCorners"
    rightGKs =  inputCount.entities['teamBGoalKicks'] !== 0 ? inputCount.entities['teamBGoalKicks'] : localStorage.getItem('teamBGoalKicks') //"teamBGoalKicks"
    rightTackles = inputCount.entities['teamBTackles'] !== 0 ? inputCount.entities['teamBTackles'] : localStorage.getItem('teamBTackles') //"teamBTackles"
    rightOff = inputCount.entities['teamBOffsides'] !== 0 ? inputCount.entities['teamBOffsides'] : localStorage.getItem('teamBOffsides') //"teamBOffsides"
    rightFouls = inputCount.entities['teamBFouls'] !== 0 ? inputCount.entities['teamBFouls'] : localStorage.getItem('teamBFouls') //"teamBFouls"
    rightYCs = inputCount.entities['teamBYellowCards'] !== 0 ? inputCount.entities['teamBYellowCards'] : localStorage.getItem('teamBYellowCards') //"teamBYellowCards"
    rightRCs = inputCount.entities['teamBRedCards'] !== 0 ? inputCount.entities['teamBRedCards'] : localStorage.getItem('teamBRedCards') //"teamBRedCards"

  } else {
    homeAbbrev = oppAbbrev;
    leftGoals = goalCount.entities['teamBGoals'] !== 0 ? goalCount.entities['teamBGoals'] : localStorage.getItem('teamBGoals') //"teamBGoals"
    leftPasses = inputCount.entities['teamBPasses'] !== 0 ? inputCount.entities['teamBPasses'] : localStorage.getItem('teamBPasses') //"teamAPasses"
    leftShots = inputCount.entities['teamBShots'] !== 0 ? inputCount.entities['teamBShots'] : localStorage.getItem('teamBShots') //"teamBShots"
    leftCKs =  inputCount.entities['teamBCorners'] !== 0 ? inputCount.entities['teamBCorners'] : localStorage.getItem('teamBCorners') //"teamBCorners"
    leftGKs =  inputCount.entities['teamBGoalKicks'] !== 0 ? inputCount.entities['teamBGoalKicks'] : localStorage.getItem('teamBGoalKicks') //"teamBGoalKicks"
    leftTackles = inputCount.entities['teamBTackles'] !== 0 ? inputCount.entities['teamBTackles'] : localStorage.getItem('teamBTackles') //"teamBTackles"
    leftOff = inputCount.entities['teamBOffsides'] !== 0 ? inputCount.entities['teamBOffsides'] : localStorage.getItem('teamBOffsides') //"teamBOffsides"
    leftFouls = inputCount.entities['teamBFouls'] !== 0 ? inputCount.entities['teamBFouls'] : localStorage.getItem('teamBFouls') //"teamBFouls"
    leftYCs = inputCount.entities['teamBYellowCards'] !== 0 ? inputCount.entities['teamBYellowCards'] : localStorage.getItem('teamBYellowCards') //"teamBYellowCards"
    leftRCs = inputCount.entities['teamBRedCards'] !== 0 ? inputCount.entities['teamBRedCards'] : localStorage.getItem('teamBRedCards') //"teamBRedCards"

    visAbbrev = yourAbbrev;
    rightGoals = goalCount.entities['teamAGoals'] !== 0 ? goalCount.entities['teamAGoals'] : localStorage.getItem('teamAGoals') //"teamAGoals"
    rightPasses = inputCount.entities['teamAPasses'] !== 0 ? inputCount.entities['teamAPasses'] : localStorage.getItem('teamAPasses') //"teamAPasses"
    rightShots = inputCount.entities['teamAShots'] !== 0 ? inputCount.entities['teamAShots'] : localStorage.getItem('teamAShots') //"teamAShots"
    rightCKs =  inputCount.entities['teamACorners'] !== 0 ? inputCount.entities['teamACorners'] : localStorage.getItem('teamACorners') //"teamACorners"
    rightGKs =  inputCount.entities['teamAGoalKicks'] !== 0 ? inputCount.entities['teamAGoalKicks'] : localStorage.getItem('teamAGoalKicks') //"teamAGoalKicks"
    rightTackles = inputCount.entities['teamATackles'] !== 0 ? inputCount.entities['teamATackles'] : localStorage.getItem('teamATackles') //"teamATackles"
    rightOff = inputCount.entities['teamAOffsides'] !== 0 ? inputCount.entities['teamAOffsides'] : localStorage.getItem('teamAOffsides') //"teamAOffsides"
    rightFouls = inputCount.entities['teamAFouls'] !== 0 ? inputCount.entities['teamAFouls'] : localStorage.getItem('teamAFouls') //"teamAFouls"
    rightYCs = inputCount.entities['teamAYellowCards'] !== 0 ? inputCount.entities['teamAYellowCards'] : localStorage.getItem('teamAYellowCards') //"teamAYellowCards"
    rightRCs = inputCount.entities['teamARedCards'] !== 0 ? inputCount.entities['teamARedCards'] : localStorage.getItem('teamARedCards') //"teamARedCards"

  }

  function handleContinueScoring(e) {
    history.push({
      pathname: '/game-tracking',
    })

  }

  function handleStartSecond(e) {

    // update half in store and local storage
    localStorage.setItem('gameHalf', 2)
    dispatch(changeHalf(2))

    history.push({
      pathname: '/game-tracking',
    })

  }
  
  function handleFinal (e) {
    localStorage.clear();

    history.push({
      pathname: '/',
    })

    setOpen(false)

  }

  return (
    <div className={s.gameStats}>
      <Popup open={open} offsetY="350px" closeOnDocumentClick onClose={closeModal}>
        <div className={s.modal}>
          <div className={s.modal_body}>
            <p>Are you sure you want to finalize the game?</p> 
          </div>
          <div className={s.modal_buttons}>
            <input type="button" value="Yes" class="buttonGreen buttonMed" onClick={handleFinal}/>
            <input type="button" value="No" class="buttonRed buttonMed" onClick={() => setOpen(o => !o)} />
          </div>
        </div>      
      </Popup>
      <div className={s.gameStats_title}>
        <h2>{half}</h2>
        <h3>{format(gameDate, 'MM/dd/yyyy').toString()}</h3>
      </div>
      <div className={s.gameStats_table}>
        <table>
          <tr className={`${s.gameStats_row} ${s.gameStats_row_head}`}>
            <th>{homeAbbrev}</th>
            <th>&nbsp;</th>
            <th>{visAbbrev}</th>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_goals}`}>{leftGoals}</td>
            <td>-</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_goals}`}>{rightGoals}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_passes}`}>{leftPasses}</td>
            <td className={s.gameStats_statLabel}>Passes</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_passes}`}>{rightPasses}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_shots}`}>{leftShots}</td>
            <td className={s.gameStats_statLabel}>Shots</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_shots}`}>{rightShots}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_corners}`}>{leftCKs}</td>
            <td className={s.gameStats_statLabel}>Corner Kicks</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_corners}`}>{rightCKs}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_goalKicks}`}>{leftGKs}</td>
            <td className={s.gameStats_statLabel}>Goal Kicks</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_goalKicks}`}>{rightGKs}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_tackles}`}>{leftTackles}</td>
            <td className={s.gameStats_statLabel}>Tackles</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_tackles}`}>{rightTackles}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_offsides}`}>{leftOff}</td>
            <td className={s.gameStats_statLabel}>Offsides</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_offsides}`}>{rightOff}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_fouls}`}>{leftFouls}</td>
            <td className={s.gameStats_statLabel}>Fouls</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_fouls}`}>{rightFouls}</td>
          </tr>
          <tr className={`${s.gameStats_row} ${s.gameStats_groupLabel}`}>
            <td colSpan="3" className={s.gamesStat_label}>Cards</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_yellows}`}>{leftYCs}</td>
            <td className={s.gameStats_statLabel}>Yellows</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_yellows}`}>{rightYCs}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_reds}`}>{leftRCs}</td>
            <td className={s.gameStats_statLabel}>Red</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_reds}`}>{rightRCs}</td>
          </tr>
        </table>
        <div className={s.buttons}>
            <div className={s.buttons_buttonWrapper}>
              <input type="button" value="Continue Scoring" className="buttonBlue buttonMed" onClick={handleContinueScoring}/>
            </div>
            { 
              currHalf === 1 && 
              <div className={s.buttons_buttonWrapper}>
                <input type="button" value="Start 2nd Half" className="buttonGreen buttonMed" onClick={handleStartSecond}/>
              </div>
            }
          { 
            currHalf === 2 &&
            <div className={s.buttons_buttonWrapper}>
              <input type="button" value="End Game" className="buttonRed buttonMed" onClick={() => setOpen(o => !o)} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}
