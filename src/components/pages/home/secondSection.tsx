import Image from "next/image";
import EventCard from "./eventCard";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
export default function SecondSection() {
    const sections = [
        {
            title: 'Marine boats',
            image: '/images/home/events/event-1.png',
            href: '#'
        },
        {
            title: 'Jet SKI',
            image: '/images/home/events/event-2.png',
            href: '#'
        },
        {
            title: 'Parasailing',
            image: '/images/home/events/event-3.png',
            href: '#'
        }
    ]
    const title: Variants = {
        offscreen: { x: -60, opacity: 0 },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2, stiffness: 120, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    }

    const title2: Variants = {
        offscreen: { x: -60, opacity: 0 },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    }
    const button: Variants = {
        offscreen: { y: -200, opacity: 0, scale: 0.8 },
        onscreen: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", bounce: 0.6, duration: 0.5 },
        },
    }
    const logo: Variants = {
        offscreen: { x: 200, opacity: 0, scale: 0.8 },
        onscreen: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", bounce: 0.3, duration: 1 },
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


    return (
        <motion.div className="flex flex-col px-4 lg:px-10 3xl:px-20 relative z-7 mt-30">
            <div className="2xl:px-[43.5px] flex flex-col md:flex-row items-start justify-between">
                <motion.div variants={logo} className="mx-auto md:mx-0 mb-4 md:mb-0">
                    <Image
                        src="/images/logos/simpleWhiteLogo.svg"
                        alt="Tawq Logo"
                        width={186}
                        height={186}
                        loading="eager"
                        className="w-30.53 xl:w-46.5 h-30.5 3xl:h-46.5"
                    />
                </motion.div>
                <div className="flex flex-col text-[48px] mx-auto md:mx-auto md:text-[60px] xl:text-[80px] 3xl:text-[128px] font-galderglynn text-white leading-15 xl:leading-20 3xl:leading-32">
                    <motion.span variants={title2} key="title">Live The</motion.span>
                    <motion.span variants={title} key="title2" className="ms-10 md:ms-25 xl:ms-45">adventure</motion.span>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-10 3xl:gap-17 mt-16">
                <EventCard event={sections[0]} />
                <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col mb-7 xl:mb-11">
                        <motion.span variants={subTitle} className="md:max-w-85.25 text-white text-7 xl:text-5 leading-5 xl:leading-8">
                            Using light, water, motion, and digital interaction to craft experiences that are cinematic, large-scale, and emotionally unforgettable.
                        </motion.span>
                        <motion.button variants={button} className="relative w-59 h-14 mt-6 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer transition-all duration-300">
                            <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                            <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                            <span className="relative z-10 uppercase text-5 font-bold text-white">Explore More</span>
                        </motion.button>
                    </div>
                    <EventCard event={sections[1]} />
                </div>
                <EventCard event={sections[2]} />
            </div>
        </motion.div>
    )
}
