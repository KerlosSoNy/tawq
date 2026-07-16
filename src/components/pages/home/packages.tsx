'use client'
import Image from "next/image";
import { useState } from "react";

export default function Packages() {
    const [type, setType] = useState('day');
    return (
        <div className="min-h-270 relative pt-80 pb-20">
            <div className="absolute w-241.75 h-210.75 -top-4 z-2 right-[-14%] rotate-45">
                <div className="relative w-full h-full">
                    <Image
                        alt="Surface"
                        fill
                        src='/images/home/running.png'
                    />
                </div>
            </div>
            <span className="font-galderglynn packages-text absolute left-1/2 -translate-x-1/2 top-4  w-fit  font-bold text-[300px] z-1">
                Packages
            </span>
            <div className="flex flex-row gap-11.25 relative z-20">
                <div className="flex flex-col max-w-134.5">
                    <div className="bg-neutral-300 w-38 p-2 h-10.5 rounded-xl gap-2.25 grid grid-cols-2 ">
                        <div onClick={() => setType('day')} className={`text-7 ${type === 'day' ? 'bg-primary-400  text-white' : 'bg-transparent text-neutral-600'} duration-500 transition-all ease-in-out rounded-lg h-full flex items-center justify-center cursor-pointer`}>
                            Day
                        </div>
                        <div onClick={() => setType('week')} className={`text-7 ${type === 'week' ? 'bg-primary-400  text-white' : 'bg-transparent text-neutral-600'} duration-500 transition-all ease-in-out rounded-lg h-full flex items-center justify-center cursor-pointer`}>
                            Week
                        </div>
                    </div>
                    <span className="font-bold font-galderglynn text-1 text-black">
                        Unique Experiences
                    </span>
                    <span className="text-5 leading-8 mt-8">
                        Select your ideal adventure package and maximize your time on the water. Whether you re solo, with family, or celebrating, we have the perfect experience for you.
                    </span>
                </div>
            </div>
        </div>
    )
}
