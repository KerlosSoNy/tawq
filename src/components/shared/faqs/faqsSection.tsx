import FaqAccordion from '@/components/atoms/facAccordion'
import Image from 'next/image'

export default function FaqsSection() {
    return (
        <div className="flex flex-col max-w-full overflow-hidden relative h-fit min-h-125 px-20 py-20">
            <span className="font-galderglynn absolute -top-4 w-fit left-[7.5%] tracking-[285px] font-bold text-[300px] faqs-text">
                faqs
            </span>
            <div className="absolute w-195! h-210.75! top-24 right-40 z-10 -rotate-30 ">
                <div className="relative w-full h-full">
                    <Image
                        fill
                        src="/images/home/faqsSwimmer.png"
                        alt="Swimmer Man"
                        className='object-contain'
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-evenly relative z-4 mb-6">
                <span className='max-w-167.5 text-1 ms-10 font-galderglynn text-black'>
                    Frequently Asked Questions
                </span>
                <span className="max-w-115.25 text-5 ps-10 text-neutral-500">
                    Find answers to common questions about our services, bookings, and safety measures.
                </span>
            </div>
            <FaqAccordion
                items={[
                    { question: "What is the minimum age requirement?", answer: "Yes. We provide all necessary safety equipment, including life jackets and protective gear, which are regularly inspected and maintained to ensure your safety." },
                    { question: "What documentation is needed to apply?", answer: "..." },
                    { question: "What documentation is needed to apply?", answer: "..." },
                    { question: "What documentation is needed to apply?", answer: "..." },
                ]}
            />
        </div>
    )
}
