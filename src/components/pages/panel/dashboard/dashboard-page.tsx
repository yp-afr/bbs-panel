"use client"

import {useStats} from "@/hooks/useStats";

export const DashboardPage = () => {
    const {isLoading, data} = useStats();

    return <div>
        {isLoading && <div>Loading...</div>}
        <div>
            {data && <div>
                <div>Users: {data.users_count}</div>
                <div>Agreements: {data.agreements_count}</div>
            </div>}
        </div>
    </div>
}