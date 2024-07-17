import React, {useCallback} from "react";
import {UserType} from "@/types/user.type";
import {Key} from "@react-types/shared";
import {User} from "@nextui-org/user";
import {Chip} from "@nextui-org/chip";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {VerticalDotsIcon} from "@/icons/VerticalDotsIcon";
import {
    ArrowLeftEndOnRectangleIcon,
    DocumentDuplicateIcon,
    PaperClipIcon,
    WrenchIcon
} from "@heroicons/react/24/outline";

export const RenderCell = ({user, columnKey}: {user: UserType, columnKey: Key}) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
        case "name":
            return (
                <User
                    description={user.email}
                    name={cellValue}
                >
                    {user.email}
                </User>
            );
        case "phone":
            return (
                <div className="flex flex-col">
                    <p className="text-bold text-small capitalize">{cellValue}</p>

                </div>
            );
        case "profitId":
            return (
                <Chip className="capitalize" color="primary" size="sm" variant="flat">
                    {cellValue}
                </Chip>
            );
        case "actions":
            return (
                <div className="relative flex justify-end items-center gap-2">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button isIconOnly size="sm" variant="light">
                                <VerticalDotsIcon/>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem startContent={<DocumentDuplicateIcon className="w-4 h-4"/>}>Переглянути
                                договори ({user.agreements_count})</DropdownItem>
                            <DropdownItem startContent={<PaperClipIcon className="w-4 h-4"/>}>Переглянути звернення
                                ({user.refunds_count + user.appointments_count})</DropdownItem>
                            <DropdownItem startContent={<ArrowLeftEndOnRectangleIcon className="w-4 h-4"/>}>Переглянути
                                лог авторизації</DropdownItem>
                            <DropdownItem className="text-danger" color='danger'
                                          startContent={<WrenchIcon className="w-4 h-4"/>}>Зробити
                                адміністратором</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            );
        default:
            return cellValue;
    }
}