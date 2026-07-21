import Image from "next/image";
import EventCard from "../home/eventCard";

export default function Activities() {
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
        <div className="flex flex-col py-10 md:py-15 2xl:py-25 px-4 lg:px-10 3xl:px-21.25">
            <div className="flex  gap-4 md:gap-4 flex-col md:flex-row items-center w-full justify-between">
                <Image
                    alt="logo"
                    width="186"
                    height="186"
                    src="/images/logos/logoActivites.svg"
                    className="w-30.5 xl:w-46.5 h-30.5 xl:h-46.5"
                />
                <span className="max-w-100 xl:max-w-170 text-center md:text-start 3xl:max-w-291.75 font-bold text-2 xl:text-1 3xl:text-0 font-galderglynn text-neutral-black">
                    Activities / Water Sports Services
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 3xl:gap-16 mt-10 2xl:mt-20">
                {
                    [...sections, ...sections, ...sections].map((section, index) => (
                        <EventCard event={section} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
