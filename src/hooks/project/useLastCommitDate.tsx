import { useEffect, useState } from "react";

export const useLastCommitDate = (repoName: string) => {
    const [lastCommitDate, setLastCommitDate] = useState<string | null>(null);

    useEffect(() => {
        const fetchLastCommitDate = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/repos/TheEnemy25/${repoName}/commits`
                );

                if (!response.ok) {
                    console.error(`Error ${response.status}: ${response.statusText}`);
                    return;
                }

                const data = await response.json();

                if (!Array.isArray(data) || data.length === 0) {
                    console.error("No commit data found.");
                    return;
                }

                const date = new Date(data[0].commit.committer.date).toLocaleDateString();
                setLastCommitDate(date);
            } catch (error) {
                console.error("Failed to fetch commit date:", error);
            }
        };

        fetchLastCommitDate();
    }, [repoName]);

    return lastCommitDate;
};
