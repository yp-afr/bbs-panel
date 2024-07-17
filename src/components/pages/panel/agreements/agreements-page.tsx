"use client"

import React, {ChangeEvent} from "react";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {columns, statusOptions} from "@/components/pages/panel/users/data";
import {useUsers} from "@/hooks/useUsers";
import UsersFilters from "@/components/pages/panel/users/filters";
import {Selection, SortDescriptor} from "@nextui-org/react";
import {UserType} from "@/types/user.type";
import {RenderCell} from "@/components/pages/panel/users/render-cell";
import BottomContent from "@/components/pages/panel/users/bottom-content";


const INITIAL_VISIBLE_COLUMNS = ["id", "name", "phone", "profitId", "ipn", "birthday", "actions"];
const UsersPage = () => {
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>();
    const [page, setPage] = React.useState(1);

    const {isLoading, data: users} = useUsers();


    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if ("all" === visibleColumns) return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems: UserType[] = React.useMemo(() => {
        if (users) {
            let filteredUsers = [...users];

            if (hasSearchFilter) {
                filteredUsers = filteredUsers.filter((user) =>
                    user.name.toLowerCase().includes(filterValue.toLowerCase()),
                );
            }
            if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
                filteredUsers = filteredUsers.filter((user) =>
                    Array.from(statusFilter).includes(user.role),
                );
            }

            return filteredUsers;
        }

        return [];

    }, [users, filterValue, statusFilter]);


    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        if (!sortDescriptor) return items;
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column ?? "id"];
            const second = b[sortDescriptor.column ?? "id"];
            if (first === null || second === null) {
                return 0;
            }

            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);


    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = React.useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    return (
        <>
            <Table
                aria-label="table"
                isHeaderSticky
                bottomContent={<BottomContent page={page} pages={pages} setPage={setPage} onNextPage={onNextPage}
                                              onPreviousPage={onPreviousPage} selectedKeys={selectedKeys}
                                              filteredItems={filteredItems}/>}
                bottomContentPlacement="outside"
                classNames={{
                    wrapper: "max-h-[382px]",
                }}
                selectedKeys={selectedKeys}
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                topContent={<UsersFilters
                    filterValue={filterValue} users={users} visibleColumns={visibleColumns} statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                    setVisibleColumns={setVisibleColumns} onSearchChange={onSearchChange} onClear={onClear}
                    onRowsPerPageChange={onRowsPerPageChange}
                />}
                topContentPlacement="outside"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={isLoading ? "Завантажуємо користувачів..." : "Користувачів не знайдено"}
                           items={sortedItems}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>
                                <RenderCell user={item} columnKey={columnKey}/>
                            </TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

        </>
    );
}

export default UsersPage;