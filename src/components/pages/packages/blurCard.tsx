"use client"
import * as motion from "motion/react-client"
import { Variants } from "motion/react";

const card: Variants = {
    offscreen: {
        opacity: 0,
        y: 40,
        scale: 0.95,
        filter: "blur(8px)",
    },
    onscreen: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6,
        },
    },
}

export default function BlurCard({ item }: { item: any }) {
    return (
        <motion.div
            variants={card}
            className="w-100 md:h-77.75 relative z-10 p-6 gap-2 md:gap-0 h-fit flex flex-col rounded-sm backdrop-blur-[20px] bg-white/20"
        >
            <div className="flex flex-row items-center justify-between w-full">
                <span className="font-bold text-3 md:text-1 font-galderglynn text-white">
                    {item?.id}
                </span>
                {item?.icon}
            </div>
            <span className="text-white mt-1 text-4 md:text-2 font-bold font-galderglynn line-clamp-2">
                {item?.title || ""}
            </span>
            <span className="line-clamp-3 mt-2 text-white text-5 font-normal font-inter">
                {item?.description || ""}
            </span>
        </motion.div>
    )
}