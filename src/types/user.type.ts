import {Key} from "@react-types/shared";

export type UserType = {
    id: number,
    name: string,
    email: string | null,
    phone: string,
    created_at: string,
    updated_at: string,
    profitId: string | null,
    fullNameLatin: string | null,
    birthday: string | null,
    ipn: string | null,
    role: string,
    agreements_count: number,
    refunds_count: number,
    appointments_count: number,

    [key: Key]: string | number | null;
}


export type FileType = {
    id: number,
    name: string,
    path: string,
    hash: string,
    type: string,
    size: number,
    user_id: number,
    created_at: string,
    updated_at: string,

    [key: Key]: string | number | null;
}