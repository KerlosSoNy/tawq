import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import Image from "next/image";

export default function Subscription() {
    const container: Variants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    }

    const subscriptionTitle: Variants = {
        offscreen: { x: -300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.4, duration: 0.8 },
        },
    }

    const subscriptionSubTitle: Variants = {
        offscreen: { x: 100, y: 100, opacity: 0 },
        onscreen: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.4, duration: 1 },
        },
    }

    const subscriptionForm: Variants = {
        offscreen: { y: -300, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.6, duration: 1 },
        },
    }

    return (
        <motion.div
            key='Main-subscription-container'
            initial="offscreen"
            whileInView="onscreen"
            data-nav-bg="white"
            variants={container}
            viewport={{ once: true, amount: 0.4 }}
            className="w-full h-fit 3xl:h-136.5 max-w-sceen overflow-x-hidden flex flex-col items-center text-center lg:text-start relative px-10 3xl:px-30 py-18.5 overflow-hidden">
            <Image fill src="/images/home/subscription.png" alt="Subscription" className="object-cover" />

            <motion.span
                variants={subscriptionTitle}
                className="font-galderglynn text-[48px] md:text-[60px] lg:text-[80px] 2xl:text-[96px] 3xl:text-[128px] leading-16 lg:leading-24 3xl:leading-30 z-2 text-white/60">
                Subscribe for our newsletter.
            </motion.span>

            <div className="flex flex-col lg:flex-row w-full items-center lg:items-start z-2 gap-3 md:gap-6 lg:gap-10 justify-between">
                <motion.span
                    variants={subscriptionSubTitle}
                    className='text-white/60 text-5 max-w-135 leading-5 mt-8 md:mt-14 3xl:mt-6'>
                    Stay updated with the latest news, offers, and exclusive content delivered straight to your inbox!
                </motion.span>
                <motion.div
                    variants={subscriptionForm}
                    className="mt-6.5 p-6 rounded-sm bg-white/12 backdrop-blur-[20px] flex flex-col md:flex-row items-center gap-4 z-10 relative">
                    <div className="flex flex-row items-center h-14 px-6 py-4 gap-3 max-w-80 xl:max-w-95.75 overflow-hidden w-80 2xl:w-95.75 bg-white rounded-sm">
                        <Image src="/images/icons/black-email.svg" alt="Tawq Logo" width={24} height={24} className="relative z-10" />
                        <input
                            type="email"
                            title="send subscription email"
                            placeholder="example@info.com"
                            className="text-7 text-neutral-600 focus:outline-0 focus:border-0 focus:ring-0"
                        />
                    </div>
                    <button className="relative w-full md:w-45 xl:w-50 2xl:w-59 h-14 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer">
                        <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                        <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                        <span className="relative z-10 uppercase text-5 font-bold text-white">Subscribe</span>
                        <Image src="/images/icons/send.svg" alt="Tawq Logo" width={24} height={24} className="relative z-10" />
                    </button>
                </motion.div>
            </div>
        </motion.div>
    )
}