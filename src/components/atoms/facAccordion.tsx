"use client";
import * as motion from "motion/react-client"
import { Variants } from "motion/react";
import { useId, useState } from "react";

export interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const baseId = useId();

    const toggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };
    const mainTitle: Variants = {
        offscreen: { x: -300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
        },
    }
    return (
        <motion.div className="mx-auto  z-5 relative w-full">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `${baseId}-panel-${index}`;
                const buttonId = `${baseId}-button-${index}`;

                return (
                    <motion.div
                        variants={mainTitle}
                        key={index}
                        className={` border-gray-200 ${index === items.length - 1 ? "" : "border-b"
                            }`}
                    >
                        <button
                            id={buttonId}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggle(index)}
                            className="grid w-full grid-cols-[36px_1fr_24px] items-start gap-2 px-2 py-7 text-left sm:grid-cols-[60px_1fr_24px] sm:gap-[106px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                        >
                            <span
                                className={`text-2 font-galderglynn font-bold  ${isOpen ? "text-[#347778]" : "text-[#A4A4A4]"
                                    }`}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span
                                className={` transition-colors text-2 font-galderglynn max-w-[727px] ${isOpen ? "text-[#347778]" : "text-[#A4A4A4]"
                                    }`}
                            >
                                {item.question}
                            </span>

                            <svg className={`${isOpen ? "rotate-180" : ""} transition-transform duration-300 `} width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={`${isOpen ? " stroke-[#347778]" : "stroke-[#A4A4A4]"}`} d="M2.5 2.5L15.7929 15.7929C16.1834 16.1834 16.8166 16.1834 17.2071 15.7929L30.5 2.5" stroke="#A4A4A4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </button>

                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            className="grid transition-[grid-template-rows] duration-300 -mt-2 pb-4 ease-out"
                            style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                        >
                            <div className="overflow-hidden">
                                <p className="ml-43.5 max-w-144.75 font-normal text-5 text-neutral-600">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}