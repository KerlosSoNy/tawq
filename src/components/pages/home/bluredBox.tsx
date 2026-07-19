import * as motion from "motion/react-client"
import { Variants } from "motion/react";

export default function BluredBox({
    icon, title, description, className = ""
}: {
    className?: string
    icon: any;
    title: string;
    description: string;
}) {
    const box: Variants = {
        offscreen: {
            x: 200,
            opacity: 0,
            scale: 0.95,
            filter: "blur(6px)",
        },
        onscreen: {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                bounce: 0.05,
                duration: 1,
                stiffness: 100,
            },
        },
    }
    return (
        <motion.div
            variants={box}
            className={`w-full h-full max-h-120 md:max-h-140 gap-4 3xl:max-h-145.5 bg-white/24 backdrop-blur-[20px] p-3 xl:p-6 3xl:p-8 flex flex-col ${className}`}>
            {
                icon
            }
            <span className="font-bold font-galderglynn text-7 md:text-4 xl:text-3 3xl:text-2 text-white">
                {title}
            </span>
            <span className="font-bold text-[12px] md:text-[14px] 3xl:text-5 text-white">
                {description}
            </span>
        </motion.div>
    )
}
