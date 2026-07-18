import FaqAccordion from '@/components/atoms/facAccordion'
import Image from 'next/image'
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
export default function FaqsSection() {
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
    const mainImage: Variants = {
        offscreen: { rotateY: -200, opacity: 0 },
        onscreen: {
            rotateY: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
        },
    }

    const subTitle: Variants = {
        offscreen: { y: -300, opacity: 0 },
        onscreen: {
            y: [null, -20, 0],
            x: [null, -20, 0],
            opacity: [null, 1, 1],
            transition: {
                ease: [0.34, 1.56, 0.64, 1],
                duration: 3,
            },
        },
    }
    return (
        <motion.div
            key='Main-banner-container'
            initial="offscreen"
            whileInView="onscreen"
            variants={container}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col max-w-full overflow-hidden relative h-fit min-h-125 px-20 py-20">
            <motion.span variants={mainTitle} className="font-galderglynn absolute -top-8 w-fit left-[7.5%] tracking-[285px] font-bold text-[300px] faqs-text">
                faqs
            </motion.span>
            <div className="absolute w-195! h-210.75! top-24 right-40 z-10 -rotate-30 ">
                <motion.div variants={mainImage} className="relative w-full h-full">
                    <Image
                        fill
                        src="/images/home/faqsSwimmer.png"
                        alt="Swimmer Man"
                        className='object-contain'
                    />
                </motion.div>
            </div>
            <motion.div className="flex flex-row items-center justify-evenly relative z-4 mb-6">
                <motion.span variants={mainTitle} className='max-w-167.5 text-1 ms-10 font-galderglynn text-black'>
                    Frequently Asked Questions
                </motion.span>
                <motion.span variants={subTitle} className="max-w-115.25 text-5 ps-10 text-neutral-500">
                    Find answers to common questions about our services, bookings, and safety measures.
                </motion.span>
            </motion.div>
            <FaqAccordion
                items={[
                    { question: "What is the minimum age requirement?", answer: "Yes. We provide all necessary safety equipment, including life jackets and protective gear, which are regularly inspected and maintained to ensure your safety." },
                    { question: "What documentation is needed to apply?", answer: "..." },
                    { question: "What documentation is needed to apply?", answer: "..." },
                    { question: "What documentation is needed to apply?", answer: "..." },
                ]}
            />
        </motion.div>
    )
}
