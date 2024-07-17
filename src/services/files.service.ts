import fetchClient from "@/lib/fetch-client";

export const FilesService = {

    getAll: async () => {
        const response = await fetchClient({
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/panel/files",
        });

        const body = await response.json();

        return body.data;
    }
}