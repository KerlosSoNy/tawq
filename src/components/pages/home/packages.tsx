'use client'
import Image from "next/image";
import { useState } from "react";
import PackagesCarousel from "./packagesCarousel";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
export default function Packages() {
    const container: Variants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    }
    const [type, setType] = useState('day');


    const mainTitle: Variants = {
        offscreen: { x: -300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, bounce: 0.2, duration: 1 },
        },
    }
    const subTitle: Variants = {
        offscreen: { x: -300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, bounce: 0.2, duration: 1 },
        },
    }
    const filter: Variants = {
        offscreen: { y: -300, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 90, bounce: 0.2, duration: 1 },
        },
    }
    const button: Variants = {
        offscreen: { y: -300, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 90, bounce: 0.2, duration: 1 },
        },
    }
    const image: Variants = {
        offscreen: { x: 300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 90, bounce: 0.2, duration: 1 },
        },
    }

    const smallDescription: Variants = {
        offscreen: { x: 100, y: 0, opacity: 0 },
        onscreen: {
            y: [null, -20, 0],
            x: [null, -20, 0],
            opacity: [null, 1, 1],
            transition: {
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
            },
        },
    }

    return (
        <motion.div
            key='Main-Packages-container'
            initial="offscreen"
            whileInView="onscreen"
            variants={container}
            viewport={{ once: true }}
            className="min-h-fit pb-10 px-3 md:px-10 lg:px-0 lg:pb-0 lg:min-h-240 3xl:min-h-270 relative pt-40 md:pt-45 3xl:pt-80 max-w-full overflow-hidden -mb-20 flex flex-col items-start lg:items-center">
            <div className="absolute w-120 md:w-160 xl:w-220.75 3xl:w-241.75 h-100 md:h-130 xl:h-180 3xl:h-210.75 -top-6 md:top-0 xl:-top-4 z-2 right-[-38%] md:right-[-24%] 3xl:right-[-14%] rotate-45">
                <motion.div variants={image} className="relative w-full h-full">
                    <Image
                        alt="Surface"
                        fill
                        src='/images/home/running.png'
                    />
                </motion.div>
            </div>
            <motion.span variants={mainTitle} className="font-galderglynn packages-text absolute left-1/2 -translate-x-1/2 top-4  w-fit  font-bold text-[72px] md:text-[140px] lg:text-[170px] xl:text-[230px] 3xl:text-[300px] z-1">
                Packages
            </motion.span>
            <div className=" flex flex-col lg:flex-row gap-20 2xl:gap-28 relative z-20 items-start lg:items-center justify-center">
                <div className="flex flex-col max-w-120 lg:max-w-110 3xl:max-w-134.5 xl:pt-36">
                    <motion.div variants={filter} className="bg-neutral-300 w-38 p-2 h-10.5 rounded-xl gap-2.25 grid grid-cols-2 ">
                        <div onClick={() => setType('day')} className={`text-7 ${type === 'day' ? 'bg-primary-400  text-white' : 'bg-transparent text-neutral-600'} duration-500 transition-all ease-in-out rounded-lg h-full flex items-center justify-center cursor-pointer`}>
                            Day
                        </div>
                        <div onClick={() => setType('week')} className={`text-7 ${type === 'week' ? 'bg-primary-400  text-white' : 'bg-transparent text-neutral-600'} duration-500 transition-all ease-in-out rounded-lg h-full flex items-center justify-center cursor-pointer`}>
                            Week
                        </div>
                    </motion.div>
                    <motion.span variants={subTitle} className="font-bold font-galderglynn text-2 3xl:text-1 mt-6 3xl:mt-8 text-black">
                        Unique Experiences
                    </motion.span>
                    <motion.span variants={smallDescription} className="text-5 text-neutral-600 leading-8 mt-6 3xl:mt-8 font-light">
                        Select your ideal adventure package and maximize your time on the water. Whether you re solo, with family, or celebrating, we have the perfect experience for you.
                    </motion.span>
                    <motion.button variants={button} className="relative w-59 h-14  flex items-center mt-6 3xl:mt-8 rounded-sm gap-1.5 justify-center border border-primary-100 overflow-hidden group cursor-pointer ">
                        <span className="absolute inset-0 bg-primary-50" />
                        <span className="absolute inset-0 bg-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                        <span className="relative z-10 uppercase text-5 font-bold font-galderglynn text-neutral-black group-hover:text-white duration-500 transition-colors ease-in-out">Customized</span>
                        <svg className="relative z-10 group-hover:stroke-white! stroke-primary-400 duration-500 transition-colors ease-in-out" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12L20 12M14 6L20 12L14 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.button>
                </div>
                <PackagesCarousel />
            </div>
        </motion.div >
    )
}
