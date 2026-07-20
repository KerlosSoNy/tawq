import BannerContactUs from "@/components/pages/contact-us/bannerContactUs";
import MapSection from "@/components/pages/contact-us/mapSection";
import FaqsSection from "@/components/shared/faqs/faqsSection";
import Subscription from "@/components/shared/subscription";

export default function page() {
    return (
        <div className="font-bold text-[72px] max-w-screen overflow-x-hidden text-black bg-white">
            <BannerContactUs />
            <MapSection />
            <FaqsSection />
            <Subscription />
        </div>
    )
}
