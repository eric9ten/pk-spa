import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom'
import history from '../../history'

import s from './game-setup.module.scss'

const formReducer = (state, event) => {
  if(event.reset) {
   return {
      date: '',
      yourName: '',
      yourAbbrev: '',
      'isHome': true,
      oppName: '',
      oppAbbrev: '',
      isValid: true

   }
 }
  return {
    ...state,
    [event.name]: event.value
  }
}

function GameSetupForm(props) {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleChange= event => {

    const isCheckbox = event.target.type === 'checkbox';
    
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    })

  }

  const handleSubmit = event =>{
    
    event.preventDefault();
    setSubmitting(true);

    //setTimeout(() => {
      setSubmitting(false);
      setFormData({
       reset: true
      })

      //if(isValid) {
        history.push({
          pathname: '/goal-setup',
          state: {name: formData.yourName}
        })
      //}
    //}, 3000);
  }

    return (
      <div className={s.gameSetupFormContainer}>
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
        <form onSubmit={handleSubmit} className={s.gameSetupForm}>
          <div className={s.inputWrapper}>        
            <label>Date:
              <input type="date" name="date" value={formData.date} onChange={handleChange} />        
            </label>
          </div>
          <div className={s.teamWrapper}>
            <div className={s.teamName}>
              <p>Your Team:</p>
            </div>
            <div className={s.inputWrapper}>        
              <label>Name:
                <input type="text" name="yourName" value={formData.yourName || ''} onChange={handleChange} />        
              </label>
            </div>
            <div className={s.inputWrapper}>        
              <label>Abbrev:
                <input type="text" name="yourAbbrev" value={formData.yourAbbrev || ''} onChange={handleChange} />        
              </label>
            </div>
            <div className={s.inputWrapper}>
              <div className={s.toggleLabel}><p>Visitor</p></div>
              <input type="checkbox" name="isHome" id="toggle" checked={formData['isHome'] || false} className={s.offscreen} onChange={handleChange}/>
              <label for="toggle" className={s.switch}></label>
              <div className={s.toggleLabel}><p>Home</p></div>
            </div>
          </div>
          <div className={s.teamWrapper}>
            <div className={s.teamName}>
              <p>Opponent:</p>
            </div>
            <div className={s.inputWrapper}>        
              <label>Name:
                <input type="text" name="oppName" value={formData.oppName  || ''} onChange={handleChange} />        
              </label>
            </div>
            <div className={s.inputWrapper}>        
              <label>Abbrev:
                <input type="text" name="oppAbbrev" value={formData.oppAbbrev || ''} onChange={                                                                                                       handleChange} />        
              </label>
            </div>
          </div>
            <div className={s.inputWrapper}>  
              <input type="submit" value="Submit" disabled={submitting} />
            </div>
        </form>
      </div>
    );
}

export default GameSetupForm;