import BigSection from "@/components/pages/home/bigSection";
import InstagramGallery from "@/components/pages/home/gallerySection";
import MidSection from "@/components/pages/home/midSection";
import Packages from "@/components/pages/home/packages";
import FaqsSection from "@/components/shared/faqs/faqsSection";
import Subscription from "@/components/shared/subscription";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const samplePosts = [
    { username: "surf_adventures", imageUrl: "/images/home/explore/gallery-1.png" },
    { username: "paddle_life", imageUrl: "/images/home/explore/gallery-2.png" },
    { username: "surf_adventures", imageUrl: "/images/home/explore/gallery-3.png" },
    { username: "kite_sessions", imageUrl: "/images/home/explore/gallery-4.png" },
    { username: "windsurf_co", imageUrl: "/images/home/explore/gallery-5.png" },
    { username: "Marshall Dibbert", imageUrl: "/images/home/explore/gallery-6.png" },
    { username: "wake_riders", imageUrl: "/images/home/explore/gallery-7.png" },
    { username: "surf_adventures", imageUrl: "/images/home/explore/gallery-8.png" },
    { username: "kite_sessions", imageUrl: "/images/home/explore/gallery-9.png" },
    { username: "surf_adventures", imageUrl: "/images/home/explore/gallery-10.png" },
    { username: "paddle_life", imageUrl: "/images/home/explore/gallery-11.png" },
  ];

  return (
    <div className="font-bold text-[72px] text-black">
      {/* Banner */}
      <div className="w-screen h-screen relative pt-40 ">
        <div className="ps-18 flex flex-col relative z-10">

          <div className="text-[146px] font-galderglynn w-fit font-bold text-white leading-none tracking-tight">
            WHERE WATER MEETS
            <span className="leading-none tracking-tight flex flex-wrap gap-4">
              <span className="text-white">PURE</span>
              <span
                className="text-transparent ms-4"
                style={{ WebkitTextStroke: "1.5px white" }}
              >
                EXCITEMENT.
              </span>
            </span>
          </div>
          <small className="max-w-108.75 font-normal text-white text-5 mt-20">
            Discover premium aquatic entertainment designed for unforgettable group gatherings, celebrations, and corporate escapes.
          </small>
        </div>

        <div className="absolute top-0 w-full h-full bg-linear-to-b from-primary-300/50 to-secondary-300/50 opacity-75 z-4" />
        <video
          src="/videos/Hero-Home.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full absolute top-0 object-cover"
        />
        <div className="absolute inset-s-20 bottom-27 z-10  bg-black/12 backdrop-blur-md rounded-2xl px-6 py-2 gap-5 flex flex-row items-center">
          <Link href="#" aria-label="Instagram Page" className="w-11 h-11 flex items-center justify-center ">
            <Image
              src="/images/icons/insta.svg"
              alt="Instagram Icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" aria-label="X Page" className="w-11 h-11 flex items-center justify-center ">
            <Image
              src="/images/icons/x.svg"
              alt="X Icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" aria-label="facebook Page" className="w-11 h-11 flex items-center justify-center ">
            <Image
              src="/images/icons/facebook.svg"
              alt="facebook Icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <svg className="absolute inset-e-20 bottom-33.25 z-10" width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.750244 4.15267L17.37 9.15267L37.3136 0.819336L58.9193 10.8193L77.2009 2.486L100.469 9.15267L118.75 2.486" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div className="absolute bottom-26 left-1/2 -translate-x-1/2 z-10 flex flex-col justify-center items-center gap-4.5">
          <div className="bg-black/12 w-24.5 h-24.5 rotate-45 rounded-xl flex items-center justify-center backdrop-blur-md rounded-45">
            <Image
              src="/images/icons/smallHeroLogo.svg"
              alt="Logo"
              width={26}
              height={26}
              className="-rotate-45"
            />
          </div>
          <div className="w-px h-42.75 border-l border-dashed border-white" />
          <span className="uppercase font-bold text-5 text-white">Dive iN</span>
        </div>
        <div className="w-full absolute bottom-0 z-8 h-89.25 bg-linear-to-b from-primary-400/0 to-secondary2-400" />
      </div>
      {/* Big Section */}
      <BigSection />
      <MidSection />
      <Packages />
      <InstagramGallery posts={samplePosts} />
      <FaqsSection />
      <Subscription />
      {/* <WaveScrubVideo /> */}
    </div>
  )
}
