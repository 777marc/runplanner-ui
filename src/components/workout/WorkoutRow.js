import React from 'react';

export default function WorkoutRow(props) {
    console.log(props)
    return (
        <div className="workout">
            <p>{props.workout.name}</p>
        </div>
    )
}
