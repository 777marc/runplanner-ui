import React, { useState, useEffect } from 'react'
import { get } from '../../data/DataService';

export default function Dashboard() {

    const [ workouts, setWorkouts ] = useState([]);

    useEffect(() => {
        get('workouts').then( res => {
            setWorkouts(res.data.data);
        })
    });

    return (
        <div>
            dashboard

            { 
                workouts.map(wo => {
                    return <p key={wo.id}>wo.name</p>
                })
            }

        </div>
    )
}
