import React from 'react';

export default function WorkoutRow(props) {
    return (
        <div className="workout">
            {props.workout.name}
            pace:{props.workout.pace}
            duration:{props.workout.duration}
        </div>
    )
}
