"use client"

import {useFiles} from "@/hooks/useFiles";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import Link from "next/link";
import {Spinner} from "@nextui-org/react";
import React from "react";
import {useSession} from "next-auth/react";

const FilesPage = () => {
    const {isLoading, data: files} = useFiles();
    const session = useSession();

    return <Table
        layout="fixed"
        width={100}
        color="danger"
        selectionMode="single"

        aria-label="Example static collection table"
    >
        <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>-</TableColumn>


            <TableColumn>Назва</TableColumn>
            <TableColumn>Шлях</TableColumn>
            <TableColumn>Тип</TableColumn>
            <TableColumn>Розмір</TableColumn>
            <TableColumn>Користувач</TableColumn>
            <TableColumn>Дата створення</TableColumn>
        </TableHeader>
        <TableBody loadingContent={<Spinner color='danger' />}  loadingState={isLoading ? 'loading' : 'idle'}>
            {files?.map((file: any) => (
                <TableRow key={file.id}>
                    <TableCell>{file.id}</TableCell>
                    <TableCell>
                        <Link href={process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/files/get/" + file.hash + "?token=" + session.data?.accessToken} className="text-danger">Завантажити</Link>
                        </TableCell>
                    <TableCell>
                        <Popover>
                            <PopoverTrigger>
                                <a className="break-words">{file.name.slice(0,10)}...</a>
                            </PopoverTrigger>
                            <PopoverContent>{file.name}</PopoverContent>
                        </Popover>
                    </TableCell>
                    <TableCell>
                        <Popover>
                            <PopoverTrigger>
                                <a className="break-words">{file.path.slice(0,10)}...</a>
                            </PopoverTrigger>
                            <PopoverContent>{file.path}</PopoverContent>
                        </Popover>
                    </TableCell>
                    <TableCell>{file.type}</TableCell>
                    <TableCell>{file.size}</TableCell>
                    <TableCell>{file.user_id}</TableCell>
                    <TableCell>{file.created_at}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
}

export default FilesPage;