import React from 'react';

import history from '../../history';
import Logo from '../Logo';

import s from './statsHome.module.scss';

function StatsHome(props) {

  function handleInstall (e) {
    let deferredPrompt;    
    
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();

    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });

  }
  
  function handleClick (e) {
    e.preventDefault();

    history.push({
      pathname: '/game-setup',
    })

  }  


  return (
    <div className={s.statsHome}>

      <Logo />
      <div className={s.buttons}>
        <div className={s.buttonWrapper}>
          <input type="submit" value="Start" class="buttonOrange buttonLarge" onClick={handleClick}  />
          <div className={s.buttonNote}>game setup</div>
        </div>
      </div>


    </div>
  );
}

export default StatsHome;