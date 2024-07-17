"use client"

import React from "react";
import {TableCell,  TableRow} from "@nextui-org/table";

import {useUsers} from "@/hooks/useUsers";

import {UserType} from "@/types/user.type";
import {RenderCell} from "@/components/pages/panel/users/render-cell";

import {TableWithFilters} from "@/components/tables/table-with-filters/table-with-filters";


const filter2Options = [
    {name: "Користувач", uid: "user"},
    {name: "Адміністратор", uid: "admin"},
]

const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "ПІБ", uid: "name", sortable: true},
    {name: "Номер телефону", uid: "phone", sortable: true},
    {name: "ID Profit", uid: "profitId", sortable: true},
    {name: "ІПН", uid: "ipn", sortable: true},
    {name: "Дата народження", uid: "birthday", sortable: true},
    {name: "Дії", uid: "actions"},
];
const UsersPage = () => {
    const {isLoading, data} = useUsers();

    return <TableWithFilters<UserType>
        columns={columns}
        isLoading={isLoading}
        items={data}
        filterKey="name"
        filter2Key="role"
        filter2Options={filter2Options}

    >
        {(items: UserType[]) => (
            items.map((item) => (
                <TableRow key={item.id}>
                    {(columnKey) => <TableCell>
                        <RenderCell user={item} columnKey={columnKey}/>
                    </TableCell>}
                </TableRow>
            ))
        )}
    </TableWithFilters>
}

export default UsersPage;