"use client";

import { useState } from "react";
import BookingModal from "./bookModel";
import Image from "next/image";

export default function BookNowButton({ isFull }: { isFull?: boolean }) {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <>
            <button title={"Open Booking Model"} type="button" onClick={() => setIsBookingOpen(!isBookingOpen)} aria-label="Get in Touch With Us And Call Us Right" className={`relative mt-6 w-50 3xl:w-59 ${isFull && "w-full! mt-0!"} h-12 3xl:h-14 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer`}>
                <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                <span className="relative z-10 uppercase text-[16px] 3xl:text-5 font-bold text-white">Book Now</span>
                <Image src="/images/icons/Arrow.svg" alt="Tawq Logo" width={24} height={24} className="relative z-10" />
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