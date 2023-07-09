import { Fade, Slide } from "react-awesome-reveal";
import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";



const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://sport-elevate-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data.slice(0, 6))
            })
    }, [])

    return (
        <div>
            <Slide>
                <SectionTitle
                    heading='Popular Classes'
                ></SectionTitle>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        classes.map(i => <div key={i._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={i.image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Total Student : {i.students}</h2>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Fade>

        </div>
    );
};

export default PopularClasses;