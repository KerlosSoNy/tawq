"use client"
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import { PricingPackage } from '@/dummy/packages'
import BookNowButton from './popup/BookNow'

const card: Variants = {
    offscreen: {
        opacity: 0,
        y: 50,
        scale: 0.96,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 90,
            damping: 16,
            duration: 0.6,
        },
    },
}

export default function PackagesCard({ item, index = 0 }: { item: PricingPackage; index?: number }) {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={card}
            transition={{ delay: index * 0.15 }}
            className="flex flex-col shrink-0 w-full lg:w-100 p-8 h-102.25 packages-card"
        >
            <span className="text-white text-5 font-normal">{item?.name}</span>
            <div className='flex flex-row gap-5 items-center'>
                <span className="text-2 font-galderglynn text-white">{item?.price} {item?.currency}</span>
                <div className='flex flex-row gap-2.5 items-center'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 6.5V12L16 14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-7 font-normal text-white">{item?.duration}</span>
                </div>
            </div>
            <span className="text-white shrink-0 text-6 font-normal">{item?.description}</span>
            <BookNowButton />
            <div className="flex flex-col p-4 gap-2 mt-3 rounded-xl bg-white/12">
                <span className="font-normal text-7 text-white">Include</span>
                {
                    item?.includes?.map((include, i) => {
                        return (
                            <div key={i} className="flex flex-row items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13L10 16L17 9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-white font-inter font-normal text-7">
                                    {include}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}