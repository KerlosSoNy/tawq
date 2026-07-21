"use client";

import { useState } from "react";
import BookingModal from "./BookingModel";

export default function BookNowButton() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <>
            <button title={"Open Booking Model"} type="button" onClick={() => setIsBookingOpen(!isBookingOpen)} className="relative w-full h-11 shrink-0  flex items-center mt-3 rounded-sm gap-1.5 justify-center border border-primary-100 hover:border-0 overflow-hidden group cursor-pointer ">
                <span className="absolute inset-0 bg-primary-50" />
                <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                <span className="relative z-10 uppercase text-6 font-bold text-neutral-black group-hover:text-white duration-500 transition-colors ease-in-out">Book Now</span>
            </button>
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                onSubmit={({ activityIds, form }) => {
                    console.log(activityIds, form);
                }}
            />
        </>
    );
}