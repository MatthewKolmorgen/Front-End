import React, { useState } from 'react'
import ClassCard from './class-card'

const WorkoutCard = () => {
    const [classes, setClasses] = useState([]);
    return ( 
        <div>
            <h2>Welcome Back</h2>
            <div>
                {classes.map((item) => {
                    return <ClassCard key={item.id} details={item}></ClassCard>;
                })}
            </div>
        </div>
    )
}

export default WorkoutCard