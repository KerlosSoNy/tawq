'use client'
import Image from 'next/image'
import SecondSection from './secondSection'
import * as motion from "motion/react-client"
import { Variants, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from 'react';
import SeaParticles from '../packages/bubbles';

export default function BigSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.4]);

    const surfaceX = useTransform(smoothProgress, [0, 1], ["-10%", "5%"]);
    const surfaceY = useTransform(smoothProgress, [0, 1], ["0%", "-5%"]);

    const hiddenTitleScale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1, 1.1]);
    const hiddenTitleOpacity = useTransform(smoothProgress, [0, 0.3, 0.8, 1], [0.03, 0.15, 0.15, 0.05]);

    const container: Variants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const surface: Variants = {
        offscreen: { x: -300, opacity: 0, rotateY: 15 },
        onscreen: {
            x: 0,
            opacity: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.8,
            },
        },
    }

    const subTitle: Variants = {
        offscreen: { y: -60, opacity: 0, filter: "blur(10px)" },
        onscreen: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    }

    const subTitle2: Variants = {
        offscreen: { y: -60, opacity: 0, filter: "blur(10px)" },
        onscreen: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    }

    const hiddenTitle: Variants = {
        offscreen: { y: -80, opacity: 0, scale: 0.9 },
        onscreen: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", bounce: 0.5, duration: 1.5, delay: 0.1 },
        },
    }

    const title: Variants = {
        offscreen: { x: -120, opacity: 0, skewX: -5 },
        onscreen: {
            x: 0,
            opacity: 1,
            skewX: 0,
            transition: { type: "spring", bounce: 0.3, duration: 1.4 },
        },
    }

    const button: Variants = {
        offscreen: { y: -200, opacity: 0, scale: 0.8 },
        onscreen: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", bounce: 0.6, duration: 1.2 },
        },
    }

    const imageReveal: Variants = {
        offscreen: { rotate: -60, z: -100, opacity: 0, scale: 0.8 },
        onscreen: {
            rotate: 0,
            z: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", bounce: 0.3, duration: 1.2 },
        },
    }

    return (
        <motion.div
            id="about-us"
            ref={sectionRef}
            key='Main-big-section'
            initial="offscreen"
            data-nav-bg="dark"
            whileInView="onscreen"
            variants={container}
            viewport={{ once: true, amount: 0.2 }}
            className="relative max-w-screen w-full pb-16 2xl:min-h-[2299px] 3xl:min-h-[2529px] pt-40 md:pt-66 flex flex-col overflow-hidden"
        >
            <div className="w-full rotate-180 absolute top-0 z-6 h-120 3xl:h-125 bg-linear-to-b from-primary-400/0 to-secondary2-400" />
            <div className="w-full rotate-180 absolute top-0 z-2 h-120 3xl:h-125 bg-linear-to-b from-primary-400/0 to-secondary2-400" />
            <SeaParticles />
            <motion.div
                key="Surface"
                variants={surface}
                style={{ x: surfaceX, y: surfaceY }}
                className="absolute w-120 lg:w-220 2xl:w-240.5 3xl:w-266.5 h-136.75 lg:h-236.75 3xl:h-256.75 top-10 -left-20 lg:-left-70.25 2xl:-left-80.25 z-4 overflow-hidden will-change-transform"
            >
                <Image
                    src="/images/home/surface.png"
                    alt="Gallery"
                    fill
                    className="object-cover z-5"
                    priority
                />
            </motion.div>

            <motion.span
                key='hiddenTitle'
                variants={hiddenTitle}
                style={{ scale: hiddenTitleScale, opacity: hiddenTitleOpacity }}
                className="font-galderglynn absolute top-22 w-fit left-[15%] xl:left-[6%] 3xl:left-[9%] font-bold text-[70px] md:text-[140px] xl:text-[240px] 3xl:text-[300px] faqs-text z-2 will-change-transform pointer-events-none"
            >
                About us
            </motion.span>

            <div className="flex flex-col pe-10 md:pe-0 ps-10 lg:ps-70 mx-auto z-15">
                <motion.div variants={title} className="flex flex-col items-start md:max-w-165 3xl:max-w-217.5 relative md:ms-52 text-white font-galderglynn">
                    <svg width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.750244 4.15267L17.37 9.15267L37.3136 0.819336L58.9193 10.8193L77.2009 2.486L100.469 9.15267L118.75 2.486" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-[38px] md:text-[50px] lg:text-[60px] 3xl:text-[80px] font-bold leading-14 md:leading-18 3xl:leading-24 mt-6">Redefining Aquatic Leisure.</span>
                </motion.div>

                <div className="flex flex-col md:flex-row items-start -ms-5 xl:ms-10 3xl:ms-20 mt-15.5 gap-20 2xl:gap-30 3xl:gap-42.5 relative">
                    <motion.div
                        className="mx-auto w-66.25 xl:w-86.25 3xl:w-106.25 h-85.5 xl:h-115.5 3xl:h-135.5 overflow-visible! relative"
                    >
                        <motion.div variants={imageReveal} className="w-80 xl:w-106.25 h-115.5 xl:h-135.5 overflow-visible! relative">
                            <Image
                                src="/images/home/topBig.png"
                                alt="Gallery"
                                width={425}
                                height={542}
                                className="object-cover w-66.25 xl:w-86.25 3xl:w-106.25 h-85.5 xl:h-115.5 3xl:h-135.5 z-5 relative"
                            />
                        </motion.div>
                        <svg className="absolute bottom-20 3xl:bottom-26 -right-10 xl:-right-15 z-6 w-20 xl:w-30" width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.750244 4.15267L17.37 9.15267L37.3136 0.819336L58.9193 10.8193L77.2009 2.486L100.469 9.15267L118.75 2.486" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <svg className="absolute bottom-4 3xl:bottom-8 -right-10 xl:-right-15 z-1 w-20 xl:w-30" width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.750244 4.15267L17.37 9.15267L37.3136 0.819336L58.9193 10.8193L77.2009 2.486L100.469 9.15267L118.75 2.486" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </motion.div>

                    <div className="flex flex-col w-100.25 2xl:w-113.25 3xl:w-143.25 pt-2 2xl:pt-11 relative z-10">
                        <motion.span key="subTitle-1" variants={subTitle} className="text-[16px] md:text-[14px] 2xl:text-[16px] 3xl:text-5 text-white opacity-100 leading-6 3xl:leading-8 z-5 relative">
                            TAWQ Entertainment is the experiential side of the brand, where technology is used to create immersive, large-scale, and emotionally driven experiences. We focuses on transforming spaces through water sport, light, motion, and digital interaction delivering moments that feel futuristic, cinematic, and memorable Rather than showcasing technology itself,
                        </motion.span>
                        <motion.span key="subTitle-2" variants={subTitle2} className="text-[16px] md:text-[14px] 2xl:text-[16px] 3xl:text-5 text-white opacity-100 leading-6 3xl:leading-8 mt-11 z-5 relative">
                            TAWQ Entertainment uses it as a gateway to another world, blending innovation with imagination to create experiences that are felt, not just seen
                        </motion.span>
                        <motion.button
                            variants={button}
                            whileHover={{ scale: 1.05, gap: "12px" }}
                            whileTap={{ scale: 0.98 }}
                            className="relative w-59 h-14 mt-11 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer will-change-transform"
                        >
                            <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                            <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 uppercase text-5 font-bold text-white">Explore More</span>
                            <svg className="relative z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12L20 12M14 6L20 12L14 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>

            <motion.div
                className="absolute inset-0 z-1 isolate bg-secondary2-400 will-change-transform"
                style={{
                    scale: bgScale,
                }}
            >
                <Image
                    src="/images/home/bg-bigSection.jpg"
                    alt="Gallery"
                    fill
                    className="object-cover mix-blend-luminosity opacity-100"
                    priority
                />
            </motion.div>

            <SecondSection />

            <div className="w-full absolute bottom-0 z-6 h-125 bg-linear-to-b from-[#002023]/0 to-[#002125]" />
            <div className="w-full absolute bottom-0 z-6 h-full bg-linear-to-b opacity-50 from-[#002023]/0 to-[#002125]" />
        </motion.div>
    )
}