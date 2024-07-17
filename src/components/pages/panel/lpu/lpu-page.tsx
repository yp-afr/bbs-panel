"use client"

import React, {useMemo} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue} from "@nextui-org/react";
import useSWR from "swr";
import {LpuType} from "@/types/lpu.type";

const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then((res) => res.json());

export default function LpuPage() {
    const [page, setPage] = React.useState(1);

    const {data, isLoading} = useSWR(process.env.NEXT_PUBLIC_BACKEND_API_URL + `/api/panel/lpu/${page}`, fetcher, {
        keepPreviousData: true,
    });

    const rowsPerPage = 15;

    const pages = useMemo(() => {
        return data?.data?.total ? Math.ceil(data?.data?.total / rowsPerPage) : 0;
    }, [data?.data?.total, rowsPerPage]);

    const loadingState = isLoading || data?.data?.length === 0 ? "loading" : "idle";

    return (
        <Table
            aria-label="Example table with client async pagination"
            bottomContent={
                pages > 0 ? (
                    <div className="flex w-full justify-center">
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="danger"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                        />
                    </div>
                ) : null
            }
        >
            <TableHeader>
                <TableColumn key="name">Назва</TableColumn>
                <TableColumn key="shortName">Коротка назва</TableColumn>
                <TableColumn key="latitude">lat</TableColumn>
                <TableColumn key="longitude">lng</TableColumn>
                <TableColumn key="category_lpu">Категорія</TableColumn>
                <TableColumn key="category_one_eleven">Категорія (1-11)</TableColumn>
                <TableColumn key="profile">Профіль</TableColumn>
                <TableColumn key="address">Адреса</TableColumn>
                <TableColumn key="city">Місто</TableColumn>
                <TableColumn key="area">Район</TableColumn>
                <TableColumn key="region">Область</TableColumn>

            </TableHeader>
            <TableBody
                items={data?.data?.lpus ?? []}
                loadingContent={<Spinner color='danger' />}
                loadingState={loadingState}
            >
                {(item: LpuType) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}