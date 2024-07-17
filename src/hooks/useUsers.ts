import {useQuery} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";

export const useUsers = () => {
    const {isLoading, data} = useQuery({queryKey: ["get users"], queryFn: UserService.getAll});

    return {isLoading, data}
}