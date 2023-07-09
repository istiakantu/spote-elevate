import img from '../../../assets/training.jpg'
import { Parallax } from 'react-parallax';
import SectionTitle from '../../../components/SectionTitle';
import { Slide } from 'react-awesome-reveal';


const Training = () => {
    return (

        <div>
            <Slide><SectionTitle heading="don't miss"></SectionTitle></Slide>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[500px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="bg-black rounded-3xl bg-opacity-30 px-40 py-20 w-[1020px]">
                            <h2 className="mb-5 text-5xl font-bold uppercase">New training times for youngsters</h2>
                            <p className="mb-5">November 11, 2023</p>
                            <button className='btn btn-primary'>Details</button>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Training;