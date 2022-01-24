import React from 'react'
import history from '../../history';

import GoalRadio from '../RadioTwoChoice'
import s from './goal-setup.module.scss'

function GoalSetupForm(props) { 
  
  function handleClick (e) {
    e.preventDefault();

    history.push({
      pathname: '/game-setup',
    })

  } 

  function handleSubmit (e) {
    e.preventDefault();

    history.push({
      pathname: '/game-tracking',
    })

  } 

  return (
    <div className={s.goalSetupFormContainer}>
      <div className={s.goalSetupForm}>
          <h2>Which goal is your team defending?</h2>
          <div className={s.goalSelection}>
            <GoalRadio name="startGoal" id1="startLeft" value1="left" id2="startRight" value2="right" />
          </div>
      </div>
      <div className={s.buttons}>
        <div className={s.buttonWrapper}>
          <input type="button" value="Back" class="buttonOrange buttonLarge" onClick={handleClick}  />
          <div className={s.buttonNote}>to game setup</div>
        </div>
        <div className={s.buttonWrapper}>
          <input type="button" value="Next" class="buttonGreen buttonLarge" onClick={handleSubmit}  />
          <div className={s.buttonNote}>to track game</div>
        </div>
      </div>
    </div>
  );
}

export default GoalSetupForm;