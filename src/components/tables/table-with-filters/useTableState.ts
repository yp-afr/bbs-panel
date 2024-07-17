
import {useState} from "react";
import {Selection, SortDescriptor} from "@nextui-org/react";
import {Filter2Type} from "@/components/tables/table-with-filters/types";
import {Key} from "@react-types/shared";

type TableStateProps<T> = {
    INITIAL_VISIBLE_COLUMNS: string[];
    filter2Key: keyof T
}

export const useTableState = <T,>({INITIAL_VISIBLE_COLUMNS, filter2Key}: TableStateProps<T>) => {

    const [filterValue, setFilterValue] = useState("");
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
    const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = useState("all");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: filter2Key as Key,
        direction: "ascending"
    });
    const [page, setPage] = useState(1);

    return {
        filterValue,
        setFilterValue,
        selectedKeys,
        setSelectedKeys,
        visibleColumns,
        setVisibleColumns,
        statusFilter,
        setStatusFilter,
        rowsPerPage,
        setRowsPerPage,
        sortDescriptor,
        setSortDescriptor,
        page,
        setPage,
    };
};