import React, { useReducer, useState } from 'react'
import history from '../../history'

import s from './game-setup.module.scss'

function GoalSetupForm(props) {

  const [submitting, setSubmitting] = useState(false);


  function goalClick (e, goal) {
    e.preventDefault();

    console.log("My goal is on the " + goal)
    
    //history.push('/game')

  }

    return (
      <div className={s.goalSetupFormContainer}>
          <h2>Which goal is your team defending?</h2>
          <div className={s.goalSelection}>
            <button type="button" className={s.goal} onClick={(e) => this.goalClick.bind('left', e)}>&larr;</button>
            <button type="button" className={s.goal}>&rarr;</button>
          </div>
      </div>
    );
}

export default GoalSetupForm;