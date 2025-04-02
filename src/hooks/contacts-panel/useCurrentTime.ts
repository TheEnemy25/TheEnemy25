import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useCurrentTime = (timeZone: string) => {
    const { t } = useTranslation();
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const formatter = new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone,
        });

        const updateClock = () => {
            setCurrentTime(`${t("localTime")}: ${formatter.format(new Date())}`);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, [timeZone, t]);

    return currentTime;
};
