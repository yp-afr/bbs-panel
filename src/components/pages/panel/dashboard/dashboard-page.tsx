"use client"

import {useStats} from "@/hooks/useStats";
import Stats from "@/components/pages/panel/dashboard/stats";
import StatsSkeleton from "@/components/pages/panel/dashboard/stats-skeleton";

export const DashboardPage = () => {
    const {isLoading, data} = useStats();

    if(isLoading){
        return <StatsSkeleton />
    }

    return <Stats stats={data} />
}