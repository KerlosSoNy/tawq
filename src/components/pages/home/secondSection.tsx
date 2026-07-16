import Image from "next/image";
import EventCard from "./eventCard";

export default function SecondSection() {
    const sections = [
        {
            title: 'Marine boats',
            image: '/images/home/events/event-1.png',
            href: '#'
        },
        {
            title: 'Jet SKI',
            image: '/images/home/events/event-2.png',
            href: '#'
        },
        {
            title: 'Parasailing',
            image: '/images/home/events/event-3.png',
            href: '#'
        }
    ]
    return (
        <div className="flex flex-col px-20 relative z-7 mt-30">
            <div className="px-[43.5px] flex flex-row items-start justify-between">
                <Image
                    src="/images/logos/simpleWhiteLogo.svg"
                    alt="Tawq Logo"
                    width={186}
                    height={186}
                    loading="eager"
                />
                <div className="flex flex-col text-[128px] font-galderglynn text-white leading-32">
                    <span>Live The</span>
                    <span className="ms-45">adventure</span>
                </div>
            </div>
            <div className="w-full grid grid-cols-3 gap-17 mt-16">
                <EventCard event={sections[0]} />
                <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col mb-11">
                        <span className="max-w-85.25 text-white text-5 leading-8">
                            Using light, water, motion, and digital interaction to craft experiences that are cinematic, large-scale, and emotionally unforgettable.
                        </span>
                        <button className="relative w-59 h-14 mt-6 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer transition-all duration-300">
                            <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                            <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                            <span className="relative z-10 uppercase text-5 font-bold text-white">Explore More</span>
                        </button>
                    </div>
                    <EventCard event={sections[1]} />
                </div>
                <EventCard event={sections[2]} />
            </div>
        </div>
    )
}
