import React from 'react'
import Counter from '../InputCounter'

import s from './stat-tracking-form.module.scss'

export default function StatTrackingForm() {

    return (
        <div className={s.statTrackingForm}>
            <div className={s.leftGoal}>
                <Counter inputName={"leftPasses"} maxInc={999} size={4} />
            </div>
            <div className={s.labels}>
                <p>Passes</p>
            </div>
            <div className={s.rightGoal}>
                <Counter inputName={"rightPasses"} maxInc={999} size={4} />
            </div>
        </div>
    )
}