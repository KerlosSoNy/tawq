import FaqAccordion from '@/components/atoms/facAccordion'
import Image from 'next/image'
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import { faqItems } from '@/dummy/faqData';
import FilterButtonsFaqs from '@/components/atoms/filterButtonsFaqs';
export default function FaqsSectionMain({ activeTap }: { activeTap: string }) {
    const container: Variants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const mainTitle: Variants = {
        offscreen: { x: -200, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
        },
    }
    const subTitle: Variants = {
        offscreen: { x: -200, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
        },
    }
    const mainImage: Variants = {
        offscreen: { rotateY: -200, opacity: 0 },
        onscreen: {
            rotateY: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
        },
    }

    return (
        <motion.div
            key='Main-banner-container'
            initial="offscreen"
            data-nav-bg="white"
            id="faqs-section"
            whileInView="onscreen"
            variants={container}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col max-w-full overflow-hidden relative h-fit min-h-125 px-3 md:px-10 3xl:px-20 py-20">

            <div className="absolute w-130! 3xl:w-195! h-210.75! xl:block hidden top-2 3xl:top-24 right-20 3xl:right-40 z-2 -rotate-30 ">
                <motion.div variants={mainImage} className="relative w-full h-full">
                    <Image
                        fill
                        src="/images/home/faqsSwimmer.png"
                        alt="Swimmer Man"
                        className='object-contain'
                    />
                </motion.div>
            </div>
            <motion.div className="flex flex-col items-start relative z-4">
                <motion.div variants={mainTitle} className="text-neutral-black text-0 uppercase font-galderglynn">
                    FAQs
                </motion.div>
                <motion.span variants={subTitle} className='text-5 mt-2 text-neutral-500 max-w-106.5 font-normal'>
                    Find answers to common questions about our services, bookings, and safety measures.
                </motion.span>
            </motion.div>
            <FilterButtonsFaqs activeTap={activeTap} />
            <FaqAccordion
                items={faqItems}
            />
        </motion.div>
    )
}
