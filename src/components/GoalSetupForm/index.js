import React, { useReducer, useState } from 'react'
import history from '../../history'

import s from './game-setup.module.scss'

function GoalSetupForm(props) {

  const [submitting, setSubmitting] = useState(false);
  //const { state } = props.location.state

  function goalClick (goal, e) {
    e.preventDefault();

    console.log("My goal is on the " + goal + " and the date is " )
    console.log("Props are ")
    console.log(props)
    
    //history.push('/game')

  }

    return (
      <div className={s.goalSetupFormContainer}>
          <h2>Which goal is your team defending?</h2>
          <div className={s.goalSelection}>
            <button type="button" className={s.goal} onClick={(e) => goalClick('left', e)}>&larr;</button>
            <button type="button" className={s.goal} onClick={(e) => goalClick('right', e)}>&rarr;</button>
          </div>
      </div>
    );
}

export default GoalSetupForm;