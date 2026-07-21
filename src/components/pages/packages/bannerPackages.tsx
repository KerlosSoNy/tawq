import Image from 'next/image'
import Link from 'next/link'
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import DiveButton from '@/components/atoms/diveButton';

export default function PackagesBanner() {
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
            data-nav-bg="dark"
            whileInView="onscreen"
            variants={container}
            viewport={{ once: true, amount: 0.5 }}
            className="w-screen h-screen relative pt-40 ">
            <div className="absolute top-0 left-0 w-full h-full layerGradient z-3" />
            <div className="ps-10 xl:ps-18 flex flex-col relative z-10">
                <motion.div variants={mainTitle} className="text-[48px] md:text-[60px] lg:text-[80px] 2xxl:text-[120px] 3xl:text-[146px] font-galderglynn w-fit font-bold text-white leading-none tracking-tight">
                    Unlock Your
                    <span className="leading-none tracking-tight flex flex-wrap gap-2 md:gap-4">
                        <span
                            className="text-transparent ms-1 md:ms-4"
                            style={{ WebkitTextStroke: "1.5px white" }}
                        >
                            Adventure
                        </span>
                        <span className="text-white ms-1">Awaits</span>
                    </span>
                </motion.div>
            </div>

            <video
                src="/videos/packages-banner.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full absolute top-0 object-cover"
            />
            <motion.div variants={socialMotion} className="absolute inset-s-6 lg:inset-s-20 bottom-10 2xxl:bottom-15 3xl:bottom-27 z-10  bg-black/12 backdrop-blur-md rounded-2xl px-3 lg:px-6 py-1 lg:py-2 gap-5 flex flex-row items-center">
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
            <motion.svg variants={svgMotion} className="absolute inset-e-6 lg:inset-e-20 bottom-14 2xxl:bottom-24 3xl:bottom-33.25 z-10" width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.750244 4.15267L17.37 9.15267L37.3136 0.819336L58.9193 10.8193L77.2009 2.486L100.469 9.15267L118.75 2.486" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </motion.svg>
            <motion.div variants={socialMotion} className="absolute bottom-36 md:bottom-10 2xxl:bottom-20 3xl:bottom-26 left-1/2 -translate-x-1/2 z-10 flex flex-col justify-end items-center gap-2 3xl:gap-4.5">
                <div className="bg-black/12 w-16 3xl:w-24.5 h-16 3xl:h-24.5 rotate-45 rounded-xl flex items-center justify-center backdrop-blur-md rounded-45">
                    <Image
                        src="/images/icons/smallHeroLogo.svg"
                        alt="Logo"
                        width={26}
                        height={26}
                        className="-rotate-45"
                    />
                </div>
                <div className="w-px h-20 3xl:h-42.75 border-l border-dashed border-white" />
                <DiveButton title="Dive in" id="about-us" description="Scroll to About us section" />
            </motion.div>
            <div className="w-full absolute bottom-0 z-8 h-89.25 bg-linear-to-b from-primary-400/0 to-secondary2-400" />
        </motion.div>
    )
}
