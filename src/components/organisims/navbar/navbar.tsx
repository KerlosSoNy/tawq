'use client'
import TransitionLink from "@/components/atoms/TransitionLink";
import { useActiveTab } from "@/lib/useActiveTab";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { staticLinks } from "@/components/organisims/navbar/data/links";
import { useNavTheme } from "@/lib/hooks/useNavTheme";

export default function Navbar() {
    const isWhiteBg = useNavTheme();
    const [activeTab, setActiveTab] = useState<number>(0);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const handleActiveTab = (index: number) => {
        if (activeTab === index) return;
        setActiveTab(index);
    };

    useActiveTab(handleActiveTab);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const handleClickMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(e.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    return (
        <div className="fixed z-100 top-0 left-0 w-screen">
            <div className={`h-22 3xl:h-25.5 w-full px-4 md:px-10 3xl:px-20 flex flex-row items-center justify-between  ${isWhiteBg ? "bg-white/36" : "bg-white/12"} backdrop-blur-2xl`}>
                <div className="flex flex-row items-center gap-10">
                    <Link
                        href="/"
                        className={`${isWhiteBg && "filter-teal"}`}
                    >
                        <Image
                            src="/images/logos/logo.png"
                            alt="Tawq Logo"
                            width={140}
                            height={78}
                            loading="eager"
                            className="w-24 h-auto xl:w-35 "
                        />
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden xl:flex flex-row items-center gap-2.75">
                        {
                            staticLinks.map((link: any, index: any) => (
                                <TransitionLink
                                    active={activeTab === index}
                                    key={index}
                                    link={link}
                                />
                            ))
                        }
                    </div>
                </div>

                {/* Desktop right side */}
                <div className="hidden xl:flex flex-row items-center gap-6">
                    <button className="relative w-50 3xl:w-59 h-12 3xl:h-14 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer">
                        <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                        <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                        <Image src="/images/icons/phone.svg" alt="Tawq Logo" width={24} height={24} className="relative z-10" />
                        <span className="relative z-10 uppercase text-[16px] 3xl:text-5 font-bold text-white">Get in touch</span>
                    </button>

                    <div className="flex flex-row items-center gap-2 3xl:gap-4">
                        <div className="flex items-center justify-center bg-secondary-300 w-10 h-10 rounded-sm">
                            <Image
                                src="/images/icons/phone.svg"
                                alt="Tawq Logo"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className={`text-white/50 text-[14px] 3xl:text-6 ${isWhiteBg && "text-black/50!"}`}>
                                Phone
                            </span>
                            <span className={`font-bold text-[16px] 3xl:text-5 text-white -mt-0.5 ${isWhiteBg && "filter-teal"}`}>
                                0539320709
                            </span>
                        </div>
                    </div>
                </div>

                <button
                    className={`xl:hidden relative focus:outline-0 focus:ring-0 focus:border-0 z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer ${isWhiteBg && "filter-teal"}`}
                    onClick={() => {
                        handleClickMenu();
                    }}
                    ref={menuButtonRef}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            <div
                ref={menuRef}
                className={`xl:hidden w-87.5 h-screen bg-black/12 backdrop-blur-2xl top-0 left-0 fixed overflow-hidden transition-all duration-500 ease-in-out 
                    ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-8 px-6 py-24 max-h-screen overflow-scroll">
                    <div className="flex flex-col items-center gap-12">
                        {
                            staticLinks.map((link: any, index: number) => (
                                <div key={index} onClick={handleLinkClick}>
                                    <TransitionLink
                                        active={activeTab === index}
                                        link={link}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    <button className="relative w-full h-14 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer">
                        <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                        <Image src="/images/icons/phone.svg" alt="Tawq Logo" width={24} height={24} className="relative z-10" />
                        <span className="relative z-10 uppercase text-5 font-bold text-white">Get in touch</span>
                    </button>

                    <div className="flex flex-row mx-auto items-center gap-4">
                        <div className="flex items-center justify-center bg-secondary-300 w-10 h-10 rounded-sm shrink-0">
                            <Image
                                src="/images/icons/phone.svg"
                                alt="Tawq Logo"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className={`text-white/50 text-6 ${isWhiteBg && "text-black/50!"}`}>
                                Phone
                            </span>
                            <span className={`font-bold text-5 text-white -mt-0.5 ${isWhiteBg && "filter-teal"}`}>
                                0539320709
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}