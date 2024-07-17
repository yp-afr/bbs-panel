import {useQuery} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";

export const useAuthLog = (userId: number) => {
    const {isLoading, data} = useQuery({queryKey: ["get auth log", userId], queryFn: () => UserService.getAuthLogs(userId)});

    return {isLoading, data}
}