import React, {useCallback, useState} from "react";
import {FileType, UserType} from "@/types/user.type";
import {Key} from "@react-types/shared";
import {User} from "@nextui-org/user";
import {Chip} from "@nextui-org/chip";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {VerticalDotsIcon} from "@/icons/VerticalDotsIcon";
import {
    ArrowLeftEndOnRectangleIcon,
    DocumentDuplicateIcon, InformationCircleIcon,
    PaperClipIcon,
    WrenchIcon
} from "@heroicons/react/24/outline";
import {AuthAttemptsModal} from "@/components/pages/panel/users/auth-attempts-modal";
import {useDisclosure} from "@nextui-org/react";
import Link from "next/link";
import {useSession} from "next-auth/react";

export const RenderCell = ({file, columnKey}: { file: FileType, columnKey: Key }) => {
    const session = useSession();

    const cellValue = file[columnKey];

    switch (columnKey) {
        case "hash":
            return <Link
                href={process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/files/get/" + file.hash + "?token=" + session.data?.accessToken}
                className="text-danger">Завантажити</Link>;
        case "created_at":
            return cellValue ? new Date(cellValue).toLocaleDateString(): null;
        default:
            return cellValue;
    }
}