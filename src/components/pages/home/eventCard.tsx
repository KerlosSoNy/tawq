import Image from "next/image";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
export default function EventCard({ event }: {
    event: {
        title: string;
        image: string;
        href: string;
    }
}) {
    const imageReveal: Variants = {
        offscreen: { rotate: -20, z: -50, opacity: 0, scale: 0.8 },
        onscreen: {
            rotate: 0,
            z: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", bounce: 0.3, duration: 1.2 },
        },
    }
    return (
        <motion.div variants={imageReveal} className="w-full h-158.5  rounded-xl overflow-hidden flex flex-col justify-end p-6 relative group">
            <Image
                fill
                className="object-cover"
                alt="Event Image"
                src={event.image}
            />
            <div className="flex flex-col absolute top-0 left-0 w-full h-full bg-linear-to-b opacity-40 from-black/50 to-secondary2-400"></div>
            <span className='font-bold font-galderglynn text-1 group-hover:-translate-y-full group-hover:opacity-0 transition-all duration-500 flex flex-col text-white relative z-10'>
                {
                    event.title.split(' ').map((word, index) => (
                        <span key={index}>
                            {word}
                        </span>
                    ))
                }
            </span>
            <div className="translate-y-full group-hover:translate-y-0 mt-1 absolute top-0 left-0 w-full h-full z-4 bg-black/20 duration-700 transition-all flex flex-col items-center justify-center" >
                <span className='font-bold font-galderglynn text-1 flex flex-col items-center text-center text-white/30 relative z-10'>
                    {
                        event.title.split(' ').map((word, index) => (
                            <span key={index}>
                                {word}
                            </span>
                        ))
                    }
                </span>
                <div className="flex flex-row items-center gap-2.5 cursor-pointer">
                    <span className='font-galderglynn text-5 text-white'>
                        DIVE in
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L20 12M14 6L20 12L14 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </motion.div>
    )
}
