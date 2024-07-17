import {Key} from "@react-types/shared";
import {AgreementType} from "@/types/agreement.type";
import {Chip} from "@nextui-org/chip";
import React from "react";
import {
    ArrowLeftEndOnRectangleIcon,
    DocumentDuplicateIcon, InformationCircleIcon,
    PaperClipIcon,
    UserIcon,
    WrenchIcon
} from "@heroicons/react/24/outline";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {VerticalDotsIcon} from "@/icons/VerticalDotsIcon";
import {AuthAttemptsModal} from "@/components/pages/panel/users/auth-attempts-modal";

export const RenderCell = ({agreement, columnKey}: { agreement: AgreementType, columnKey: Key }) => {
    const cellValue = agreement[columnKey];


    switch (columnKey) {
        case "dateStart":
            return new Date(cellValue).toLocaleDateString();
        case "dateEnd":
            return new Date(cellValue).toLocaleDateString();
        case "price":
            return `${cellValue} грн`;
        case "number":
            return cellValue;
        case "profitId":
            return (
                <Chip className="capitalize" color="primary" size="sm" variant="flat">
                    {cellValue}
                </Chip>
            );
        case "client":
            return (
                <Chip className="capitalize" color="success" size="sm" variant="flat">
                    <div className="flex space-x-1 items-center">
                        <UserIcon className="w-3 h-3"/>
                        <span>{cellValue.name}</span>
                    </div>
                </Chip>
            );
        case "refunds":
            return cellValue.length;
        case "appointments":
            return cellValue.length;
        case "actions":

            return (
                <>
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <VerticalDotsIcon/>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem href={`/panel/agreements/${agreement.id}`} startContent={<InformationCircleIcon className="w-4 h-4"/>}>Переглянути</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                    </div>
                </>
            );

    }

    return cellValue
}