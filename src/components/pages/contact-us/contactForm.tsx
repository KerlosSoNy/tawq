import * as motion from "motion/react-client"
import { Variants } from "motion/react";

export default function ContactForm() {
    const mainForm: Variants = {
        offscreen: { y: 300, x: -300, opacity: 0 },
        onscreen: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.3, duration: 2 },
        },
    }

    return (
        <motion.div variants={mainForm} className='w-full md:mx-auto lg:mx-0 md:w-130 xl:w-140 h-fit md:h-158 bg-white/25 flex flex-col gap-5 backdrop-blur-lg p-3 md:p-8'>
            <input title="Your full name" placeholder="Your full name" className="w-full rounded-sm border border-neutral-400 h-14 bg-white p-6 text-7 text-neutral-600" />
            <input title="Your phone number" placeholder="Your phone number" className="w-full rounded-sm border border-neutral-400 h-14 bg-white p-6 text-7 text-neutral-600" />
            <div className="rounded-sm border border-neutral-400 h-14 bg-white p-6 gap-2.5 flex flex-row items-center">
                <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input title="Your Email" placeholder="Your Email" className="w-full text-7 text-neutral-600 focus:border-0 focus:outline-0 focus:ring-0" />
            </div>
            <input title="Subject" placeholder="Subject" className="w-full rounded-sm border border-neutral-400 h-14 bg-white p-6 text-7 text-neutral-600" />
            <textarea title="Subject" placeholder="Subject" className="w-full rounded-sm border border-neutral-400 h-31.75 bg-white p-6 text-7 text-neutral-600" />
            <div className="flex flex-row items-center gap-4 mt-4">
                <input type="checkbox" className="w-6 h-6 rounded-sm" />
                <span className="text-white text-6 font-normal">
                    I accept the terms and conditions
                </span>
            </div>
            <button className="relative w-full mt-1 md:w-45 xl:w-50 2xl:w-59 h-14 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer">
                <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                <span className="relative z-10 uppercase text-5 font-bold text-white">Subscribe</span>
            </button>
        </motion.div>
    )
}
