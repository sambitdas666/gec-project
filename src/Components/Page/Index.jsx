import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import btnArrow from '../../assets/btn-arrow.svg';

function Index() {
    return (
        <>
            {/* Hero Slider */}
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                navigation={{
                    prevEl: ".swiper-prev",
                    nextEl: ".swiper-next",
                }}
                className="overflow-hidden"
            >
                <SwiperSlide>
                    <div className="hero hero1 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-white">THE KINGDOM OF ICE</h2>
                            <h1 className="text-white">Green Land</h1>
                            <button className="btn text-white hero-btn mt-5">
                                Learn more <img src={btnArrow} alt="arrow" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero hero2 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-white">ANOTHER SLIDE</h2>
                            <h1 className="text-white">Slide Title</h1>
                            <button className="btn text-white hero-btn mt-5">
                                Learn more <img src={btnArrow} alt="arrow" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero hero3 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-white">LAST SLIDE</h2>
                            <h1 className="text-white">Epic Land</h1>
                            <button className="btn text-white hero-btn mt-5">
                                Learn more <img src={btnArrow} alt="arrow" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Swiper Navigation Buttons */}
                <i className="bi bi-arrow-left-short swiper-btn swiper-prev"></i>
                <i className="bi bi-arrow-right-short swiper-btn swiper-next"></i>
            </Swiper>
        </>
    );
}

export default Index;
