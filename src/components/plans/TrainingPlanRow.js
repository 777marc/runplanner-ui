import React from 'react'

export default function TrainingPlanRow(props) {
    return (
        <div className="training-plan-row">
            `week | ${props.data.week} day | ${props.data.day}`
        </div>
    )
}
