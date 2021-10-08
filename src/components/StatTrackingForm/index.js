import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import Counter from '../InputCounter'
import GoalCounter from '../GoalCounter'

import s from './stat-tracking-form.module.scss'

export default function StatTrackingForm() {
    const location = useLocation();
    const [gameInfo, setGameInfo] = useState(0);
    let leftAbbrev = 'hom';
    let rightAbbrev = 'vis';

    useEffect(() => {
        
        setGameInfo(location.state.gameData);

    }, [location]);

    
    if (location.state.startGoal === 'left') {
        leftAbbrev = gameInfo.yourAbbrev;
        rightAbbrev = gameInfo.oppAbbrev;

    } else {
        leftAbbrev = gameInfo.oppAbbrev;
        rightAbbrev = gameInfo.yourAbbrev;

    }

    return (
        <div className={s.statTrackingForm}>
            <div className={`${s.statGroup} ${s.goals}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <GoalCounter inputName={"leftGoals"} maxInc={99} size={3} inputSide={"right"} teamAbbrev={leftAbbrev}/>
                </div>
                <div className={s.labels}>
                    <p>Goals</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <GoalCounter inputName={"rightGoals"} maxInc={99} size={3} inputSide={"left"} teamAbbrev={rightAbbrev}/>
                </div>
            </div>
            <div className={`${s.statGroup} ${s.passes}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={"leftPasses"} maxInc={999} size={4} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Passes</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={"rightPasses"} maxInc={999} size={4} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.shots}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={"leftShots"} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Shots</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={"rightShots"} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.corners}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={"leftCorners"} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Corners</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={"rightCorners"} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.goalKicks}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={"leftGoalKicks"} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Goal Kicks</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={"rightGoalKicks"} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.tackles}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={"leftTackles"} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Tackles</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={"rightTackles"} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.offsides}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={"leftOffsides"} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Offsides</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={"rightOffsides"} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.fouls}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={"leftFouls"} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Fouls</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={"rightFouls"} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.yellowCards}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={"leftYellowCards"} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Yellow Cards</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={"rightYellowCards"} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.redCards}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={"leftRedCards"} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Red Cards</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={"rightRedCards"} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={s.gameNavigation}>
                <div className={s.gameNavigation_link}>
                    <Link to="/game-stats">Halftime</Link>
                </div>
                <div className={s.gameNavigation_link}>
                    <input type="button" value="Clear Stats" className={s.gameNavigation_button} />
                </div>
                <div className={s.gameNavigation_link}>
                    <Link to="/game-stats">End Game</Link>
                </div>
            </div>
        </div>
    )
}