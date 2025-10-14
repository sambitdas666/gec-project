import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// Import JSON as default - your file contains an array directly
import destinations from '../../Destination.json';

import btnArrow from '../../assets/btn-arrow.svg';
import plane from '../../assets/plane.svg';

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

            {/* Destinations */}
            <div className="destination py-5 my-5">
                <div className='section-title'>
                    <div className="text-center d-flex flex-column justify-content-center align-items-center gap-3">
                        <span>
                            <div className="d-flex align-items-center gap-2">
                                <img src={plane} className='img-fluid' alt="plane icon" />
                                <span>Travel Destinations</span>
                            </div>
                        </span>
                        <h1>Popular Destinations</h1>
                        <p>Explore the world's most popular destinations for your next adventure and create unforgettable memories</p>
                    </div>
                </div>
                <div className="destinations-wrapper mt-5">
                    <Splide
                        hasTrack={false}
                        options={{
                            type: 'loop',
                            perPage: 3,
                            pagination: false,
                            gap: 50,
                            arrows: false,
                            autoScroll: {
                                speed: 1,
                                autoStart: true,
                            },
                            breakpoints: {
                                1199: { perPage: 3 },
                                991: { perPage: 2 },
                                767: { perPage: 2 },
                                575: { perPage: 1 },
                                0: { perPage: 1 },
                            }
                        }}
                        extensions={{ AutoScroll }}
                    >
                        <SplideTrack>
                            {destinations && destinations.map((destination) => (
                                <SplideSlide key={destination.id}>
                                    <div className='dest-card position-relative'>
                                        <div className='dest-img overflow-hidden rounded'>
                                            {/* Use destination.img (not destination.image) */}
                                            <img src={destination.img} className='img-fluid w-100' alt={destination.name} />
                                        </div>
                                        <div className='dest-content position-absolute bottom-0 start-0 end-0 text-white p-3'>
                                            <h3>{destination.name}</h3>
                                            <p>{destination.description}</p>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <span className='badge bg-primary'>{destination.price}</span>
                                                <span className='badge bg-secondary'>{destination.days}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>
                </div>
            </div>
        </>
    );
}

export default Index;
