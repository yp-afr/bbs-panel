import fetchClient from "@/lib/fetch-client";

export const StatsService = {
    getStats: async () => {
        const response = await fetchClient({
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/panel/stats",
        });

        const body = await response.json();

        return body.data;
    }
};
