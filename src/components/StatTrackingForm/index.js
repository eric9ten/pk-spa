import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import Counter from '../InputCounter'
import GoalCounter from '../GoalCounter'

import s from './stat-tracking-form.module.scss'

function StatTrackingForm(props) {
    const location = useLocation()
    const startGoal = useSelector((state) => state.startingGoal)
    const yourAbb = useSelector((state) => state.inputTextbox.entities.yourAbbrev)
    const oppAbb = useSelector((state) => state.inputTextbox.entities.oppAbbrev)

    let currHalf = 1 
    if (location.trackingProps) {
        currHalf = location.trackingProps.half
    }
    
    let leftAbbrev = 'hom'
    let rightAbbrev = 'vis'
    let statsSide = 'left'

    let leftGoals, leftPasses, leftShots, leftCKs, leftGKs, leftTackles, leftOff, leftFouls, leftYCs, leftRCs = 0
    let rightGoals, rightPasses, rightShots, rightCKs, rightGKs, rightTackles, rightOff, rightFouls, rightYCs, rightRCs = 0

    if (currHalf === 1) {
        statsSide = startGoal
    } else {
        if (startGoal === 'left') {
            statsSide ='right'
        } else {
            statsSide = 'left'
        }
    }

    
    if (statsSide === 'left') {
    //if (location.state.startGoal === 'left') {
        leftAbbrev = yourAbb
        leftGoals = "teamAGoals"
        leftPasses = "teamAPasses"
        leftShots = "teamAShots"
        leftCKs = "teamACorners"
        leftGKs = "teamAGoalKicks"
        leftTackles = "teamATackles"
        leftOff = "teamAOffsides"
        leftFouls = "teamAFouls"
        leftYCs = "teamAYellowCards"
        leftRCs = "teamARedCards"

        rightAbbrev = oppAbb
        rightGoals = "teamBGoals"
        rightPasses = "teamBPasses"
        rightShots = "teamBShots"
        rightCKs = "teamBCorners"
        rightGKs = "teamBGoalKicks"
        rightTackles = "teamBTackles"
        rightOff = "teamBOffsides"
        rightFouls = "teamBFouls"
        rightYCs = "teamBYellowCards"
        rightRCs = "teamBRedCards"

    } else {
        leftAbbrev = oppAbb;
        leftGoals = "teamBGoals"
        leftPasses = "teamBPasses"
        leftShots = "teamBShots"
        leftCKs = "teamBCorners"
        leftGKs = "teamBGoalKicks"
        leftTackles = "teamBTackles"
        leftOff = "teamBOffsides"
        leftFouls = "teamBFouls"
        leftYCs = "teamBYellowCards"
        leftRCs = "teamBRedCards"

        rightAbbrev = yourAbb;
        rightGoals = "teamAGoals"
        rightPasses = "teamAPasses"
        rightShots = "teamAShots"
        rightCKs = "teamACorners"
        rightGKs = "teamAGoalKicks"
        rightTackles = "teamATackles"
        rightOff = "teamAOffsides"
        rightFouls = "teamAFouls"
        rightYCs = "teamAYellowCards"
        rightRCs = "teamARedCards"
    }


    return (
        <div className={s.statTrackingForm}>
            <div className={`${s.statGroup} ${s.goals}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <GoalCounter inputName={leftGoals} maxInc={99} size={3} inputSide={"right"} teamAbbrev={leftAbbrev} />
                </div>
                <div className={s.labels}>
                    <p>Goals</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <GoalCounter inputName={rightGoals} maxInc={99} size={3} inputSide={"left"} teamAbbrev={rightAbbrev} />
                </div>
            </div>
            
            <div className={`${s.statGroup} ${s.passes}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={leftPasses} maxInc={999} size={4} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Passes</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={rightPasses} maxInc={999} size={4} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.shots}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={leftShots} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Shots</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={rightShots} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.corners}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={leftCKs} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Corners</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={rightCKs} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.goalKicks}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={leftGKs} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Goal Kicks</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={rightGKs} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.tackles}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={leftTackles} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Tackles</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={rightTackles} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.offsides}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={leftOff} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Offsides</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={rightOff} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.fouls}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={leftFouls} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Fouls</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={rightFouls} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.yellowCards}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={leftYCs} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Yellow Cards</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={rightYCs} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={`${s.statGroup} ${s.redCards}`}>
                <div className={`${s.leftGoal} ${s.statCol}`}>
                    <Counter inputName={leftRCs} maxInc={99} size={3} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Red Cards</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={rightRCs} maxInc={99} size={3} inputSide={"left"} />
                </div>
            </div>
            <div className={s.trackingNavigation}>
                { currHalf === 1 &&
                <div className={s.trackingNavigation_link}>
                    <Link to={{
                        pathname: '/game-stats',  
                        trackingProps: {
                            half: currHalf
                        }
                    }}>Halftime</Link>
                </div>
                }
                <div className={s.trackingLink}>
                    <input type="button" value="Clear Stats" className={s.trackingNavigation_button} />
                </div>
                <div className={s.trackingLink}>
                    <Link to={{pathname: '/game-stats',  
                        trackingProps: {
                            half: currHalf
                        }}
                    }>End Game</Link>
                </div>
            </div>
        </div>
    )
}
  
  export default StatTrackingForm;