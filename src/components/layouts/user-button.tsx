import {useSession} from "next-auth/react";
import {memo} from "react";

const UserButton = ({name,phone}: {name: string | null | undefined, phone: string | null | undefined}) => {

    return (
        <div className="flex flex-col items-end ">
        <span className="text-gray-800">{name}</span>
            <span className="text-gray-500 italic">{phone}</span>
        </div>
    )
}

export default memo(UserButton);