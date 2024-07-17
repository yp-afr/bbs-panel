import {useQuery} from "@tanstack/react-query";
import {FilesService} from "@/services/files.service";


export const useFiles = () => {
    const {isLoading, data} = useQuery({queryKey: ["get files"], queryFn: FilesService.getAll});

    return {isLoading, data}
}