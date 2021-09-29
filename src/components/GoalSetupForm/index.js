import React, { useReducer, useState } from 'react'
import { ReactDOM } from 'react'
import history from '../../history'

import s from './game-setup.module.scss'

export default class GoalSetupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {goal: []};
  }

  //const [submitting, setSubmitting] = useState(false);
  //const { state } = props.location.state

  goalClick (goal, e) {
    e.preventDefault();

    console.log("My goal is on the " + goal + " and the date is " )
    console.log("Props are ")
    console.log(this.props.name)
    
    //history.push('/game')

  }

    render(){
      return (
        <div className={s.goalSetupFormContainer}>
            <h2>Which goal is your team defending?</h2>
            <div className={s.goalSelection}>
              <button type="button" className={s.goal} onClick={(e) => this.goalClick('left', e)}>&larr;</button>
              <button type="button" className={s.goal} onClick={(e) => this.goalClick('right', e)}>&rarr;</button>
            </div>
        </div>
      );
    }
}