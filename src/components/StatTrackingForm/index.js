import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setStartingGoal } from '../RadioTwoChoice/radioTwoChoiceSlice'
import { resetCount } from '../GoalCounter/goalCounterSlice'
import { resetAmount } from '../InputCounter/inputCounterSlice'

import Counter from '../InputCounter'
import GoalCounter from '../GoalCounter'

import s from './stat-tracking-form.module.scss'

function StatTrackingForm(props) {
    const sgStore = useSelector((state) => state.startingGoal)
    const yourAbbrev = useSelector((state) => state.inputTextbox.entities.yourAbbrev)
    const oppAbbrev = useSelector((state) => state.inputTextbox.entities.oppAbbrev)
    const half = useSelector((state) => state.gameHalf)
    const dispatch = useDispatch()

    
    let currHalf = 0
    let startGoal = ''
    let yourAbb = 'YA'
    let oppAbb = 'OA'
    let leftAbbrev = 'hom'
    let rightAbbrev = 'vis'
    let statsSide = 'left'
    let leftGoals, leftPasses, leftShots, leftCKs, leftGKs, leftTackles, leftOff, leftFouls, leftYCs, leftRCs = 0
    let rightGoals, rightPasses, rightShots, rightCKs, rightGKs, rightTackles, rightOff, rightFouls, rightYCs, rightRCs = 0

    if (localStorage.getItem('gameHalf') !== null) {
        currHalf = parseInt(localStorage.getItem('gameHalf'))

    } else {
        currHalf = half.value
    }

    if (sgStore !== null) {
        startGoal = sgStore.startingGoal
        localStorage.setItem('startingGoal', sgStore.startingGoal)
        
    } else {
        startGoal = localStorage.getItem('startingGoal')
        dispatch(setStartingGoal(localStorage.getItem('startingGoal')))
        
    }

    if (currHalf === 1) {
        statsSide = startGoal
        
    } else {
        if (startGoal === 'left') {
            statsSide = 'right'
        } else {
            statsSide = 'left'
        }
    }
    
    console.log("The stats are on side " + statsSide)

    if (localStorage.getItem('yourAbbrev') !== null) {
        yourAbb = localStorage.getItem('yourAbbrev')
    } else {
        yourAbb = yourAbbrev
    }

    if (localStorage.getItem('oppAbbrev') !== null) {
        oppAbb = localStorage.getItem('oppAbbrev')
    } else {
        oppAbb = oppAbbrev
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

    function resetForm () {
        //left stats
        localStorage.removeItem(leftGoals)
        dispatch(resetCount(leftGoals))
        localStorage.removeItem(leftPasses)
        dispatch(resetAmount(leftPasses))
        localStorage.removeItem(leftShots)
        dispatch(resetAmount(leftShots))
        localStorage.removeItem(leftCKs)
        dispatch(resetAmount(leftCKs))
        localStorage.removeItem(leftGKs)
        dispatch(resetAmount(leftGKs))
        localStorage.removeItem(leftTackles)
        dispatch(resetAmount(leftTackles))
        localStorage.removeItem(leftOff)
        dispatch(resetAmount(leftOff))
        localStorage.removeItem(leftFouls)
        dispatch(resetAmount(leftFouls))
        localStorage.removeItem(leftYCs)
        dispatch(resetAmount(leftYCs))
        localStorage.removeItem(leftRCs)
        dispatch(resetAmount(leftRCs))

        localStorage.removeItem(rightGoals)
        dispatch(resetCount(rightGoals))
        localStorage.removeItem(rightPasses)
        dispatch(resetAmount(rightPasses))
        localStorage.removeItem(rightShots)
        dispatch(resetAmount(rightShots))
        localStorage.removeItem(rightCKs)
        dispatch(resetAmount(rightCKs))
        localStorage.removeItem(rightGKs)
        dispatch(resetAmount(rightGKs))
        localStorage.removeItem(rightTackles)
        dispatch(resetAmount(rightTackles))
        localStorage.removeItem(rightOff)
        dispatch(resetAmount(rightOff))
        localStorage.removeItem(rightFouls)
        dispatch(resetAmount(rightFouls))
        localStorage.removeItem(rightYCs)
        dispatch(resetAmount(rightYCs))
        localStorage.removeItem(rightRCs)
        dispatch(resetAmount(rightRCs))

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
                    <Counter inputName={leftPasses} maxInc={999} size={6} inputSide={"right"} />
                </div>
                <div className={s.labels}>
                    <p>Passes</p>
                </div>
                <div className={`${s.rightGoal} ${s.statCol}`}>
                    <Counter inputName={rightPasses} maxInc={999} size={6} inputSide={"left"} />
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

            <div className={s.resetButton}>
                <input type="button" value="Clear Stats" className={s.resetButton_button} onClick={resetForm}/>
            </div>

            <nav className={s.gameNavigation}>
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
                        <div className={s.trackingNavigation_link}>
                            <Link to={{pathname: '/game-stats',  
                                trackingProps: {
                                    half: currHalf
                                }}
                            }>End Game</Link>
                        </div>
                </div>
            </nav>
        </div>
    )
}
  
  export default StatTrackingForm;