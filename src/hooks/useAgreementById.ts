import {useQuery} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";
import {AgreementsService} from "@/services/agreements.service";
import {AgreementType} from "@/types/agreement.type";

export const useAgreementById = (id: number) => {

    const {isLoading, data} = useQuery<AgreementType>({queryKey: ["get agreement by id", id], queryFn: async () => AgreementsService.getById({id})});

    return {isLoading, data}
}