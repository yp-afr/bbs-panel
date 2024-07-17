
const UserButton = () => {
    return (
        <div className="flex flex-col items-end ">
        <span className="text-gray-800">{session.data?.user?.name}</span>
            <span className="text-gray-500 italic">{session.data?.user?.phone}</span>
        </div>
    )
}