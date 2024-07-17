import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import BottomContent from "@/components/tables/table-with-filters/bottom-content";
import React, {memo, ReactNode} from "react";
import {useTableState} from "@/components/tables/table-with-filters/useTableState";
import {getFilteredItems, getSortedItems} from "@/components/tables/table-with-filters/filters";
import {TableWithFiltersProps} from "@/components/tables/table-with-filters/types";
import {useTableCallbacks} from "@/components/tables/table-with-filters/useTableCallbacks";
import TopContent from "@/components/tables/table-with-filters/top-content";
import {RowElement} from "@react-types/table";



export const TableWithFilters = <T,>({columns, items, isLoading, filterKey, filter2Key, filter2Options, children}: TableWithFiltersProps<T>
    & { children: (items: T[]) => RowElement<ReactNode>[]}) => {

    const initial_columns =  columns.map(column => column.uid)

    const {
        filterValue, setFilterValue, selectedKeys, setSelectedKeys,
        visibleColumns, setVisibleColumns, statusFilter, setStatusFilter,
        rowsPerPage, setRowsPerPage, sortDescriptor, setSortDescriptor,
        page, setPage,
    } = useTableState({INITIAL_VISIBLE_COLUMNS: initial_columns, filter2Key});

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        if (items) {
            return getFilteredItems<T>({items, filterValue, filterKey, filter2Key, statusFilter, filter2Options});
        }
        return [];
    }, [items, filterValue, filterKey, filter2Key, statusFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const {
        onNextPage, onPreviousPage, onRowsPerPageChange, onSearchChange, onClear
    } = useTableCallbacks({page, pages, setPage, setRowsPerPage, setFilterValue});

    const itemsForSort = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => getSortedItems(itemsForSort, sortDescriptor), [sortDescriptor, itemsForSort]);

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

                sortDescriptor={sortDescriptor}
                topContent={<TopContent
                    columns={columns}
                    filter2Options={filter2Options}
                    filterValue={filterValue} items={items} visibleColumns={visibleColumns}
                    statusFilter={statusFilter}
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
                <TableBody emptyContent={isLoading ? "Завантажуємо дані..." : "Записів не знайдено"}>
                    {children(sortedItems)}
                </TableBody>
            </Table>

        </>
    );
}

