import { useLayoutEffect, useState } from "react";

// Function to convert offset value to pixels if passed a string of type "6rem"
const convertOffsetToPx = (offset: number | string): number => {
    if (typeof offset === "number") return offset;
    if (typeof offset === "string" && offset.endsWith("rem")) {
        const remValue = parseFloat(offset);
        const baseFontSize =
            parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        return remValue * baseFontSize;
    }
    return 0;
};

const useScrollspy = (ids: string[], offset: number | string = "auto") => {
    const [activeId, setActiveId] = useState("");

    useLayoutEffect(() => {
        const handleScroll = () => {
            // If offset is "auto", then we get the current header height every time
            const offsetPx =
                offset === "auto"
                    ? document.querySelector("header")?.clientHeight || 0
                    : convertOffsetToPx(offset);
            const scroll = window.scrollY;
            const position = scroll + offsetPx + 1;

            const sections = ids
                .map((id) => {
                    const el = document.getElementById(id);
                    if (el) {
                        const top = el.offsetTop;
                        const bottom = top + el.offsetHeight;
                        return { id, top, bottom };
                    }
                    return null;
                })
                .filter(Boolean) as { id: string; top: number; bottom: number }[];

            let active = "";
            for (const section of sections) {
                if (position < section.bottom) {
                    active = section.id;
                    break;
                }
            }
            if (!active && sections.length > 0) {
                active = sections[sections.length - 1].id;
            }

            setActiveId(active);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [ids, offset]);

    return activeId;
};

export default useScrollspy;