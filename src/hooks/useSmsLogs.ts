import {useQuery} from "@tanstack/react-query";
import {LogsService} from "@/services/logs.service";


export const useSmsLogs = () => {
    const {isLoading, data} = useQuery({queryKey: ["sms logs"], queryFn: LogsService.getSms});

    return {isLoading, data}
}