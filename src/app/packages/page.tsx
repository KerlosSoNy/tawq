import InstagramGallery from "@/components/pages/home/gallerySection";
import PackagesBanner from "@/components/pages/packages/bannerPackages";
import ChooseYourPackage from "@/components/pages/packages/chooseYourPackage";
import UniqueExperience from "@/components/pages/packages/uniqueExperience";
import FaqsSection from "@/components/shared/faqs/faqsSection";
import Subscription from "@/components/shared/subscription";

export default async function page({
    searchParams,
}: {
    searchParams: Promise<{
        [key: string]: string | undefined
    }>
}) {
    const params = await searchParams
    const activeTap = params.type || 'day'
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
        <div className="font-bold text-[72px] max-w-screen overflow-x-hidden text-black bg-white">
            <PackagesBanner />
            <UniqueExperience activeTap={activeTap} />
            <ChooseYourPackage />
            <InstagramGallery posts={samplePosts} />
            <FaqsSection />
            <Subscription />
        </div>
    )
}
