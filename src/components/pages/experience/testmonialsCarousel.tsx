'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import "swiper/swiper-bundle.css";
import { useRef, useState } from 'react';
import { testimonials } from '@/dummy/testmonials';
import { TestimonialCard } from './testmonialsCard';



export default function TestimonialsCarousel() {
    const packagesRef = useRef<any>(null);
    const [progress, setProgress] = useState(0);

    const totalSlides = testimonials.length;

    const updateProgress = (swiper: any) => {
        const slidesPerView = swiper.params.slidesPerView;
        const maxIndex = totalSlides - slidesPerView;
        const currentProgress = maxIndex > 0
            ? (swiper.activeIndex / maxIndex) * 100
            : 100;

        setProgress(Math.min(currentProgress, 100));
    };


    const mainContainer: Variants = {
        offscreen: { y: 100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
            },
        },
    }

    return (
        <motion.div className="w-full max-w-screen h-fit relative mb-10 mt-8">
            <motion.div variants={mainContainer} className="w-full flex flex-col relative z-10">
                <div className="w-full relative">
                    <div className="absolute -top-10 -left-10 w-56 h-56 bg-black/5 blur-3xl rounded-full" />
                    <div className="absolute top-1/2 -right-14 -translate-y-1/2 w-72 h-72 bg-black/10 blur-3xl rounded-full" />
                    <Swiper
                        ref={packagesRef}
                        onSwiper={updateProgress}
                        onSlideChange={updateProgress}
                        slidesPerView={2}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            1560: {
                                slidesPerView: 4,
                                spaceBetween: 24
                            }
                        }}
                        spaceBetween={32}
                    >
                        {
                            testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <TestimonialCard data={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="flex flex-row items-center gap-10 mt-8">
                    <div className="flex-1 h-3  bg-neutral-300 overflow-hidden">
                        <div
                            className="h-full  bg-secondary-300 transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex-row flex items-center">
                        <button
                            title="Prev Button"
                            aira-label="Prev Button"
                            onClick={() => packagesRef?.current?.swiper?.slidePrev()}
                            className="w-10 h-10 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12H4M10 18L4 12L10 6" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            title="Next Button"
                            aira-label="Next Button"
                            onClick={() => packagesRef?.current?.swiper?.slideNext()}
                            className="w-10 h-10 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12L20 12M14 6L20 12L14 18" stroke="#3B898A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    )
}
