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
    const faqsLetter: Variants = {
        offscreen: { y: 80, opacity: 0, rotate: -8 },
        onscreen: {
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: { type: "spring", bounce: 0.35, duration: 0.9 },
        },
    }

    return (
        <motion.div
            key='Main-banner-container'
            initial="offscreen"
            data-nav-bg="white"
            whileInView="onscreen"
            variants={container}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col max-w-full overflow-hidden relative h-fit min-h-125 px-3 md:px-10 3xl:px-20 py-20">
            <motion.div
                variants={container}
                className="font-galderglynn absolute top-8 md:-top-8 left-0 w-full flex justify-center items-center font-bold 
                text-[42px] 
                md:text-[250px] 
                xl:text-[300px] faqs-text"
            >
                {"faqs".split("").map((letter, i) => (
                    <motion.span
                        key={i}
                        variants={faqsLetter}
                        className="inline-block mx-8.75 xl:mx-15 3xl:mx-[142.5px]"
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>


            <div className="absolute w-130! 3xl:w-195! h-210.75! xl:block hidden top-2 3xl:top-24 right-30 3xl:right-40 z-10 -rotate-30 ">
                <motion.div variants={mainImage} className="relative w-full h-full">
                    <Image
                        fill
                        src="/images/home/faqsSwimmer.png"
                        alt="Swimmer Man"
                        className='object-contain'
                    />
                </motion.div>
            </div>
            <motion.div className="flex flex-col md:flex-row items-center justify-between 3xl:justify-evenly relative z-4 mb-6">
                <motion.span variants={mainTitle} className='md:max-w-147.6 3xl:max-w-167.5 text-3 md:text-2 3xl:text-1 xl:ms-10 font-galderglynn text-black'>
                    Frequently Asked Questions
                </motion.span>
                <motion.span variants={subTitle} className="md:max-w-80 lg:max-w-100 xl:max-w-115.25 text-6 xl:text-5 md:ps-10 mt-4 md:mt-0 text-neutral-500">
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
