import Image from 'next/image'
import Link from 'next/link'
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
export default function HomeBanner() {
    const container: Variants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }


    const mainTitle: Variants = {
        offscreen: { x: -300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.6, duration: 1 },
        },
    }

    const subTitle: Variants = {
        offscreen: { y: -300, opacity: 0 },
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


    const socialMotion: Variants = {
        offscreen: { y: -300, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.6, duration: 1 },
        },
    }
    const svgMotion: Variants = {
        offscreen: { x: -300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.6, duration: 1 },
        },
    }

    return (
        <motion.div
            key='Main-banner-container'
            initial="offscreen"
            whileInView="onscreen"
            variants={container}
            viewport={{ once: false, amount: 0.5 }}
            className="w-screen h-screen relative pt-40 ">
            <div className="ps-18 flex flex-col relative z-10">

                <motion.div variants={mainTitle} className="text-[146px] font-galderglynn w-fit font-bold text-white leading-none tracking-tight">
                    WHERE WATER MEETS
                    <span className="leading-none tracking-tight flex flex-wrap gap-4">
                        <span className="text-white">PURE</span>
                        <span
                            className="text-transparent ms-4"
                            style={{ WebkitTextStroke: "1.5px white" }}
                        >
                            EXCITEMENT.
                        </span>
                    </span>
                </motion.div>
                <motion.small variants={subTitle} className="max-w-108.75 font-normal text-white text-5 mt-20">
                    Discover premium aquatic entertainment designed for unforgettable group gatherings, celebrations, and corporate escapes.
                </motion.small>
            </div>

            <div className="absolute top-0 w-full h-full bg-linear-to-b from-primary-300/50 to-secondary-300/50 opacity-75 z-4" />
            <video
                src="/videos/Hero-Home.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full absolute top-0 object-cover"
            />
            <motion.div variants={socialMotion} className="absolute inset-s-20 bottom-27 z-10  bg-black/12 backdrop-blur-md rounded-2xl px-6 py-2 gap-5 flex flex-row items-center">
                <Link href="#" aria-label="Instagram Page" className="w-11 h-11 flex items-center justify-center ">
                    <Image
                        src="/images/icons/insta.svg"
                        alt="Instagram Icon"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href="#" aria-label="X Page" className="w-11 h-11 flex items-center justify-center ">
                    <Image
                        src="/images/icons/x.svg"
                        alt="X Icon"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href="#" aria-label="facebook Page" className="w-11 h-11 flex items-center justify-center ">
                    <Image
                        src="/images/icons/facebook.svg"
                        alt="facebook Icon"
                        width={24}
                        height={24}
                    />
                </Link>
            </motion.div>
            <motion.svg variants={svgMotion} className="absolute inset-e-20 bottom-33.25 z-10" width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.750244 4.15267L17.37 9.15267L37.3136 0.819336L58.9193 10.8193L77.2009 2.486L100.469 9.15267L118.75 2.486" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </motion.svg>
            <motion.div variants={socialMotion} className="absolute bottom-26 left-1/2 -translate-x-1/2 z-10 flex flex-col justify-center items-center gap-4.5">
                <div className="bg-black/12 w-24.5 h-24.5 rotate-45 rounded-xl flex items-center justify-center backdrop-blur-md rounded-45">
                    <Image
                        src="/images/icons/smallHeroLogo.svg"
                        alt="Logo"
                        width={26}
                        height={26}
                        className="-rotate-45"
                    />
                </div>
                <div className="w-px h-42.75 border-l border-dashed border-white" />
                <span className="uppercase font-bold text-5 text-white">Dive iN</span>
            </motion.div>
            <div className="w-full absolute bottom-0 z-8 h-89.25 bg-linear-to-b from-primary-400/0 to-secondary2-400" />
        </motion.div>
    )
}
