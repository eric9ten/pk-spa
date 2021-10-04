import React from 'react'
import Counter from '../InputCounter'

import s from './stat-tracking-form.module.scss'

export default function StatTrackingForm() {

    return (
        <div className={s.statTrackingForm}>
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
        </div>
    )
}