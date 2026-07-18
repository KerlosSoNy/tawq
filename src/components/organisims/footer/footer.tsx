import Image from "next/image";
import Link from "next/link";
import { contactInfo, quickLinks, socialLinks, supportLinks } from "./data/links";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
export default function Footer() {
    const container: Variants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }
    const socialMotion: Variants = {
        offscreen: { y: -100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.1, duration: 1 },
        },
    }

    const mainImage: Variants = {
        offscreen: { rotateZ: -40, opacity: 0 },
        onscreen: {
            rotateZ: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.1, duration: 1 },
        },
    }
    const subImage: Variants = {
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
            className='py-15.5 px-31 flex flex-col w-full bg-[#f3f3f3]'>
            <div className="flex flex-row gap-26.5 justify-between items-start">
                <div className="flex flex-row items-start gap-3">
                    <motion.div variants={subImage}>
                        <Image
                            src='/images/logos/footerLogo.png'
                            width={259}
                            height={146}
                            alt='Footer Logo'
                            className='object-contain me-3'
                        />
                    </motion.div>
                    <motion.div variants={mainImage}>
                        <Image
                            src='/images/logos/big-logo-footer.png'
                            width={470}
                            height={466}
                            alt='Footer Logo'
                            className='object-contain me-3'
                        />
                    </motion.div>
                </div>
                <div className="flex flex-row items-start gap-6.5">
                    <motion.div variants={socialMotion} className="flex flex-col gap-2 min-w-64.5">
                        <span className='font-galderglynn text-neutral-black text-3 font-bold'>Quick Links</span>
                        <div className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="p-2 text-5 text-neutral-500"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={socialMotion} className="flex flex-col gap-2 min-w-64.5">
                        <span className='font-galderglynn text-neutral-black text-3 font-bold'>Support</span>
                        <div className="flex flex-col gap-2">
                            {supportLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="p-2 text-5 text-neutral-500"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={socialMotion} className="flex flex-col gap-3 min-w-66.25">
                        <span className='font-galderglynn text-neutral-black text-3 font-bold'>Contact us</span>
                        <div className="flex flex-col gap-6">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="flex flex-row items-center gap-4">
                                    <div className="flex items-center justify-center bg-primary-300 w-10 h-10 rounded-sm">
                                        <Image
                                            src={item.icon}
                                            alt="Tawq Logo"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="flex flex-col items-start ">
                                        <span className="text-neutral-500 text-6">
                                            {item.label}
                                        </span>
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="font-bold font-galderglynn text-5 text-neutral-black -mt-0.5"
                                            >
                                                {item.value}
                                            </Link>
                                        ) : (
                                            <span className="font-bold font-galderglynn text-5 text-neutral-black -mt-0.5">
                                                {item.value}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div variants={socialMotion} className="h-10 w-full flex items-center justify-between flex-row">
                <span className="text-neutral-500 text-7">
                    All rights reserved to the site TAWQ 2026
                </span>
                <div className="flex flex-row gap-3">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.label}
                            href={social.href}
                            aria-label={`${social.label} Page`}
                            className="bg-white w-10 h-10 rounded-sm flex items-center justify-center"
                        >
                            <Image
                                src={social.icon}
                                width={24}
                                height={24}
                                alt={social.label}
                            />
                        </Link>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}