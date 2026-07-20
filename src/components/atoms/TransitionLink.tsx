"use client"
import React, { FC } from 'react';
import Link from "next/link";
import { usePageTransition } from '@/lib/UsePageTransition';
import { cn } from '@/lib/utils';
import { link } from '@/types/globals';
import { useNavTheme } from '@/lib/hooks/useNavTheme';

interface Props {
    active?: boolean,
    disableLinks?: boolean,
    link: link
    image?: boolean
    children?: React.ReactNode
    onclick?: () => void;
}

const TransitionLink: FC<Props> = ({ active, link, children, onclick }) => {
    const transition = usePageTransition()
    const isWhiteBg = useNavTheme();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        await transition(href)
    };

    return (
        <Link aria-label={link.name} onClick={async (e) => {
            if (onclick) {
                onclick()
            }
            await handleTransition(e, link.path)
        }}
            href={link.path}
            className={cn(
                "text-white/60! mx-2.5 uppercase text-[16px] 3xl:text-5 font-bold transition-colors duration-500",
                "hover:text-white! hover:-mb-px hover:border-b hover:border-white",
                {
                    "text-white! -mb-px border-b border-white": active,
                    "filter-teal": isWhiteBg
                }
            )}
        >
            {children ? (
                <div className={cn("", {
                    "filter-nav": active
                })}>
                    {children}
                    <span className="sr-only">{link.name}</span>
                </div>
            ) : (
                link.name
            )}
        </Link>
    );
};

export default TransitionLink;
