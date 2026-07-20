import Image from "next/image";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";

export default function MapSection() {
  const container: Variants = {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }
  const discover: Variants = {
    offscreen: { x: -300, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 1 },
    },
  }
  const description: Variants = {
    offscreen: { y: -300, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 1 },
    },
  }

  const map: Variants = {
    offscreen: { rotate: 40, opacity: 0 },
    onscreen: {
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 1 },
    },
  }
  const leftArrow: Variants = {
    offscreen: { x: 400, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 1 },
    },
  }
  const rightArrow: Variants = {
    offscreen: { x: -400, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 1 },
    },
  }
  const downToTop: Variants = {
    offscreen: { y: 400, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 1 },
    },
  }
  const topToDown: Variants = {
    offscreen: { y: -400, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 1 },
    },
  }
  return (
    <motion.div
      key='Main-banner-container'
      initial="offscreen"
      whileInView="onscreen"
      variants={container}
      viewport={{ once: true, amount: 0.5 }}
      data-nav-bg="white"
      className="flex flex-col w-full bg-[#FCFCFC] max-w-full relative px-4 lg:px-10 3xl:px-31 py-15 lg:py-26">
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between w-full">
        <motion.div variants={discover} className="flex flex-col">
          <div className="flex flex-row items-center gap-2.5 px-3.5">
            <Image src="/images/icons/compus.svg" alt="compus" width={24} height={24} />
            <span className="font-bold font-galderglynn text-5 text-primary-500">
              Discover the location
            </span>
          </div>
          <span className="text-neutral-black font-bold font-galderglynn leading-24 text-[80px]">Tawq</span>
          <span className="text-neutral-600 font-normal text-5 -mt-1">Al-Qassim Region, Saudi Arabia</span>
        </motion.div>
        <motion.span variants={description} className="xl:max-w-171.25 text-neutral-500 text-5 font-normal mt-4 xl:mt-0">
          A distinguished destination in the heart of Saudi Arabia, Tawq offers a blend of cultural heritage and modern living. Strategically located in Al-Qassim, it provides easy access to key urban centers and natural landscapes.
        </motion.span>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between w-full pt-8 lg:pt-25 relative gap-100 lg:gap-0 2xxl:gap-100">
        <motion.div variants={map} className="absolute w-180 xl:w-219 h-130 xl:h-171.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full h-full">
            <Image
              fill
              alt="Map"
              src="/images/contact-us/map.png"
            />
          </div>
        </motion.div>
        <motion.div variants={leftArrow} className="absolute w-[450.2px] 2xl:w-[600.2px] h-40 2xl:h-[211.17px] z-4 top-1/2 lg:top-1/3 mt-14 xl:mt-8 left-[8%] md:left-0 lg:left-1/3 transform -translate-x-1/2 ms-0 md:-ms-10 lg:ms-0  md:translate-x-0 lg:-translate-x-1/2 -translate-y-1/2 lg:-translate-y-1/4">
          <div className="relative w-full h-full">
            <Image
              fill
              alt="Dots"
              src="/images/contact-us/beforeTheMap.png"
            />
          </div>
        </motion.div>
        <motion.div variants={rightArrow} className="hidden md:block  absolute w-[540.2px] lg:w-[440.2px] ms-40 lg:ms-0 3xl:w-[600.2px] h-[110.3px] lg:h-[180.17px] 3xl:h-[211.17px] z-2 mt-60 lg:mt-35 3xl:mt-41 top-1/2 md:top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-2/3">
          <div className="relative w-full h-full">
            <Image
              fill
              alt="Dots"
              src="/images/contact-us/afterTheMap.png"
            />
          </div>
        </motion.div>

        <motion.div variants={downToTop} className="flex flex-col items-center md:items-end z-10 relative">
          <div className="rounded-sm lg:mt-66 2xl:mt-70 border border-neutral-400 p-5 lg:max-w-118.75 flex flex-row items-start gap-5 bg-white">
            <div className="flex items-center justify-center bg-primary-300 w-14 h-14 rounded-sm shrink-0">
              <Image
                src="/images/icons/location.svg"
                alt="Tawq Logo"
                width={27}
                height={24}
              />
            </div>
            <div className="flex flex-col items-start">
              <span className={`text-neutral-500 font-normal text-6 `}>
                Office Location
              </span>
              <span className={`font-bold! mt-2 text-4 xl:text-3 font-galderglynn text-neutral-black`}>
                R67 King Faisal st - Damam - saudi arbia
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-3 xl:mt-19 -me-16 md:me-0 lg:-me-16 xl:-me-40 3xl:-me-46">
            <span className="text-5 font-bold text-neutral-black font-galderglynn">Map View</span>
            <span className="text-6 font-normal text-neutral-600">Saudi Arabia • Isometric 3D</span>
          </div>
        </motion.div>
        <motion.div variants={topToDown} className="flex flex-col w-full lg:max-w-134.5 relative mt-0 md:mt-22 lg:mt-0  z-10">
          <div className="flex flex-row items-center gap-3">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0012 8.5006C16.0012 12.6431 12.6431 16.0012 8.5006 16.0012M16.0012 8.5006C16.0012 4.35813 12.6431 1 8.5006 1M16.0012 8.5006H13.001M8.5006 16.0012C4.35813 16.0012 1 12.6431 1 8.5006M8.5006 16.0012V13.001M8.5006 1C4.35813 1 1 4.35813 1 8.5006M8.5006 1V4.00024M1 8.5006H4.00024" stroke="#347778" stroke-width="2" stroke-linecap="round" />
            </svg>
            <span className="text-netural-black text-7 md:text-5 font-bold font-galderglynn">
              Latitude 26.3° N | Longitude 43.9° E
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4 lg:mt-7">
            <div className="p-4 w-full flex flex-col h-full rounded-sm border border-primary-100 bg-primary-50 ">
              <span className="text-neutral-500 text-[10px] md:text-[14px] font-inter font-normal">Distance to Riyadh</span>
              <span className="text-neutral-black text-[18px] md:text-[28px] font-bold font-galderglynn">380 km</span>
            </div>
            <div className="p-4 w-full flex flex-col h-full rounded-sm border border-primary-100 bg-primary-50 ">
              <span className="text-neutral-500 text-[10px] md:text-[14px] font-inter font-normal">Elevation</span>
              <span className="text-neutral-black text-[18px] md:text-[28px] font-bold font-galderglynn">650m</span>
            </div>
            <div className="p-4 w-full flex flex-col h-full rounded-sm border border-primary-100 bg-primary-50 ">
              <span className="text-neutral-500 text-[10px] md:text-[14px] font-inter font-normal">Area</span>
              <span className="text-neutral-black text-[18px] md:text-[28px] font-bold font-galderglynn">42 km²</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end w-full mt-3 lg:mt-50 xl:mt-78">
            <button className="relative w-full mt-1 md:w-45 xl:w-50 2xl:w-59 h-14 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer">
              <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
              <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
              <span className="relative z-10 uppercase text-5 font-bold text-white">Explore on map</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div >
  )
}


