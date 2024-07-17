import {AgreementType} from "@/types/agreement.type";
import {Filter2Type} from "@/components/tables/table-with-filters/types";
import {SortDescriptor} from "@nextui-org/react";

type FilteredItemsProps<T> = {
    items: T[];
    filterKey: keyof T;
    filter2Key: keyof T;
    filterValue: string;

    statusFilter: string;
    filter2Options: Filter2Type[];
};

export const getFilteredItems = <T,>({
                                         items,
                                         filterValue,
                                         filterKey,
                                         filter2Key,
                                         statusFilter,
                                         filter2Options
                                     }: FilteredItemsProps<T>): T[] => {
    let filteredItems = [...items];

    if (filterValue) {
        filteredItems = filteredItems.filter((item) =>
            item[filterKey]?.toString().toLowerCase().includes(filterValue.toLowerCase())
        );
    }

    if (statusFilter !== "all" && Array.from(statusFilter).length !== filter2Options.length) {
        filteredItems = filteredItems.filter((item) =>
            item[filter2Key] !== undefined && Array.from(statusFilter).includes(item[filter2Key]!.toString())
        );
    }

    return filteredItems;
};



export const getSortedItems = <T>(items: T[], sortDescriptor?: SortDescriptor): T[] => {
    if (!sortDescriptor || sortDescriptor.column === undefined) return items;

    return [...items].sort((a, b) => {
        const first = a[sortDescriptor.column as keyof T];
        const second = b[sortDescriptor.column as keyof T];

        if (first === null || first === undefined || second === null || second === undefined) {
            return 0;
        }

        const cmp = first < second ? -1 : first > second ? 1 : 0;
        return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
};
