import {useQuery} from "@tanstack/react-query";
import {AgreementsService} from "@/services/agreements.service";


export const useAgreements = () => {
    const {isLoading, data} = useQuery({queryKey: ["get agreements"], queryFn: AgreementsService.getAll});

    return {isLoading, data}
}