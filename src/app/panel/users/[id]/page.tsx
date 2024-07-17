import UsersPage from "@/components/pages/panel/users/users-page";
import UserByIdPage from "@/components/pages/panel/users/user-by-id-page";


export default function UserById({ params }: { params: { id: number } }){
    return <UserByIdPage id={params.id}  />
}