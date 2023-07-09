
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/slider/img1.jpg'
import img2 from '../../../assets/slider/img2.jpg'
import img3 from '../../../assets/slider/img3.jpg'
import img4 from '../../../assets/slider/img4.jpg'
import img5 from '../../../assets/slider/img5.jpg'
import img6 from '../../../assets/slider/img6.jpg'
import img7 from '../../../assets/slider/img7.jpg'

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const Slider = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Slider;