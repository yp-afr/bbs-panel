

import {useQuery} from "@tanstack/react-query";
import {StatsService} from "@/services/stats.service";


export const useStats = () => {
    const {isLoading, data} = useQuery({queryKey: ["stats"], queryFn: StatsService.getStats});

    return {isLoading, data}
}