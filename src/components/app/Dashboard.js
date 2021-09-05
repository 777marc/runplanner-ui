import React, { useState, useEffect } from 'react'
import { get } from '../../data/DataService';
import { getUserInfo } from './Auth';

export default function Dashboard() {

    const [ workouts, setWorkouts ] = useState([]);

    useEffect(() => {
        if (workouts.length === 0) {
            get('workouts').then( res => {
                console.dir(getUserInfo());
                setWorkouts(res.data.data);
            })
        }
    }, [workouts]);

    return (
        <div>
            dashboard

            { 
                workouts.map(wo => {
                    return <p key={wo.id}>{wo.name}|{wo.duration}|{wo.distance}</p>
                })
            }

        </div>
    )
}
