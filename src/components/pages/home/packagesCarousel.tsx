'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import "swiper/swiper-bundle.css";
import { useRef, useState } from 'react';
import Image from 'next/image';
import BookNowButton from '../packages/popup/BookNow';

const PACKAGES = [
    { title: 'Starter', price: '$19/mo', desc: 'For small teams getting going.' },
    { title: 'Growth', price: '$49/mo', desc: 'For teams scaling up fast.', isRecommend: true },
    { title: 'Pro', price: '$99/mo', desc: 'Advanced tools, priority support.' },
    { title: 'Enterprise', price: 'Custom', desc: 'Dedicated infrastructure & SLAs.' },
    { title: 'Custom', price: 'Contact us', desc: 'Built around your requirements.', isRecommend: true },
];

export default function PackagesCarousel() {
    const packagesRef = useRef<any>(null);
    const [progress, setProgress] = useState(0);

    const totalSlides = PACKAGES.length;
    const updateProgress = (swiper: any) => {
        const width = typeof window !== 'undefined' ? window.innerWidth : 0;

        if (width < 620) {
            setProgress(((swiper.activeIndex + 1) / (totalSlides)) * 100);
        } else {
            setProgress(((swiper.activeIndex + 1) / (totalSlides - 1)) * 100);
        }
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
    const logo: Variants = {
        offscreen: { x: 100, y: -100, opacity: 0 },
        onscreen: {
            y: [null, -20, 0],
            x: [null, -20, 0],
            opacity: [null, 1, 1],
            transition: {
                ease: [0.34, 1.56, 0.64, 1],
                duration: 3,
            },
        },
    }

    return (
        <motion.div className="w-fit max-w-screen h-fit relative mb-20 lg:mb-0 mt-4 lg:mt-22">
            <div className="absolute -top-18 -left-22 w-42.5 h-42.5">
                <motion.div variants={logo} className="w-full h-full relative">
                    <Image
                        alt="Surface"
                        fill
                        src='/images/logos/smallLogo.png'
                    />
                </motion.div>
            </div>
            <motion.div variants={mainContainer} className="w-fit max-w-[95vw] md:max-w-[91vw] flex flex-col relative z-10 overflow-visible">
                <div className="w-full lg:w-100 xl:w-150 2xl:w-207.5 h-105.25 overflow-visible relative">
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
                                spaceBetween: 32
                            },
                            640: {
                                slidesPerView: 1.7,
                                spaceBetween: 32
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 32
                            },
                            1280: {
                                slidesPerView: 1.5,
                                spaceBetween: 32
                            },
                            1440: {
                                slidesPerView: 2,
                                spaceBetween: 32
                            }
                        }}
                        spaceBetween={32}
                        className="py-5!"
                    >
                        {
                            PACKAGES.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col gap- w-100 h-102.25 p-8 bg-white rounded-xl border border-neutral-400 shadow-[0_8px_16px_0_rgba(164,164,164,0.30)]">
                                        {
                                            item?.isRecommend && (
                                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-row h-8 items-center gap-2.5 px-4 py-2 bg-secondary-300 rounded-xl">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.33325 13.3337V9.33366M3.33325 9.33366V2.66699H12.6666L9.99992 6.00033L12.6666 9.33366H3.33325Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span className="text-white text-7 font-inter font-normal">Recommend</span>
                                                </div>

                                            )
                                        }
                                        <span className="text-5 font-normal text-neutral-black">Adventure Starter</span>
                                        <div className='flex flex-row gap-5 items-center'>
                                            <span className="text-2 font-galderglynn text-neutral-black">1500 SAR</span>
                                            <div className='flex flex-row gap-2.5 items-center'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="#3B898A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 6.5V12L16 14" stroke="#3B898A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="text-7 font-normal text-neutral-black">Half Day</span>
                                            </div>
                                        </div>
                                        <span className="text-neutral-500 shrink-0 text-6 font-normal">Perfect for first-time visitors</span>
                                        <BookNowButton />
                                        <div className="flex flex-col p-4 gap-2 mt-3 rounded-xl border border-neutral-400 bg-white/12">
                                            <span className="font-normal text-7 text-neutral-500">Include</span>
                                            <div className="flex flex-row items-center gap-3">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 13L10 16L17 9" stroke="#3B898A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="text-neutral-black font-inter font-normal text-7">
                                                    Tour of 3 island in jet ski
                                                </span>
                                            </div>
                                            <div className="flex flex-row items-center gap-3">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 13L10 16L17 9" stroke="#3B898A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="text-neutral-black font-inter font-normal text-7">
                                                    Tour of 3 island in jet ski
                                                </span>
                                            </div>
                                            <div className="flex flex-row items-center gap-3">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 13L10 16L17 9" stroke="#3B898A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="text-neutral-black font-inter font-normal text-7">
                                                    Tour of 3 island in jet ski
                                                </span>
                                            </div>
                                            <div className="flex flex-row items-center gap-3">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 13L10 16L17 9" stroke="#3B898A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="text-neutral-black font-inter font-normal text-7">
                                                    Tour of 3 island in jet ski
                                                </span>
                                            </div>

                                        </div>
                                    </div>
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
