import {useQuery} from "@tanstack/react-query";
import {StatsService} from "@/services/stats.service";
import {LogsService} from "@/services/logs.service";


export const useSystemLogs = () => {
    const {isLoading, data} = useQuery({queryKey: ["system logs"], queryFn: LogsService.getSystem});

    return {isLoading, data}
}