import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { PricingPackage, pricingPackages } from "@/dummy/packages";
import PackagesCard from "./packagesCard";
import SeaParticles from "./bubbles";

export default function UniqueExperience({ activeTap }: { activeTap: string }) {
    const container: Variants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
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
    return (
        <motion.div
            id="about-us"
            key='Main-big-section'
            initial="offscreen"
            data-nav-bg="dark"
            whileInView="onscreen"
            variants={container}
            viewport={{ once: true, amount: 0.2 }}
            className="relative max-w-screen w-full pb-16 items-center min-h-[1625px] pt-20 md:pt-20 -mt-px flex flex-col overflow-hidden"
        >
            <div className="w-full rotate-180 absolute top-0 z-6 h-120 3xl:h-125 bg-linear-to-b from-primary-400/0 to-secondary2-400" />
            <SeaParticles />
            <motion.div
                className="absolute inset-0 z-1 isolate bg-secondary2-400 will-change-transform"
            >
                <Image
                    src="/images/packages/middleSection.jpg"
                    alt="Gallery"
                    fill
                    className="object-cover mix-blend-luminosity opacity-100"
                    priority
                />
            </motion.div>
            <div className="w-full absolute bottom-0 z-6 h-full bg-linear-to-b opacity-50 from-[#002023]/0 to-[#002125]" />

            <svg className="flex flex-col relative z-8" width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 4.15267L17.3697 9.15267L37.3134 0.819336L58.919 10.8193L77.2007 2.486L100.468 9.15267L118.75 2.486" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <span className="text-center text-white font-bold font-galderglynn text-[46px] md:text-[90px] lg:text-[128px] relative z-8 leading-12 md:leading-26 lg:leading-30 mt-8">
                Unique
                <br />
                Experiences
            </span>
            <span className="max-w-[95vw] lg:max-w-215.5 text-center text-white font-inter text-5 font-normal z-8 mt-7">
                Select your ideal adventure package and maximize your time on the water. Whether youre solo, with family, or celebrating, we have the perfect experience for you.
            </span>

            <motion.div variants={filter} className="bg-neutral-300 z-8 mt-8 w-38 p-2 h-10.5 rounded-xl gap-2.25 grid grid-cols-2 ">
                <Link href="/packages?type=day" scroll={false} key="day" className={`text-7 ${activeTap === 'day' ? 'bg-primary-400  text-white' : 'bg-transparent text-neutral-600'} duration-500 transition-all ease-in-out rounded-lg h-full flex items-center justify-center cursor-pointer`}>
                    Day
                </Link>
                <Link href="/packages?type=week" scroll={false} className={`text-7 ${activeTap === 'week' ? 'bg-primary-400  text-white' : 'bg-transparent text-neutral-600'} duration-500 transition-all ease-in-out rounded-lg h-full flex items-center justify-center cursor-pointer`}>
                    Week
                </Link>
            </motion.div>
            <motion.div
                className="grid gird-cols-1 md:grid-cols-2 px-3 lg:flex lg:flex-row items-center gap-4 2xl:gap-8 z-8 flex-wrap justify-center mt-10"
            >
                {
                    pricingPackages.map((item: PricingPackage, index: number) => {
                        return (
                            <PackagesCard key={index} item={item} />
                        )
                    })
                }
            </motion.div>
            <span className="z-8 relative uppercase text-white text-5 mt-10">STEP BY STEP GUIDE</span>
            <span className="max-w-183.75 uppercase font-galderglynn font-bold text-3 md:text-1 z-8 text-center text-white">BUILD YOUR CUSTOM PACKAGE</span>
            <span className="max-w-[95vw] md:max-w-200 text-7 md:text-5 font-inter font-normal text-white text-center z-8 mt-2">
                Tailored experiences crafted just for you. From solo explorers to corporate retreats, we design the perfect aquatic journey.
            </span>
            <div className="w-full absolute -bottom-1 z-6 h-200 bg-linear-to-b opacity-100 from-[#002023]/0 to-secondary2-400 to-90%" />
        </motion.div>
    )
}
