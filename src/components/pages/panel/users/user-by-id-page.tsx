"use client"

import {useUserById} from "@/hooks/useUserById";
import {AgreementType} from "@/types/agreement.type";
import {TableCell, TableRow} from "@nextui-org/table";
import {RenderCell} from "@/components/pages/panel/agreements/render-cell";
import {RenderCell as RenderCellFile} from "@/components/pages/panel/files/render-cell";
import {TableWithFilters} from "@/components/tables/table-with-filters/table-with-filters";
import React from "react";
import {filter2Options} from "@/components/pages/panel/agreements/agreements-page";
import {Divider} from "@nextui-org/divider";
import {FileType} from "@/types/user.type";

export const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "Номер договору", uid: "number", sortable: true},
    {name: "Номер картки", uid: "card_number", sortable: true},
    {name: "ID Profit", uid: "profitId", sortable: true},
    {name: "Початок дії", uid: "dateStart", sortable: true},
    {name: "Закінчення дії", uid: "dateEnd", sortable: true},
    {name: "Ціна", uid: "price"},
    {name: "Валюта", uid: "currency"},
    {name: "Статус", uid: "status"},
    {name: "Користувач", uid: "client"},
    {name: "Дії", uid: "actions"},
];

export const columnsFile = [
    {name: "ID", uid: "id", sortable: true},

    {name: "Завантажити", uid: "hash", sortable: true},
    {name: "Назва файлу", uid: "name", sortable: true},
    {name: "Тип файлу", uid: "type", sortable: true},
    {name: "Розмір", uid: "size", sortable: true},
    {name: "Дата створення", uid: "created_at", sortable: true},
];

export const filter2OptionsFile = []

const UserByIdPage = ({id}: { id: number }) => {
    const {isLoading, data} = useUserById(id);


    return <div>
        <div>
            <span className="text-gray-600">Користувач</span>
            <h2 className="text-3xl">{data?.name}</h2>
        </div>
        <div className="flex w-full flex-col mt-5 space-y-5">
            <div className="grid grid-cols-3 gap-4">

                <div className="flex flex-col">
                    <span className="text-gray-600">Email</span>
                    <span className="text-lg">{data?.email}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-600">Телефон</span>
                    <span className="text-lg">{data?.phone}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-600">Дата народження</span>
                    <span
                        className="text-lg">{data?.birthday ? new Date(data?.birthday).toLocaleDateString() : null}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-600">ProfitId</span>
                    <span className="text-lg">{data?.profitId}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-600">ІПН</span>
                    <span className="text-lg">{data?.ipn}</span>
                </div>
            </div>
        </div>
        {/*Договори*/}
        <div className="mt-12">
            <span className="text-xl ">Договори</span>
            <Divider className="my-4"/>
            <div className="mt-5">
                <TableWithFilters<AgreementType>
                    columns={columns}
                    isLoading={isLoading}
                    items={data?.agreements}
                    filterKey="number"
                    filter2Key="status"
                    filter2Options={filter2Options}

                >
                    {(items: AgreementType[]) => (
                        items.map((item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>
                                    <RenderCell agreement={item} columnKey={columnKey}/>
                                </TableCell>}
                            </TableRow>
                        ))
                    )}
                </TableWithFilters>
            </div>
        </div>

        <div className="mt-12">
            <span className="text-xl ">Файли</span>
            <Divider className="my-4"/>
            <div className="mt-5">
                <TableWithFilters<FileType>
                    columns={columnsFile}
                    isLoading={isLoading}
                    items={data?.files}
                    filterKey="name"
                    filter2Key="type"
                    filter2Options={filter2OptionsFile}

                >
                    {(items: FileType[]) => (
                        items.map((item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>
                                    <RenderCellFile file={item} columnKey={columnKey}/>
                                </TableCell>}
                            </TableRow>
                        ))
                    )}
                </TableWithFilters>
            </div>
        </div>


    </div>
}

export default UserByIdPage;