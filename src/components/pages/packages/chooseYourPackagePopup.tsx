'use client'

import { useState } from "react";
import BookingModal from "./popup/BookingModel";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
export default function ChooseYourPackagePopup() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const button: Variants = {
        offscreen: { y: -300, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 90, bounce: 0.2, duration: 1 },
        },
    }

    return (
        <>
            <motion.button title={"Open Booking Model"} type="button" onClick={() => setIsBookingOpen(!isBookingOpen)} variants={button} className="relative w-fit px-6 h-14 mx-auto z-10 flex items-center mt-6 3xl:mt-8 rounded-sm gap-2.5 justify-center border border-primary-100 overflow-hidden group cursor-pointer ">
                <span className="absolute inset-0 bg-primary-50" />
                <span className="absolute inset-0 bg-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                <span className="relative z-10 uppercase text-5 font-bold font-galderglynn text-neutral-black group-hover:text-white duration-500 transition-colors ease-in-out">Start Customizing</span>
                <svg className="relative z-10 group-hover:stroke-white! stroke-primary-400 duration-500 transition-colors ease-in-out" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L20 12M14 6L20 12L14 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.button>
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                onSubmit={({ activityIds, form }) => {
                    // send activityIds + form to your API route here
                    console.log(activityIds, form);
                }}
            />
        </>
    );
}
