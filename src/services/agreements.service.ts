import fetchClient from "@/lib/fetch-client";
import {AgreementType} from "@/types/agreement.type";

export const AgreementsService = {
    async getAll() {
        const response = await fetchClient({
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/panel/agreements",
        });

        const body = await response.json();

        return body.data;
    },

    async   getById({id}: {id: number}): Promise<AgreementType> {
        const response = await fetchClient({
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + `/api/panel/agreements/${id}`,
        });

        const body = await response.json();

        return body.data;
    },
}