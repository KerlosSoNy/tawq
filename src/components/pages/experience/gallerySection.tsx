import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import Image from "next/image";

export default function GallerySection() {
    const container: Variants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    }
    const mainTitle: Variants = {
        offscreen: { x: -300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, bounce: 0.2, duration: 1 },
        },
    }
    // New: shared photo entrance variant
    const photo: Variants = {
        offscreen: { opacity: 0, scale: 1.08, y: 24 },
        onscreen: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 90, damping: 18, duration: 0.8 },
        },
    }

    // Each column gets its own container so its images stagger internally too
    const column: Variants = {
        offscreen: {},
        onscreen: {
            transition: { staggerChildren: 0.15 },
        },
    }

    return (
        <motion.div
            key='Main-Packages-container'
            initial="offscreen"
            whileInView="onscreen"
            data-nav-bg="white"
            variants={container}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center max-w-sceen overflow-hidden relative py-26">
            <motion.span variants={mainTitle} className="font-galderglynn packages-text absolute left-1/2 -translate-x-1/2 top-0 md:-top-10 lg:-top-18  w-fit  font-bold text-[72px] md:text-[140px] lg:text-[170px] xl:text-[200px] z-1">
                Gallery
            </motion.span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 2xl:gap-6 w-full px-6 3xl:px-31 h-fit md:h-300 lg:h-150 xl:h-201 relative z-10">
                <motion.div variants={column} className="grid grid-rows-3 gap-2 2xl:gap-6 w-full h-150 lg:h-full">
                    <motion.div variants={photo} className="w-full h-full relative overflow-hidden rounded-xl">
                        <Image
                            src="/images/experience/gallery/gallery-1.png"
                            alt="Image"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                    <motion.div variants={photo} className="w-full h-full row-span-2 relative overflow-hidden rounded-xl">
                        <Image
                            src="/images/experience/gallery/gallery-2.png"
                            alt="Image"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                </motion.div>

                <motion.div variants={photo} className="relative overflow-hidden rounded-xl w-full h-150 lg:h-full xl:h-201">
                    <Image
                        src="/images/experience/gallery/gallery-3.png"
                        alt="Image"
                        width={400}
                        height={804}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </motion.div>

                <motion.div variants={column} className="grid grid-rows-2 gap-2 2xl:gap-6 w-full h-150 lg:h-full">
                    <motion.div variants={photo} className="w-full h-full relative overflow-hidden rounded-xl">
                        <Image
                            src="/images/experience/gallery/gallery-4.png"
                            alt="Image"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                    <motion.div variants={photo} className="w-full h-full relative overflow-hidden rounded-xl">
                        <Image
                            src="/images/experience/gallery/gallery-5.png"
                            alt="Image"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                </motion.div>

                <motion.div variants={column} className="grid grid-rows-3 gap-2 2xl:gap-6 w-full h-150 lg:h-full">
                    <motion.div variants={photo} className="w-full h-full relative overflow-hidden rounded-xl">
                        <Image
                            src="/images/experience/gallery/gallery-6.png"
                            alt="Image"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                    <motion.div variants={photo} className="w-full h-full relative overflow-hidden rounded-xl">
                        <Image
                            src="/images/experience/gallery/gallery-7.png"
                            alt="Image"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                    <motion.div variants={photo} className="w-full h-full relative overflow-hidden rounded-xl">
                        <Image
                            src="/images/experience/gallery/gallery-8.png"
                            alt="Image"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}