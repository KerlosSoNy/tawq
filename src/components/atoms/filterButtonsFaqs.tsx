import { faqCategories } from "@/dummy/faqData";
import Link from "next/link";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";

export default function FilterButtonsFaqs({
    activeTap,
}: {
    activeTap: string
}) {
    const filters: Variants = {
        offscreen: { y: -200, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
        },
    }
    return (
        <motion.div variants={filters} className="flex flex-row items-center my-10 h-9 gap-4 w-full max-w-screen z-10 overflow-x-scroll">
            {
                faqCategories.map((category) => (
                    <Link
                        href={`/faqs?type=` + category}
                        scroll={false}
                        key={category}
                        className={`filter-button shrink-0 px-4 h-full text-7 border rounded-sm flex items-center justify-center transition-all duration-300 font-normal ${activeTap === category ? 'bg-primary-400 border-transparent text-white' : 'bg-neutral-300 border-neutral-400 text-neutral-600'}`}>
                        {
                            category
                        }
                    </Link>
                ))
            }
        </motion.div>
    )
}
