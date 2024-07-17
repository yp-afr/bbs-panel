import React, {ChangeEvent} from "react";

type TableCallbacksProps = {
    page: number;
    pages: number;
    setPage: (value: number) => void;
    setRowsPerPage: (value: number) => void;
    setFilterValue: (value: string) => void;
}

export const useTableCallbacks = ({page, pages, setPage, setRowsPerPage, setFilterValue}: TableCallbacksProps) => {
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

    return {onNextPage, onPreviousPage, onRowsPerPageChange, onSearchChange, onClear}
}