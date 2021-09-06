import React, { useEffect, useState } from 'react';
import TrainingPlanRow from './TrainingPlanRow';
import { get } from '../../data/DataService';

export default function TrainingPlans(props) {

    const [ trainingPlan, setTrainingPlan ] = useState(() => []);

    useEffect(() => {
        if (trainingPlan.length === 0) {
            get('trainingplans').then( res => {
                setTrainingPlan(res.data.data);
            });
        }

    }, [trainingPlan])

    return (
        <div>
            <h2>Training Plan</h2>
            { 
                trainingPlan.map(tp => {
                    return <TrainingPlanRow key={tp.id} data={tp} />
                })
            }            
        </div>
    )
}
