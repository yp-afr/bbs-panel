import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";
import {Button} from "@nextui-org/button";
import React, {useEffect} from "react";
import {useDisclosure} from "@nextui-org/react";
import {UserType} from "@/types/user.type";
import {useAuthLog} from "@/hooks/useAuthLog";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
type AuthAttemptsModalProps = {
    isOpen: boolean;
    onOpenChange: () => void;
    user: UserType
}

export const AuthAttemptsModal = ({isOpen,onOpenChange, user}: AuthAttemptsModalProps) => {
    const {isLoading, data} = useAuthLog(user.id);

    return (
        <>
            <Modal isOpen={isOpen} size="2xl" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                               <span> Лог авторизації ({user?.name})</span>
                                <span className="text-gray-600 text-xs font-normal">Останні 10 записів</span>
                            </ModalHeader>
                            <ModalBody>
                                {isLoading ? "Loading..." : (
                                    <Table aria-label="Example static collection table">
                                        <TableHeader>
                                            <TableColumn>IP</TableColumn>
                                            <TableColumn>Тип</TableColumn>
                                            <TableColumn>ОТП</TableColumn>
                                            <TableColumn>К-сть спроб</TableColumn>
                                            <TableColumn>Чи вдало</TableColumn>
                                            <TableColumn>Дата та час</TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            {data.map((item: any) => (
                                                <TableRow key={item.id}>
                                                    <TableCell>{item.ip_address}</TableCell>
                                                    <TableCell>{item.type == 'phone' ?  'Телефон': "ІПН"}</TableCell>
                                                    <TableCell>{item.otp}</TableCell>
                                                    <TableCell>{item.count}</TableCell>
                                                    <TableCell>{item.is_success ? "Так" : "Ні"}</TableCell>
                                                    <TableCell>{new Date(item.updated_at).toLocaleString()}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Назад
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )

}
