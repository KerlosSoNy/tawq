import Image from "next/image";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
interface InstagramPost {
    username: string;
    imageUrl: string;
}
export default function PostCard({ post, type }: { post: InstagramPost, type: 'large' | 'medium' | 'small' }) {
    const container: Variants = {
        offscreen: { y: -100, x: -100, opacity: 0 },
        onscreen: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
        },
    }
    return (
        <motion.div
            variants={container}
            className={`
            shrink-0
            shadow-[0_8px_16px_0_rgba(164,164,164,0.30)]
            ${type === 'large' ? "min-w-60 w-full 3xl:w-77.5 h-82 3xl:h-97" : type === 'medium' ? "w-50 xl:w-65 2xl:w-58 3xl:w-72.5 h-70.75 3xl:h-90.75" : "w-602xl:w-55.5 3xl:w-68.25 h-64 3xl:h-74"}
            rounded-2xl bg-white p-2 shadow-md flex flex-col gap-2 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg sm:p-4`}>
            <div className="mb-2 flex items-center gap-1.5">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16C4 10.3431 4 7.51472 5.75736 5.75736C7.51472 4 10.3431 4 16 4C21.6568 4 24.4853 4 26.2427 5.75736C28 7.51472 28 10.3431 28 16C28 21.6568 28 24.4853 26.2427 26.2427C24.4853 28 21.6568 28 16 28C10.3431 28 7.51472 28 5.75736 26.2427C4 24.4853 4 21.6568 4 16Z" stroke="#141B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.3334 16.0003C21.3334 18.9458 18.9455 21.3337 16.0001 21.3337C13.0546 21.3337 10.6667 18.9458 10.6667 16.0003C10.6667 13.0548 13.0546 10.667 16.0001 10.667C18.9455 10.667 21.3334 13.0548 21.3334 16.0003Z" stroke="#141B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.1665 9.00033H22.9998M23.3332 9.00033C23.3332 9.18443 23.1838 9.33366 22.9998 9.33366C22.8157 9.33366 22.6665 9.18443 22.6665 9.00033C22.6665 8.81623 22.8157 8.66699 22.9998 8.66699C23.1838 8.66699 23.3332 8.81623 23.3332 9.00033Z" stroke="#141B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs font-medium text-neutral-black 2xl:text-[14px] 3xl:text-[18px]">
                    @{post.username}
                </span>
            </div>
            <div className={`relative w-full
                ${type === 'large' ? "h-77" : type === 'medium' ? "h-70.75" : "h-54"}
                `}>
                <Image
                    src={post.imageUrl}
                    alt={`${post.username}'s post`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 16vw"
                    className="object-cover w-full max-w-full h-full"
                    loading="lazy"
                />
            </div>
        </motion.div>
    );
}
