import {DocumentIcon, UsersIcon, CurrencyDollarIcon, HeartIcon} from '@heroicons/react/24/outline'
import {StatsType} from "@/types/stats.type";
import {Skeleton} from "@nextui-org/skeleton";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function StatsSkeleton() {
    return (
        <div>
            {/*<h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>*/}

            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    key="users_stat"
                    className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                >
                    <dt>

                        <Skeleton className=" w-12 h-12 p-3 rounded-lg absolute"/>


                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">Всього користувучів</p>


                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <Skeleton className="w-1/5 rounded-lg mt-2">
                            <div className=" text-2xl h-3 w-1/5 rounded-lg bg-default-200"></div>
                        </Skeleton>


                    </dd>
                </div>
                <div
                    key="agreements_stat"
                    className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                >
                    <dt>
                        <Skeleton className=" w-12 h-12 p-3 rounded-lg absolute"/>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">Всього договорів</p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <Skeleton className="w-1/5 rounded-lg mt-2">
                            <div className=" text-2xl h-3 w-1/5 rounded-lg bg-default-200"></div>
                        </Skeleton>


                    </dd>
                </div>
                <div
                    key="refunds_stat"
                    className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                >
                    <dt>
                        <Skeleton className=" w-12 h-12 p-3 rounded-lg absolute"/>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">Всього відшкодувань</p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <Skeleton className="w-1/5 rounded-lg mt-2">
                            <div className=" text-2xl h-3 w-1/5 rounded-lg bg-default-200"></div>
                        </Skeleton>


                    </dd>
                </div>
                <div
                    key="appointments_stat"
                    className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                >
                    <dt>
                        <Skeleton className=" w-12 h-12 p-3 rounded-lg absolute"/>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">Всього записів до лікаря</p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <Skeleton className="w-1/5 rounded-lg mt-2">
                            <div className=" text-2xl h-3 w-1/5 rounded-lg bg-default-200"></div>
                        </Skeleton>

                    </dd>
                </div>
            </dl>
        </div>
    )
}
