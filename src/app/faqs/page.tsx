import FaqsBanner from "@/components/pages/faqs/faqsBanner";
import FaqsSectionMain from "@/components/pages/faqs/faqsSection";
import Subscription from "@/components/shared/subscription";

export default async function page({
    searchParams,
}: {
    searchParams: Promise<{
        [key: string]: string | undefined
    }>
}) {
    const params = await searchParams
    const activeTap = params.type || 'General'
    return (
        <div className="font-bold text-[72px] max-w-screen overflow-x-hidden text-black bg-white">
            <FaqsBanner />
            <FaqsSectionMain activeTap={activeTap} />
            <Subscription />
        </div>
    )
}
