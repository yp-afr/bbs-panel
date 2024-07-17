import fetchClient from "@/lib/fetch-client";


export const UserService = {
    getAll: async () => {
        const response = await fetchClient({
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/panel/users",
        });

        const body = await response.json();

        return body.data;
    },

    getAuthLogs: async (userId: number) => {
        const response = await fetchClient({
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + `/api/panel/users/${userId}/authLog`,
        });

        const body = await response.json();

        return body.data;
    },

    getUserById: async (userId: number) => {
        const response = await fetchClient({
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + `/api/panel/users/${userId}`,
        });

        const body = await response.json();

        return body.data;
    },
}