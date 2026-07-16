import { useEffect } from "react";
import { usePathname } from "next/navigation";

const pathToTabIndex: Record<string, number> = {
    "/": 0,
    "/about-us": 1,
    "/experience": 2,
    "/packages": 3,
  
};

const prefixToTabIndex: [string, number][] = [
    ["/experience/", 2],
    ["/packages/" ,3],
];

export function useActiveTab(handleActiveTab: (index: number) => void) {
    const pathname = usePathname();

    useEffect(() => {
        const exactMatch = pathToTabIndex[pathname];

        if (exactMatch !== undefined) {
            handleActiveTab(exactMatch);
            return;
        }

        const prefixMatch = prefixToTabIndex.find(([prefix]) =>
            pathname.startsWith(prefix)
        );

        handleActiveTab(prefixMatch ? prefixMatch[1] : 0);
    }, [pathname, handleActiveTab]);
}