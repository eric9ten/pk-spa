import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

import history from '../../history'

import s from './game-stats.module.scss'

export default function GameStatsTable() { 
  const location = useLocation();
  const [gameData, setGameInfo] = useState([]);

  let homeAbbrev = 'hhhh';
  let visAbbrev = 'vvvv';

  useEffect(() => {
      
      setGameInfo(location.state.gameInfo);

  }, [location]);

  
  if (gameData.isHome) {
    homeAbbrev = gameData.yourAbbrev;
    visAbbrev = gameData.oppAbbrev;

  } else {
    homeAbbrev = gameData.oppAbbrev;
      visAbbrev = gameData.yourAbbrev;

  }

  return (
    <div className={s.gameStats}>
      <div className={s.gameStats_title}>
        <h2>Half</h2>
        <h3>{gameData.gameDate}</h3>
      </div>
      <div className={s.gameStats_table}>
        <table>
          <tr className={`${s.gameStats_row} ${s.gameStats_row_head}`}>
            <th>{homeAbbrev}</th>
            <th>&nbsp;</th>
            <th>{visAbbrev}</th>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_goals}`}>99</td>
            <td>-</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_goals}`}>99</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_passes}`}>999</td>
            <td className={s.gameStats_statLabel}>Passes</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_passes}`}>999</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_shots}`}>99</td>
            <td className={s.gameStats_statLabel}>Shots</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_shots}`}>99</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_corners}`}>99</td>
            <td className={s.gameStats_statLabel}>Corner Kicks</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_corners}`}>99</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_goalKicks}`}>99</td>
            <td className={s.gameStats_statLabel}>Goal Kicks</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_goalKicks}`}>99</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_tackles}`}>99</td>
            <td className={s.gameStats_statLabel}>Tackles</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_tackles}`}>99</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_offsides}`}>99</td>
            <td className={s.gameStats_statLabel}>Offsides</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_offsides}`}>99</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_fouls}`}>99</td>
            <td className={s.gameStats_statLabel}>Fouls</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_fouls}`}>99</td>
          </tr>
          <tr className={`${s.gameStats_row} ${s.gameStats_groupLabel}`}>
            <td colspan="3" className={s.gamesStat_label}>Cards</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_yellows}`}>99</td>
            <td className={s.gameStats_statLabel}>Yellows</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_yellows}`}>99</td>
          </tr>
          <tr className={s.gameStats_row}>
            <td className={`${s.gameStats_stat} ${s.gameStats_reds}`}>99</td>
            <td className={s.gameStats_statLabel}>Red</td>
            <td className={`${s.gameStats_stat} ${s.gameStats_reds}`}>99</td>
          </tr>
        </table>
      </div>
      <div className={s.gameStats_navigation}>
        <div className={s.gameStats_navigationlink}>
            <Link to="/game-tracking">&larr; Continue Scoring</Link>
        </div>
        <div className={s.gameStats_navigationlink}>
            <Link to="/game-tracking">Start Second Half</Link>
        </div>
      </div>
    </div>
  );
}
