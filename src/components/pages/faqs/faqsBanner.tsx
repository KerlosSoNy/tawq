import Image from 'next/image'
import Link from 'next/link'
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import DiveButton from '@/components/atoms/diveButton';


export default function FaqsBanner() {

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
                    Frequently
                    <span className="leading-none tracking-tight flex flex-wrap gap-0 mt-1 md:mt-0 md:gap-4">
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: "1.5px white" }}
                        >
                            Asked
                        </span>
                        <span className="text-white">Questions</span>
                    </span>
                </motion.div>
            </div>
            <div className="absolute top-0 w-full h-full bg-linear-to-b from-primary-300/50 to-secondary-300/50 opacity-75 z-4" />
            <video
                src="/videos/faqsVideo.mp4"
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
            <motion.div variants={socialMotion} className="absolute bottom-36 md:bottom-14 2xxl:bottom-24 3xl:bottom-32 left-1/2 -translate-x-1/2 z-10 flex flex-col justify-center items-center gap-2 3xl:gap-4.5">
                <DiveButton title="Dive in" id="faqs-section" description="Scroll to FAQs" />
            </motion.div>
            <svg className="w-full h-25 absolute -bottom-14 md:-bottom-11 z-10" width="1920" height="99" viewBox="0 0 1920 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M677.417 0.316827C769.23 -2.57033 884.581 15.2467 939.712 14.4234C994.974 13.615 1069.12 10.8421 1147.29 15.1468C1214.59 18.8479 1295.51 12.0473 1371.43 13.6474C1384.06 13.9 1395.74 14.3983 1407.97 15.2062C1494.22 21.1758 1616.41 27.2479 1672.82 31.0469C1729.39 34.9091 1743.18 35.6645 1797.15 29.1502C1828.13 25.377 1871.04 24.5456 1907.82 29.6516C1926.33 32.2329 1922.58 37.8978 1904.4 41.7525C1877.81 47.3922 1855.55 46.3369 1842.11 53.9214C1815.26 69.0593 1803.65 74.9313 1768.08 68.8936C1732.76 62.7863 1716.87 81.2036 1696.34 79.9555C1675.82 78.5816 1675.76 68.5283 1572.06 79.3177C1468.69 89.8089 1411.84 92.4234 1372.4 94.8829C1372.26 94.8918 1372.12 94.9012 1371.97 94.9101C1332.68 97.3891 1250.19 88.6193 1186.19 91.6727C1121.93 94.8535 991.881 90.7447 939.181 95.5547C886.773 100.396 886.746 88.6403 844.39 81.6059C801.967 74.5642 768.445 103.181 716.716 98.4738C665.164 93.7689 657.49 78.2857 598.38 81.0694C539.204 83.8515 480.099 72.6981 453.709 78.754C427.256 84.8107 424.768 65.6614 387.271 69.5528C349.859 73.4505 327.244 70.7605 294.532 64.2842C261.915 57.7859 161.408 51.8294 124.846 59.3292C88.2457 66.7952 46.6453 53.4288 21.584 50.2429C13.777 49.2496 7.6295 47.9009 2.91686 46.5011C0.920959 45.9076 -0.000974507 44.6703 7.72945e-07 43.4505V43.4476C0.00273679 41.9287 1.43624 40.4374 4.00386 40.2491C16.4723 39.3349 35.0731 36.9097 57.0845 31.4637C98.1352 21.321 102.588 32.6772 157.969 27.6751C213.335 22.6973 246.763 12.3655 311.849 19.7143C376.896 27.0899 392.223 -1.3374 483.98 15.7934C575.692 32.9569 585.857 3.22374 677.417 0.316827Z" fill="#004C54" />
            </svg>
            <div className="w-full absolute -bottom-1 z-4 h-200 bg-linear-to-b opacity-100 from-[#002023]/0 to-secondary2-400 to-90%" />
        </motion.div>
    )
}
