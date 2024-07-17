import React, {memo} from "react";
import {Input} from "@nextui-org/input";
import {SearchIcon} from "@/icons/SearchIcon";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {ChevronDownIcon} from "@/icons/ChevronDownIcon";
import {capitalize} from "@/lib/utils";
import {ColumnType, Filter2Type} from "@/components/tables/table-with-filters/types";

 type TopContentProps<T> = {
    filterValue: string;
    onSearchChange: (value: string) => void;
    onClear: () => void;
    statusFilter: any;
    setStatusFilter?: (keys: any) => void;
    visibleColumns: any;
    setVisibleColumns?: (keys: any) => void;
    onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    items: T[];
    columns: ColumnType[];
    filter2Options: Filter2Type[];
 }

const TopContent = <T,>({filterValue,
                            onSearchChange,
                            onClear,
                            statusFilter,setStatusFilter,visibleColumns,setVisibleColumns,onRowsPerPageChange,items, columns, filter2Options}: TopContentProps<T>) => {
    return <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
            <Input
                isClearable
                className="w-full sm:max-w-[44%]"
                placeholder="Пошук"
                startContent={<SearchIcon/>}
                value={filterValue}
                onClear={() => onClear()}
                onValueChange={onSearchChange}
            />
            <div className="flex gap-3">
                <Dropdown>
                    <DropdownTrigger className="hidden sm:flex">
                        <Button endContent={<ChevronDownIcon className="text-small"/>} variant="flat">
                             Фільтр
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Table Columns"
                        closeOnSelect={false}
                        selectedKeys={statusFilter}
                        selectionMode="multiple"
                        onSelectionChange={setStatusFilter}
                    >
                        {filter2Options.map((status) => (
                            <DropdownItem key={status.uid} className="capitalize">
                                {capitalize(status.name)}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownTrigger className="hidden sm:flex">
                        <Button endContent={<ChevronDownIcon className="text-small"/>} variant="flat">
                            Колонки
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Table Columns"
                        closeOnSelect={false}
                        selectedKeys={visibleColumns}
                        selectionMode="multiple"
                        onSelectionChange={setVisibleColumns}
                    >
                        {columns.map((column) => (
                            <DropdownItem key={column.uid} className="capitalize">
                                {capitalize(column.name)}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                {/*<Button color="primary" endContent={<PlusIcon/>}>*/}
                {/*    Add New*/}
                {/*</Button>*/}
            </div>
        </div>
        <div className="flex justify-between items-center">
            <span className="text-default-400 text-small">Всього {items?.length} договорів</span>
            <label className="flex items-center text-default-400 text-small">
                Рядків на сторінці
                <select
                    className="bg-transparent outline-none text-default-400 ml-2 text-small"
                    onChange={onRowsPerPageChange}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </label>
        </div>
    </div>
}

export default memo(TopContent);