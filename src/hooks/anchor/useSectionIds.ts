import { useState, useLayoutEffect } from "react";

const useSectionIds = (selector: string = "main section") => {
    const [sectionIds, setSectionIds] = useState<string[]>([]);

    useLayoutEffect(() => {
        const sections = document.querySelectorAll(selector);
        const ids = Array.from(sections)
            .map((section) => section.getAttribute("id"))
            .filter((id): id is string => Boolean(id));
        setSectionIds(ids);
    }, [selector]);

    return sectionIds;
};

export default useSectionIds;
