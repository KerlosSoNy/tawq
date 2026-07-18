"use client";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import PostCard from "./postCard";
interface InstagramPost {
    username: string;
    imageUrl: string;
}

interface InstagramGalleryProps {
    posts: InstagramPost[];
}

export default function InstagramGallery({ posts }: InstagramGalleryProps) {
    if (!posts || posts.length === 0) return null;

    const MIN_DISPLAY = 11;
    const displayPosts =
        posts.length >= MIN_DISPLAY
            ? posts
            : Array.from({ length: MIN_DISPLAY }, (_, i) => posts[i % posts.length]);

    const centerPosts = [0, 1, 2].map((i) => displayPosts[i % displayPosts.length]);

    const sidePosts = displayPosts.slice(2);
    const sideSlotCount = 4;
    const sideSlots: InstagramPost[][] = Array.from({ length: sideSlotCount }, () => []);
    sidePosts.forEach((post, i) => {
        sideSlots[i % sideSlotCount].push(post);
    });

    const [left0, left1, right0, right1] = sideSlots;
    const container: Variants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const button: Variants = {
        offscreen: { y: -300, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 90, bounce: 0.2, duration: 1 },
        },
    }

    const mainTitle: Variants = {
        offscreen: { x: -300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.6, duration: 1 },
        },
    }
    const smallDescription: Variants = {
        offscreen: { x: 100, y: 0, opacity: 0 },
        onscreen: {
            y: [null, -20, 0],
            x: [null, -20, 0],
            opacity: [null, 1, 1],
            transition: {
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
            },
        },
    }
    return (
        <motion.section
            key='Main-banner-container'
            initial="offscreen"
            whileInView="onscreen"
            variants={container}
            viewport={{ once: true, amount: 0.5 }}
            className="relative w-full overflow-hidden py-16 md:pb-24 pt-16" >
            <div className="relative mx-auto w-full">
                {/* Mobile / Tablet: simple uniform grid */}
                <div
                    className="grid grid-cols-2 gap-3 px-2 sm:gap-4 md:grid-cols-4 md:gap-5 md:px-4 lg:hidden"
                    style={{ minWidth: "110%", marginLeft: "-5%" }}
                >
                    {displayPosts.map((post, i) => (
                        <PostCard type="small" key={i} post={post} />
                    ))}
                </div>

                <div
                    className="hidden lg:flex lg:gap-6 lg:px-8 items-center"
                    style={{ minWidth: "120%", marginLeft: "-10%" }}
                >
                    <div className="grid mt-[66.5px] grid-cols-1 gap-6">
                        {[left0].map((col, colIndex) => (
                            <div
                                key={`left-${colIndex}`}
                                className={`flex flex-col gap-6 lg:-translate-y-12`}
                            >
                                {col.slice(0, 2).map((post, i) => (
                                    <PostCard type="small" key={`left-${colIndex}-${i}`} post={post} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {[left1].slice(0, 2).map((col, colIndex) => (
                            <div
                                key={`left-${colIndex}`}
                                className={`flex flex-col gap-6 lg:translate-y-8`}
                            >
                                {col.map((post, i) => (
                                    <PostCard type="medium" key={`left-${colIndex}-${i}`} post={post} />
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-1 shrink-0 flex-col gap-6 mt-11.5">
                        <PostCard type="large" key="center-post-0" post={centerPosts[0]} />
                    </div>
                    <div className="flex flex-1 shrink-0 flex-col gap-6">
                        <PostCard type="large" key="center-post-1" post={centerPosts[1]} />
                    </div>
                    <div className="flex flex-1 shrink-0 flex-col gap-6 mt-11.5">
                        <PostCard type="large" key="center-post-2" post={centerPosts[2]} />
                    </div>

                    <div className="grid  grid-cols-1 gap-6">
                        {[right1].slice(0, 2).map((col, colIndex) => (
                            <div
                                key={`right-${colIndex}`}
                                className={`flex flex-col gap-6 lg:translate-y-6`}
                            >
                                {col.map((post, i) => (
                                    <PostCard type="medium" key={`right-${colIndex}-${i}`} post={post} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="grid mt-[66.5px] grid-cols-1  gap-6">
                        {[right0].slice(0, 2).map((col, colIndex) => (
                            <div
                                key={`right-${colIndex}`}
                                className={`flex flex-col gap-6 lg:-translate-y-10`}
                            >
                                {col.map((post, i) => (
                                    <PostCard type="small" key={`right-${colIndex}-${i}`} post={post} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center Content Overlay */}
                <div className="pointer-events-none -mt-32 inset-0 flex items-center justify-center">
                    <div className="pointer-events-auto flex flex-col items-center text-center">
                        <motion.h2 variants={mainTitle} className="text-neutral-black leading-24 font-galderglynn font-bold text-[80px]">
                            <span className="block">Experiences</span>
                            <span className="block">Worth Sharing</span>
                        </motion.h2>
                        <motion.svg variants={smallDescription} className="mt-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 16C4 10.3431 4 7.51472 5.75736 5.75736C7.51472 4 10.3431 4 16 4C21.6568 4 24.4853 4 26.2427 5.75736C28 7.51472 28 10.3431 28 16C28 21.6568 28 24.4853 26.2427 26.2427C24.4853 28 21.6568 28 16 28C10.3431 28 7.51472 28 5.75736 26.2427C4 24.4853 4 21.6568 4 16Z" stroke="#141B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.3334 16.0003C21.3334 18.9458 18.9455 21.3337 16.0001 21.3337C13.0546 21.3337 10.6667 18.9458 10.6667 16.0003C10.6667 13.0548 13.0546 10.667 16.0001 10.667C18.9455 10.667 21.3334 13.0548 21.3334 16.0003Z" stroke="#141B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M23.1665 9.00033H22.9998M23.3332 9.00033C23.3332 9.18443 23.1838 9.33366 22.9998 9.33366C22.8157 9.33366 22.6665 9.18443 22.6665 9.00033C22.6665 8.81623 22.8157 8.66699 22.9998 8.66699C23.1838 8.66699 23.3332 8.81623 23.3332 9.00033Z" stroke="#141B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                        <motion.p variants={smallDescription} className="text-5 mt-3 font-bold font-galderglynn text-neutral-black">
                            Join us in celebrating the joy
                        </motion.p>

                        <motion.p variants={smallDescription} className="max-w-140 mt-2 text-5 leading-8 font-normal text-neutral-black">
                            We invite you to follow us on Instagram and share your incredible experiences with our community! Your stories and photos inspire others to embark on their own adventures.
                        </motion.p>

                        <motion.button whileHover={{ scale: 1.1 }} variants={button} className="relative w-59 h-14 mt-3 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer">
                            <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                            <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                            <span className="relative z-10 uppercase text-5 font-bold text-white">Follow Us</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}