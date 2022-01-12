import React from 'react'

import GoalRadio from '../RadioTwoChoice'
import s from './goal-setup.module.scss'

function GoalSetupForm(props) { 

  return (
    <div className={s.goalSetupFormContainer}>
      <div className={s.goalSetupForm}>
          <h2>Which goal is your team defending?</h2>
          <div className={s.goalSelection}>
            <GoalRadio name="startGoal" id1="startLeft" value1="left" id2="startRight" value2="right" />
          </div>
      </div>
    </div>
  );
}

export default GoalSetupForm;