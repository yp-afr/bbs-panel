"use client"

import {memo} from "react";
import {useAgreementById} from "@/hooks/useAgreementById";
import {InformationCircleIcon, PaperClipIcon, UserIcon} from "@heroicons/react/24/outline";
import {Card, CardBody, CardHeader} from "@nextui-org/card";

const AgreementByIdPage = ({ id }: { id: number }) => {
    const {isLoading, data} = useAgreementById(id);

    const requests_count = (data?.appointments?.length || 0) + (data?.refunds?.length || 0);

    return <div>
        <div>
            <span className="text-gray-600">Договір №</span>
            <h2 className="text-3xl">{data?.number}</h2>
        </div>
        <div className="flex w-full flex-col mt-5 space-y-5">
            <Card >
                <CardHeader className="space-x-3 text-blue-500">
                    <InformationCircleIcon className="w-5 h-5"/>
                    <span>Інформація</span>
                </CardHeader>
                <CardBody>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            <span className="text-gray-600">Номер картки</span>
                            <span className="text-lg">{data?.card_number}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600">ProfitId</span>
                            <span className="text-lg">{data?.profitId}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600">Статус</span>
                            <span className="text-lg">{data?.status}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600">Дата початку дії</span>
                            <span className="text-lg">{data?.dateStart ? new Date(data?.dateStart).toLocaleDateString(): null}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600">Дата закінчення дії</span>
                            <span className="text-lg">{data?.dateEnd ? new Date(data?.dateEnd).toLocaleDateString(): null}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600">Ціна</span>
                            <span className="text-lg">{data?.price} {data?.currency}</span>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card>
                <CardHeader className="space-x-3 text-red-500">
                    <UserIcon className="w-5 h-5"/>
                    <span>Клієнт</span>
                </CardHeader>
                <CardBody>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            <span className="text-gray-600">ПІБ</span>
                            <span className="text-lg">{data?.client?.name}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600">Email</span>
                            <span className="text-lg">{data?.client?.email}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600">Номер телефону</span>
                            <span className="text-lg">{data?.client?.phone}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600">ProfitId</span>
                            <span className="text-lg">{data?.client?.profitId}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600">Дата народження</span>
                            <span className="text-lg">{data?.client?.birthday ? new Date(data?.client?.birthday).toLocaleDateString(): null}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600">ІПН</span>
                            <span className="text-lg">{data?.client?.ipn}</span>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card>
                <CardHeader className="space-x-3 text-green-500">
                    <PaperClipIcon className="w-5 h-5"/>
                    <span>Звернення ({requests_count})</span>
                </CardHeader>

            </Card>

            {/*<Tabs aria-label="Options" color="danger" variant="bordered"  isVertical >*/}
            {/*    <Tab*/}
            {/*        className="items-center justify-start w-full"*/}
            {/*        key="info"*/}
            {/*        title={*/}
            {/*            <div className="flex items-center space-x-2">*/}
            {/*                <InformationCircleIcon className="w-5 h-5"/>*/}
            {/*                <span>Інформація</span>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*    >*/}
            {/*       */}
            {/*    </Tab>*/}
            {/*    <Tab*/}
            {/*        className="items-center justify-start w-full"*/}
            {/*        key="client"*/}
            {/*        title={*/}
            {/*            <div className="flex items-center space-x-2">*/}
            {/*                <UserIcon className="w-5 h-5"/>*/}
            {/*                <span>Клієнт</span>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*    >*/}
            {/*       </Tab>*/}
            {/*    <Tab*/}
            {/*        className="items-center justify-start"*/}
            {/*        key="requests"*/}
            {/*        title={*/}
            {/*            <div className="flex items-center space-x-2">*/}
            {/*                <PaperClipIcon className="w-5 h-5"/>*/}
            {/*                <span>Звернення ({requests_count})</span>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*    />*/}
            {/*</Tabs>*/}
        </div>
    </div>
}


export default memo(AgreementByIdPage);