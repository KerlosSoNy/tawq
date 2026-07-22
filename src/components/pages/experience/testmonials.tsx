import Image from "next/image";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import TestimonialsCarousel from "./testmonialsCarousel";
export default function Testmonials() {
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
    return (
        <motion.div className="flex flex-col max-w-sceen overflow-hidden px-6 3xl:px-31 pb-10 3xl:pb-25">
            <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                <Image
                    alt="logo"
                    width="186"
                    height="186"
                    src="/images/logos/logoActivites.svg"
                    className="w-30.5 xl:w-46.5 h-30.5 xl:h-46.5"
                />
                <div className="flex flex-col text-[48px] text-center md:text-start md:text-[60px] xl:text-[80px] 3xl:text-[128px] font-galderglynn text-neutral-black leading-15 xl:leading-20 3xl:leading-32">
                    <motion.span variants={title2} key="title" className="font-bold">Customer</motion.span>
                    <motion.span variants={title} key="title2" className="font-bold  md:ms-55 xl:ms-75">Reviews</motion.span>
                </div>
            </div>
            <TestimonialsCarousel />
        </motion.div>
    )
}
