import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom'

import history from '../../history'

import s from './game-stats.module.scss'

export default function GameStatsTable(props) { 
  const dispatch = useDispatch()
  const location = useLocation()
  const gameDate = useSelector((state) => state.dateTextbox)
  const isHome = useSelector((state) => state.isHome)
  const yourAbb = useSelector((state) => state.inputTextbox.entities.yourAbbrev)
  const oppAbb = useSelector((state) => state.inputTextbox.entities.oppAbbrev)
  const goalCount = useSelector((state) => state.goalCounter)
  const inputCount = useSelector((state) => state.inputCounter)
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  
  const currHalf = location.trackingProps.half
  const half = currHalf === 1 ? "Halftime" : "Game Over"

  let homeAbbrev = 'hhhh';
  let visAbbrev = 'vvvv';
  let leftGoals, leftPasses, leftShots, leftCKs, leftGKs, leftTackles, leftOff, leftFouls, leftYCs, leftRCs = 0
  let rightGoals, rightPasses, rightShots, rightCKs, rightGKs, rightTackles, rightOff, rightFouls, rightYCs, rightRCs = 0
  
  if (isHome) {
    homeAbbrev = yourAbb;
    leftGoals = "teamAGoals"
    leftPasses = "teamAPasses"
    leftShots = "teamAShots"
    leftCKs = "teamACorners"
    leftGKs = "teamAGoalKicks"
    leftTackles = "teamATackles"
    leftOff = "teamAOffsides"
    leftFouls = "teamAFouls"
    leftYCs = "teamAYellowCards"
    leftRCs = "teamARedCards"

    visAbbrev = oppAbb;
    rightGoals = "teamBGoals"
    rightPasses = "teamBPasses"
    rightShots = "teamBShots"
    rightCKs = "teamBCorners"
    rightGKs = "teamBGoalKicks"
    rightTackles = "teamBTackles"
    rightOff = "teamBOffsides"
    rightFouls = "teamBFouls"
    rightYCs = "teamBYellowCards"
    rightRCs = "teamBRedCards"

  } else {
    homeAbbrev = oppAbb;
    leftGoals = "teamBGoals"
    leftPasses = "teamBPasses"
    leftShots = "teamBShots"
    leftCKs = "teamBCorners"
    leftGKs = "teamBGoalKicks"
    leftTackles = "teamBTackles"
    leftOff = "teamBOffsides"
    leftFouls = "teamBFouls"
    leftYCs = "teamBYellowCards"
    leftRCs = "teamBRedCards"

    visAbbrev = yourAbb;
    rightGoals = "teamAGoals"
    rightPasses = "teamAPasses"
    rightShots = "teamAShots"
    rightCKs = "teamACorners"
    rightGKs = "teamAGoalKicks"
    rightTackles = "teamATackles"
    rightOff = "teamAOffsides"
    rightFouls = "teamAFouls"
    rightYCs = "teamAYellowCards"
    rightRCs = "teamARedCards"

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
        <h3>{gameDate.value}</h3>
      </div>
      <div className={s.gameStats_table}>
        <table>
          <tr className={`${s.gameStats_row} ${s.gameStats_row_head}`}>
            <th>{homeAbbrev}</th>
            <th>&nbsp;</th>
            <th>{visAbbrev}</th>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_goals}`}>{goalCount.entities[leftGoals]}</td>
            <td>-</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_goals}`}>{goalCount.entities[rightGoals]}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_passes}`}>{inputCount.entities[leftPasses]}</td>
            <td className={s.gameStats_statLabel}>Passes</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_passes}`}>{inputCount.entities[rightPasses]}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_shots}`}>{inputCount.entities[leftShots]}</td>
            <td className={s.gameStats_statLabel}>Shots</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_shots}`}>{inputCount.entities[rightShots]}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_corners}`}>{inputCount.entities[leftCKs]}</td>
            <td className={s.gameStats_statLabel}>Corner Kicks</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_corners}`}>{inputCount.entities[rightCKs]}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_goalKicks}`}>{inputCount.entities[leftGKs]}</td>
            <td className={s.gameStats_statLabel}>Goal Kicks</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_goalKicks}`}>{inputCount.entities[rightGKs]}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_tackles}`}>{inputCount.entities[leftTackles]}</td>
            <td className={s.gameStats_statLabel}>Tackles</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_tackles}`}>{inputCount.entities[rightTackles]}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_offsides}`}>{inputCount.entities[leftOff]}</td>
            <td className={s.gameStats_statLabel}>Offsides</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_offsides}`}>{inputCount.entities[rightOff]}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_fouls}`}>{inputCount.entities[leftFouls]}</td>
            <td className={s.gameStats_statLabel}>Fouls</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_fouls}`}>{inputCount.entities[rightFouls]}</td>
          </tr>
          <tr className={`${s.gameStats_row} ${s.gameStats_groupLabel}`}>
            <td colSpan="3" className={s.gamesStat_label}>Cards</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_yellows}`}>{inputCount.entities[leftYCs]}</td>
            <td className={s.gameStats_statLabel}>Yellows</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_yellows}`}>{inputCount.entities[rightYCs]}</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_reds}`}>{inputCount.entities[leftRCs]}</td>
            <td className={s.gameStats_statLabel}>Red</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_reds}`}>{inputCount.entities[rightRCs]}</td>
          </tr>
        </table>
          { currHalf === 2 &&
            <div className={s.buttons}>
              <div className={s.buttonWrapper}>
                <input type="button" value="End Game" className="buttonRed buttonLarge" onClick={() => setOpen(o => !o)} />
              </div>
            </div>
          }
      </div>
      <div className={s.gameNavigation}>
          <div className={s.gameNavigation_link}>
              <Link to={{
                pathname: '/game-tracking',  
                trackingProps: {
                  half: currHalf
                }
              }}>&larr; Continue Scoring</Link>
          </div>
          { currHalf === 1 &&
            <div className={s.gameNavigation_link}>
                <Link to={{
                  pathname: '/game-tracking', 
                  trackingProps: {
                    half: 2
                  }
                }}>Start Second Half</Link>
            </div>
          }
      </div>
    </div>
  );
}
