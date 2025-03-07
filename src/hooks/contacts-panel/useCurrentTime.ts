import { useState, useEffect } from "react";

export const useCurrentTime = (timeZone: string) => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const formatter = new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone,
        });

        const updateClock = () => {
            setCurrentTime(`Local time: ${formatter.format(new Date())}`);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, [timeZone]);

    return currentTime;
};
