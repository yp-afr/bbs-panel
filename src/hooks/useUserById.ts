import {useQuery} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";

export const useUserById = (userId: number) => {
    const {isLoading, data} = useQuery({queryKey: ["get user by id", userId], queryFn: () => UserService.getUserById(userId)});

    return {isLoading, data}
}