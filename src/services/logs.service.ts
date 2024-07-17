import fetchClient from "@/lib/fetch-client";

export const LogsService = {
    getSystem: async () => {
        const response = await fetchClient({
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/panel/logs/system",
        });

        const body = await response.json();

        return body.data;
    },

    getProfit: async () => {
        const response = await fetchClient({
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/panel/logs/profit",
        });

        const body = await response.json();

        return body.data;
    },

    getSms: async () => {
        const response = await fetchClient({
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/panel/logs/sms",
        });

        const body = await response.json();

        return body.data;
    }
}