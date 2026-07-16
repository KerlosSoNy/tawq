'use client'
import TransitionLink from "@/components/atoms/TransitionLink";
import { useActiveTab } from "@/lib/useActiveTab";
import Image from "next/image";
import { useState } from "react";
import { staticLinks } from "./data/links";

export default function Navbar() {

    const [activeTab, setActiveTab] = useState<number>(0);
    const handleActiveTab = (index: number) => {
        if (activeTab === index) return;
        setActiveTab(index);
    };

    useActiveTab(handleActiveTab);

    return (
        <div className="fixed z-100 h-25.5 w-screen px-20 flex flex-row items-center justify-between bg-white/12 backdrop-blur-2xl">
            <div className="flex flex-row items-center gap-10">
                <TransitionLink
                    link={{
                        path: "/",
                        name: "Home",
                    }}
                    image>
                    <Image
                        src="/images/logos/logo.png"
                        alt="Tawq Logo"
                        width={140}
                        height={78}
                        loading="eager"
                    />
                </TransitionLink>
                <div className="flex flex-row items-center gap-2.75">
                    {
                        staticLinks.map((link, index) => (
                            <TransitionLink
                                active={activeTab === index}
                                key={index}
                                link={link}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-row items-center gap-6">
                <button className="relative w-59 h-14 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer">
                    <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                    <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                    <Image src="/images/icons/phone.svg" alt="Tawq Logo" width={24} height={24} className="relative z-10" />
                    <span className="relative z-10 uppercase text-5 font-bold text-white">Get in touch</span>
                </button>

                <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center bg-secondary-300 w-10 h-10 rounded-sm">
                        <Image
                            src="/images/icons/phone.svg"
                            alt="Tawq Logo"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="flex flex-col items-start ">
                        <span className="text-white/50 text-6">
                            Phone
                        </span>
                        <span className="font-bold text-5 text-white -mt-0.5">
                            0539320709
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
