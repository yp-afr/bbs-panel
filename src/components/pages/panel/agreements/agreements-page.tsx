"use client"


import {TableWithFilters} from "@/components/tables/table-with-filters/table-with-filters";
import {AgreementType} from "@/types/agreement.type";
import {useAgreements} from "@/hooks/useAgreements";
import {TableCell, TableRow} from "@nextui-org/table";
import {RenderCell} from "@/components/pages/panel/agreements/render-cell";
import React, {Suspense} from "react";


export const filter2Options = [
    {name: "Діючий", uid: "ACTIVE"},
    {name: "Звершив свою дію", uid: "COMPLETE"},
]

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
    {name: "К-сть відшкодувань", uid: "refunds"},
    {name: "К-сть записів до лікаря", uid: "appointments"},
    {name: "Дії", uid: "actions"},
];
const AgreementsPage = () => {
    const {isLoading, data} = useAgreements();

    return <TableWithFilters<AgreementType>
        columns={columns}
        isLoading={isLoading}
        items={data}
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
}

export default AgreementsPage;


