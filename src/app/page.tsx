import BigSection from "@/components/pages/home/bigSection";
import InstagramGallery from "@/components/pages/home/gallerySection";
import HomeBanner from "@/components/pages/home/homeBanner";
import MidSection from "@/components/pages/home/midSection";
import Packages from "@/components/pages/home/packages";
import FaqsSection from "@/components/shared/faqs/faqsSection";
import Subscription from "@/components/shared/subscription";

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
    <div className="font-bold text-[72px] text-black bg-white">
      <HomeBanner />
      <BigSection />
      <MidSection />
      <Packages />
      <InstagramGallery posts={samplePosts} />
      <FaqsSection />
      <Subscription />
    </div>
  )
}
