import BigSection from "@/components/pages/experience/bigSection";
import ExperienceDetailsBanner from "@/components/pages/experience/detailsBanner";
import GallerySection from "@/components/pages/experience/gallerySection";
import Testmonials from "@/components/pages/experience/testmonials";
import Subscription from "@/components/shared/subscription";

export default function page() {
    return (
        <div className="bg-white ">
            <ExperienceDetailsBanner />
            <BigSection />
            <GallerySection />
            <Testmonials />
            <Subscription />
        </div>
    )
}
