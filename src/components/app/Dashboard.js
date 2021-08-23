import React, { useState, useEffect } from 'react'
import { get } from '../../data/DataService';

export default function Dashboard() {

    const [ workouts, setWorkouts ] = useState([]);

    useEffect(() => {
        if (workouts.length === 0) {
            get('workouts').then( res => {
                console.dir(res.data.data);
                setWorkouts(res.data.data);
            })
        }
    }, [workouts]);

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
