
import { Fade, Slide } from 'react-awesome-reveal';
import SectionTitle from '../../../components/SectionTitle';
import { useEffect, useState } from 'react';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('https://sport-elevate-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data.slice(0, 6));
            })
    }, [])
    return (
        <div className='my-20'>
            <Slide><SectionTitle heading='popular Instructor'></SectionTitle></Slide>

            <Fade delay={1e3} cascade damping={1e-1}>
                <div className='grid md:grid-cols-3 gap-5'>
                    {
                        instructors.map(i => <div key={i._id}>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={i.image} alt="Shoes" /></figure>
                            </div>
                        </div>)
                    }
                </div>
            </Fade>


        </div>
    );
};

export default PopularInstructor;