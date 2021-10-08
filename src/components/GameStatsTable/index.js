import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

import history from '../../history'

import s from './game-stats.module.scss'

export default function GameStatsTable() { 

  return (
    <div className={s.gameStats}>
      <div className={s.gameStats_title}>
        <h2>Half</h2>
        <h3>Date</h3>
      </div>
      <div className={s.gameStats_table}>
        <table>
          <tr>
            <th>HHHH</th>
            <th>&nbsp;</th>
            <th>VVVV</th>
          </tr>
          <tr>
            <td className={`${s.gameStat} ${s.gameStat_goals}`}>99</td>
            <td>-</td>
            <td className={`${s.gameStat} ${s.gameStat_goals}`}>99</td>
          </tr>
          <tr>
            <td className={`${s.gameStat} ${s.gameStat_passes}`}>999</td>
            <td className={s.gamesStat_label}>Passes</td>
            <td className={`${s.gameStat} ${s.gameStat_passes}`}>999</td>
          </tr>
          <tr>
            <td className={`${s.gameStat} ${s.gameStat_shots}`}>99</td>
            <td className={s.gamesStat_label}>Shots</td>
            <td className={`${s.gameStat} ${s.gameStat_shots}`}>99</td>
          </tr>
          <tr>
            <td className={`${s.gameStat} ${s.gameStat_corners}`}>99</td>
            <td className={s.gamesStat_label}>Corner Kicks</td>
            <td className={`${s.gameStat} ${s.gameStat_corners}`}>99</td>
          </tr>
          <tr>
            <td className={`${s.gameStat} ${s.gameStat_goalKicks}`}>99</td>
            <td className={s.gamesStat_label}>Goal Kicks</td>
            <td className={`${s.gameStat} ${s.gameStat_goalKicks}`}>99</td>
          </tr>
          <tr>
            <td className={`${s.gameStat} ${s.gameStat_tackles}`}>99</td>
            <td className={s.gamesStat_label}>Tackles</td>
            <td className={`${s.gameStat} ${s.gameStat_tackles}`}>99</td>
          </tr>
          <tr>
            <td className={`${s.gameStat} ${s.gameStat_offsides}`}>99</td>
            <td className={s.gamesStat_label}>Offsides</td>
            <td className={`${s.gameStat} ${s.gameStat_offsides}`}>99</td>
          </tr>
          <tr>
            <td className={`${s.gameStat} ${s.gameStat_fouls}`}>99</td>
            <td className={s.gamesStat_label}>Fouls</td>
            <td className={`${s.gameStat} ${s.gameStat_fouls}`}>99</td>
          </tr>
          <tr>
            <td colspan="3" className={s.gamesStat_label}>Cards</td>
          </tr>
          <tr>
            <td className={`${s.gameStat} ${s.gameStat_yellows}`}>99</td>
            <td className={s.gamesStat_label}>Yellows</td>
            <td className={`${s.gameStat} ${s.gameStat_yellows}`}>99</td>
          </tr>
          <tr>
            <td className={`${s.gameStat} ${s.gameStat_reds}`}>99</td>
            <td className={s.gamesStat_label}>Red</td>
            <td className={`${s.gameStat} ${s.gameStat_reds}`}>99</td>
          </tr>
        </table>
      </div>
      <div className={s.gameStat_navigation}>
        <div className={s.gameNavigation_link}>
            <Link to="/game-tracking">&larr; &larr; Continue Scoring</Link>
        </div>
        <div className={s.gameNavigation_link}>
            <Link to="/game-tracking">Start Second Half</Link>
        </div>
      </div>
    </div>
  );
}
