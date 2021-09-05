import React, { useState, useEffect } from 'react'
import { get } from '../../data/DataService';
import { getUserInfo } from './Auth';
import WorkoutRow  from '../workout/WorkoutRow';

export default function Dashboard() {

    const [ workouts, setWorkouts ] = useState([]);
    const [ userInfo, setUserInfo ] = useState([]);

    useEffect(() => {
        if (workouts.length === 0) {
            get('workouts').then( res => {
                setWorkouts(res.data.data);
                setUserInfo(getUserInfo());
            })
        }
    }, [workouts]);

    return (
        <div>
            dashboard {userInfo.name}
            { 
                workouts.map(wo => {
                    return <WorkoutRow workout={wo} />
                })
            }
        </div>
    )
}
