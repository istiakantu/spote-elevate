import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";


const Instructor = () => {

    const [instructors, setInstructors]= useState([]);

    useEffect(()=>{
        fetch('https://sport-elevate-server.vercel.app/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructors(data)
        })
    },[]);

    return (
        <div className="grid md:grid-cols-2 gap-8 pt-40">
            {
                instructors.map(instructor=><InstructorCard
                    key={instructor._id}
                    instructor={instructor}

                ></InstructorCard>)
            }
        </div>
    );
};

export default Instructor;