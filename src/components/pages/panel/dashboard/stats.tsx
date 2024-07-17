import {DocumentIcon, UsersIcon, CurrencyDollarIcon, HeartIcon} from '@heroicons/react/24/outline'
import {StatsType} from "@/types/stats.type";
import {memo} from "react";
import {useSession} from "next-auth/react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

 const Stats = memo(({stats}: {stats: StatsType}) => {
     const session = useSession();

    return (
        <div>

            {/*<h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>*/}


            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    key="users_stat"
                    className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                >
                    <dt>
                        <div className="absolute bg-red-500 rounded-md p-3">
                            <UsersIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">Всього користувучів</p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900">{stats.users_count}</p>

                        <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-red-600 hover:text-red-500">
                                    {' '}
                                    Переглянути
                                </a>
                            </div>
                        </div>
                    </dd>
                </div>
                <div
                    key="agreements_stat"
                    className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                >
                    <dt>
                        <div className="absolute bg-red-500 rounded-md p-3">
                            <DocumentIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">Всього договорів</p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900">{stats.agreements_count}</p>

                        <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-red-600 hover:text-red-500">
                                    {' '}
                                    Переглянути
                                </a>
                            </div>
                        </div>
                    </dd>
                </div>
                <div
                    key="refunds_stat"
                    className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                >
                    <dt>
                        <div className="absolute bg-red-500 rounded-md p-3">
                            <CurrencyDollarIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">Всього відшкодувань</p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900">{stats.refunds_count}</p>

                        <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-red-600 hover:text-red-500">
                                    {' '}
                                    Переглянути
                                </a>
                            </div>
                        </div>
                    </dd>
                </div>
                <div
                    key="appointments_stat"
                    className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                >
                    <dt>
                        <div className="absolute bg-red-500 rounded-md p-3">
                            <HeartIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">Всього записів до лікаря</p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900">{stats.appointments_count}</p>

                        <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-red-600 hover:text-red-500">
                                    {' '}
                                    Переглянути
                                </a>
                            </div>
                        </div>
                    </dd>
                </div>
            </dl>
        </div>
    )
})

export default Stats
Stats.displayName = 'Stats'