import {useQuery} from "@tanstack/react-query";
import {LogsService} from "@/services/logs.service";


export const useProfitLogs = () => {
    const {isLoading, data} = useQuery({queryKey: ["profit logs"], queryFn: LogsService.getProfit});

    return {isLoading, data}
}