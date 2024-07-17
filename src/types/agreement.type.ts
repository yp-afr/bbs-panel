import {UserType} from "@/types/user.type";


export type AgreementType = {

    id: number;
    number: string;
    card_number: string;
    profitId: number;
    dateStart: string;
    dateEnd: string;
    price: number;
    currency: string;
    status: string;
    hash: string;
    client_id: number;
    profitTariffPlanId: number;
    created_at: string;
    updated_at: string;
    client: UserType;
    refunds: Array<any>;
    appointments: Array<any>;

    //TODO: change any

    [key: string]: any;

}

