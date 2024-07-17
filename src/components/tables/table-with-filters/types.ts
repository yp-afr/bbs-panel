export type ColumnType = {
    name: string,
    uid: string,
    sortable?: boolean
}

export type Filter2Type = {
    name: string,
    uid:string
}

export type TableWithFiltersProps<T> = {
    columns: ColumnType[]
    items: T[],
    isLoading: boolean,
    filterKey: keyof T,
    filter2Key: keyof T,
    filter2Options: Filter2Type[]
}

export type SortDescriptor<T> = {
    column: keyof T;
    direction: 'ascending' | 'descending';
};