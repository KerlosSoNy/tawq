import BluredBox from "./bluredBox"
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
export default function MidSection() {
    const container: Variants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    }
    const hiddenTitle: Variants = {
        offscreen: { x: -300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.3, duration: 1 },
        },
    }
    const title: Variants = {
        offscreen: { x: -300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.3, duration: 1 },
        },
    }

    const subTitle: Variants = {
        offscreen: { x: 300, opacity: 0 },
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
            viewport={{ once: true }}
            className="w-full pb-10 xl:pb-0  xl:min-h-260 2xl:min-h-300 3xl:min-h-329 relative pt-10 bg-secondary2-400 -mt-px">
            <div className="absolute top-0 w-full h-full bg-linear-to-b from-primary-300/50 to-secondary-300/50 
         z-4" />
            {/* <div className="absolute w-full h-full inset-0 bg-[url('/images/home/bg-why.png')] mix-blend-soft-light bg-cover z-2"/> */}

            <video
                src="/videos/midSectionHome.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full absolute top-0 object-cover"
            />
            <div className="flex flex-col w-full z-10 relative px-3 md:px-6 xl:px-10 3xl:px-[81.5px]">
                <motion.span variants={hiddenTitle} className="font-galderglynn mx-auto  w-fit 3xl:opacity-[0.4]! opacity-[0.2]! mix-blend-plus-lighter  font-bold text-[32px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] 3xl:text-[164px] faqs-text z-2">
                    Why Choose Twaq
                </motion.span>
                <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between 3xl:px-[227.5px] mt-10 3xl:mt-16">
                    <motion.span variants={title} className="md:max-w-80 lg:max-w-100 2xl:max-w-182.25 text-3 lg:text-2 2xl:text-1 font-galderglynn font-bold text-white">We transform spaces into worlds</motion.span>
                    <motion.span variants={subTitle} className="md:max-w-80 lg:max-w-94 xl:max-w-101.5 text-6 lg:text-5 text-white ">
                        using light, water, motion, and digital interaction to craft experiences that are cinematic, large-scale, and emotionally unforgettable.
                    </motion.span>
                </div>
                <div className="h-fit lg:h-120 xl:h-140 3xl:h-145.5 grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-6 mt-10 md:mt-24">
                    <div className="grid grid-rows-2 col-span-2 gap-3 md:gap-6 h-full w-full">
                        <div className="grid grid-cols-2 gap-3 md:gap-6 h-full w-full">
                            <BluredBox
                                className="justify-between"
                                icon={
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0231 17.2495L17.0231 20.2495L23.25 14.0227M17.5879 4.61728L8.58792 7.18871C7.94397 7.3727 7.5 7.96128 7.5 8.631L7.5 16.2803C7.5 21.1245 9.83949 25.6706 13.7814 28.4863L17.1281 30.8768C17.6497 31.2493 18.3503 31.2493 18.8719 30.8768L22.2186 28.4863C26.1605 25.6706 28.5 21.1245 28.5 16.2803V8.631C28.5 7.96128 28.056 7.3727 27.4121 7.18871L18.4121 4.61728C18.1427 4.54033 17.8573 4.54033 17.5879 4.61728Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                }
                                title="Safety First, Always"
                                description="Professionally managed adventures with strict safety protocols."
                            />
                            <BluredBox
                                className="justify-between"
                                icon={
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 27L24 30L33 21M6 30V28.5C6 24.3579 9.35786 21 13.5 21H19.125M22.5 10.5C22.5 13.8137 19.8137 16.5 16.5 16.5C13.1863 16.5 10.5 13.8137 10.5 10.5C10.5 7.18629 13.1863 4.5 16.5 4.5C19.8137 4.5 22.5 7.18629 22.5 10.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                }
                                title="Expert-Led Experiences"
                                description="Certified instructors dedicated to your comfort and confidence."
                            />
                        </div>
                        <BluredBox
                            className="justify-end gap-3"
                            icon={
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 9L22.2426 13.7574M22.2426 13.7574C21.1569 12.6716 19.6569 12 18 12C16.3431 12 14.8431 12.6716 13.7574 13.7574M22.2426 13.7574C23.3284 14.8431 24 16.3431 24 18C24 19.6569 23.3284 21.1569 22.2426 22.2426M27 27L22.2426 22.2426M22.2426 22.2426C21.1569 23.3284 19.6569 24 18 24C16.3431 24 14.8431 23.3284 13.7574 22.2426M9 27L13.7574 22.2426M13.7574 22.2426C12.6716 21.1569 12 19.6569 12 18C12 16.3431 12.6716 14.8431 13.7574 13.7574M9 9L13.7574 13.7574M31.5 18C31.5 25.4558 25.4558 31.5 18 31.5C10.5442 31.5 4.5 25.4558 4.5 18C4.5 10.5442 10.5442 4.5 18 4.5C25.4558 4.5 31.5 10.5442 31.5 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                            title="Premium Fleet & Equipment"
                            description="Modern, high-performance equipment maintained to the highest standards."
                        />
                    </div>
                    <BluredBox
                        className="justify-end gap-3"
                        icon={
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 29.882V8.22076C4.5 7.79033 4.77543 7.40819 5.18377 7.27208L12.8675 4.71082C13.2781 4.57397 13.7219 4.57397 14.1325 4.71082L21.8675 7.28918C22.2781 7.42603 22.7219 7.42603 23.1325 7.28918L30.1838 4.93874C30.8313 4.7229 31.5 5.20487 31.5 5.88743V26.382C31.5 26.7607 31.286 27.107 30.9472 27.2764L23.3944 31.0528C22.8314 31.3343 22.1686 31.3343 21.6056 31.0528L14.3944 27.4472C13.8314 27.1657 13.1686 27.1657 12.6056 27.4472L5.94721 30.7764C5.28231 31.1088 4.5 30.6253 4.5 29.882Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22.5 7.5V30.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.5 6L13.5 27" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        title="Stunning Locations"
                        description="Experience breathtaking views and crystal-clear waters."
                    />
                    <div className="w-full h-full grid grid-rows-2 gap-3 xl:gap-6">
                        <BluredBox
                            className="justify-between"
                            icon={
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.5811 10.7362L18 18L5.41382 10.7246" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 18V31.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 3.57735C17.6188 3.22008 18.3812 3.22008 19 3.57735L29.9904 9.92265C30.6092 10.2799 30.9904 10.9402 30.9904 11.6547V24.3453C30.9904 25.0598 30.6092 25.7201 29.9904 26.0774L19 32.4227C18.3812 32.7799 17.6188 32.7799 17 32.4226L6.00962 26.0773C5.39082 25.7201 5.00962 25.0598 5.00962 24.3453V11.6547C5.00962 10.9402 5.39082 10.2799 6.00962 9.92265L17 3.57735Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.75 6.75L24 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                            title="Tailored  Packages"
                            description="Flexible options designed for every traveler and group size."
                        />
                        <BluredBox
                            className="justify-between"
                            icon={
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="14.25" cy="14.25" r="2.25" fill="white" />
                                    <circle cx="21.75" cy="14.25" r="2.25" fill="white" />
                                    <path d="M24.693 21.5904C22.8103 23.1479 20.4434 24 18 24C15.5566 24 13.1897 23.1479 11.3071 21.5904" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                            title="Thousands of Happy Guests"
                            description="Trusted by adventurers from around the world for memorable water experiences."
                        />
                    </div>
                </div>
            </div>

            <div className="w-full absolute top-0 z-6 h-180 bg-linear-to-b to-[#002023]/0 from-[#002125]" />
            <div className="w-full absolute bottom-0 z-6 h-[90%] bg-linear-to-b opacity-50 from-primary-300/0  to-secondary-300" />
            <div className="w-full absolute -bottom-1 z-6 h-200 bg-linear-to-b opacity-100 from-[#002023]/0 to-secondary2-400 to-90%" />

            <svg className="absolute w-full min-h-25 -bottom-13.5 md:-bottom-14.5 left-0" width="1920" height="99" viewBox="0 0 1920 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M677.417 0.316827C769.23 -2.57033 884.581 15.2467 939.712 14.4234C994.974 13.615 1069.12 10.8421 1147.29 15.1468C1214.59 18.8479 1295.51 12.0473 1371.43 13.6474C1384.06 13.9 1395.74 14.3983 1407.97 15.2062C1494.22 21.1758 1616.41 27.2479 1672.82 31.0469C1729.39 34.9091 1743.18 35.6645 1797.15 29.1502C1828.13 25.377 1871.04 24.5456 1907.82 29.6516C1926.33 32.2329 1922.58 37.8978 1904.4 41.7525C1877.81 47.3922 1855.55 46.3369 1842.11 53.9214C1815.26 69.0593 1803.65 74.9313 1768.08 68.8936C1732.76 62.7863 1716.87 81.2036 1696.34 79.9555C1675.82 78.5816 1675.76 68.5283 1572.06 79.3177C1468.69 89.8089 1411.84 92.4234 1372.4 94.8829C1372.26 94.8918 1372.12 94.9012 1371.97 94.9101C1332.68 97.3891 1250.19 88.6193 1186.19 91.6727C1121.93 94.8535 991.881 90.7447 939.181 95.5547C886.773 100.396 886.746 88.6403 844.39 81.6059C801.967 74.5642 768.445 103.181 716.716 98.4738C665.164 93.7689 657.49 78.2857 598.38 81.0694C539.204 83.8515 480.099 72.6981 453.709 78.754C427.256 84.8107 424.768 65.6614 387.271 69.5528C349.859 73.4505 327.244 70.7605 294.532 64.2842C261.915 57.7859 161.408 51.8294 124.846 59.3292C88.2457 66.7952 46.6453 53.4288 21.584 50.2429C13.777 49.2496 7.6295 47.9009 2.91686 46.5011C0.920959 45.9076 -0.000974507 44.6703 7.72945e-07 43.4505V43.4476C0.00273679 41.9287 1.43624 40.4374 4.00386 40.2491C16.4723 39.3349 35.0731 36.9097 57.0845 31.4637C98.1352 21.321 102.588 32.6772 157.969 27.6751C213.335 22.6973 246.763 12.3655 311.849 19.7143C376.896 27.0899 392.223 -1.3374 483.98 15.7934C575.692 32.9569 585.857 3.22374 677.417 0.316827Z" fill="#004C54" />
            </svg>
        </motion.div>
    )
}
