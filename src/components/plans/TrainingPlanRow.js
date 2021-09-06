import React from 'react'

export default function TrainingPlanRow(props) {
    return (
        <div>
            <p>{ props.data.name } | { props.data.week }</p>
        </div>
    )
}
