import Activities from "@/components/pages/experience/activities";
import ExperienceBanner from "@/components/pages/experience/experienceBanner";
import FaqsSection from "@/components/shared/faqs/faqsSection";
import Subscription from "@/components/shared/subscription";

export default function page() {
    return (
        <div className="font-bold text-[72px] max-w-screen overflow-x-hidden text-black bg-white">
            <ExperienceBanner />
            <Activities />
            <FaqsSection />
            <Subscription />
        </div>
    )
}
