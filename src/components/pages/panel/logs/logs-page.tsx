"use client"

import {Tab, Tabs} from "@nextui-org/tabs";
import {ChatBubbleLeftIcon, ComputerDesktopIcon, WrenchScrewdriverIcon} from "@heroicons/react/24/outline";
import {Table, TableBody, TableCell,TableRow, TableColumn, TableHeader} from "@nextui-org/table";
import {useSystemLogs} from "@/hooks/useSystemLogs";
import {useProfitLogs} from "@/hooks/useProfitLogs";
import {useSmsLogs} from "@/hooks/useSmsLogs";
import {Button} from "@nextui-org/button";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Spinner} from "@nextui-org/react";
import React from "react";


const LogsPage = () => {
    const {isLoading: isLoadingSystem, data: system_logs} = useSystemLogs();
    const {isLoading: isLoadingProfit, data: profit_logs} = useProfitLogs();
    const {isLoading: isLoadingSms, data: sms_logs} = useSmsLogs();

    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Options" isVertical={true} >
                <Tab key="photos" title={
                    <div className="flex items-center space-x-2">
                        <WrenchScrewdriverIcon className="w-4 h-4"/>
                        <span>API</span>
                    </div>
                }>
                    <div>

                        <Table
                            layout="fixed"
                            width={100}
                            color="danger"
                            selectionMode="single"

                            aria-label="Example static collection table"
                        >
                            <TableHeader>
                                <TableColumn>ID</TableColumn>
                                <TableColumn>Рівень</TableColumn>
                                <TableColumn>Час</TableColumn>
                                <TableColumn>Повідомлення</TableColumn>
                                <TableColumn>Контекст</TableColumn>
                                <TableColumn>Екстра</TableColumn>
                                <TableColumn>Дата створення</TableColumn>
                            </TableHeader>
                            <TableBody loadingContent={<Spinner color='danger' />}  loadingState={isLoadingSystem ? 'loading' : 'idle'}>
                                {system_logs?.map((log:any, index: bigint) => (
                                    <TableRow key={index}>
                                        <TableCell>{log.id}</TableCell>
                                        <TableCell>{log.level}</TableCell>
                                        <TableCell>{log.timestamp}</TableCell>
                                        <TableCell className="break-words">{log.message}</TableCell>
                                        <TableCell>
                                            <Popover size="md" backdrop="blur" placement="bottom" showArrow={true}>
                                                <PopoverTrigger>
                                                    <span className="text-red-500">Переглянути</span>
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                    <div className="px-1 py-2">
                                                        <div className="text-small font-bold">Контекст</div>
                                                        <div className="text-tiny overflow-hidden break-words max-w-lg">{log.context}</div>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </TableCell>
                                        <TableCell>{log.extra}</TableCell>
                                        <TableCell>{log.created_at}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Tab>
                <Tab key="music" title={
                    <div className="flex items-center space-x-2">
                        <ComputerDesktopIcon className="w-4 h-4"/>
                        <span>ProfIT</span>
                    </div>
                }>
                    <div>

                        <Table
                            layout="fixed"
                            color="danger"
                            selectionMode="single"
                            aria-label="Example static collection table"
                        >
                            <TableHeader>
                                <TableColumn>ID</TableColumn>
                                <TableColumn>Метод</TableColumn>
                                <TableColumn>Ендпоінт</TableColumn>
                                <TableColumn>Запит</TableColumn>
                                <TableColumn>Відповідь</TableColumn>
                                <TableColumn>Заголовки</TableColumn>
                                <TableColumn>Статус</TableColumn>
                                <TableColumn>Дата створення</TableColumn>
                            </TableHeader>
                            <TableBody loadingContent={<Spinner color='danger' />}  loadingState={isLoadingProfit ? 'loading' : 'idle'}>
                                {profit_logs?.map((log:any, index: bigint) => (
                                    <TableRow key={index}>
                                        <TableCell>{log.id}</TableCell>
                                        <TableCell>{log.method}</TableCell>
                                        <TableCell><Popover size="md" backdrop="blur" placement="bottom" showArrow={true}>
                                            <PopoverTrigger>
                                                <span className="break-words">{log.url.slice(0,15)}...</span>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <div className="px-1 py-2">
                                                    <div className="text-small font-bold">Ендпоінт</div>
                                                    <div className="text-tiny overflow-hidden break-words max-w-lg">{log.url}</div>
                                                </div>
                                            </PopoverContent>
                                        </Popover></TableCell>
                                        <TableCell>
                                            <Popover size="md" backdrop="blur" placement="bottom" showArrow={true}>
                                                <PopoverTrigger>
                                                    <span className="break-words">{log.data.slice(0,15)}...</span>
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                    <div className="px-1 py-2">
                                                        <div className="text-small font-bold">Запит</div>
                                                        <div className="text-tiny overflow-hidden break-words max-w-lg">{log.data}</div>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </TableCell>
                                        <TableCell><Popover size="md" backdrop="blur" placement="bottom" showArrow={true}>
                                            <PopoverTrigger>
                                                <span className="break-words">{log.response.slice(0,15)}...</span>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <div className="px-1 py-2">
                                                    <div className="text-small font-bold">Відповідь</div>
                                                    <div className="text-tiny overflow-hidden break-words max-w-lg">{log.response}</div>
                                                </div>
                                            </PopoverContent>
                                        </Popover></TableCell>
                                        <TableCell>
                                            <Popover size="md" backdrop="blur" placement="bottom" showArrow={true}>
                                                <PopoverTrigger>
                                                    <span className="text-red-500">Переглянути</span>
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                    <div className="px-1 py-2">
                                                        <div className="text-small font-bold">Заголовки</div>
                                                        <div className="text-tiny overflow-hidden break-words max-w-lg">{log.response_headers}</div>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </TableCell>
                                        <TableCell>{log.status_code}</TableCell>
                                        <TableCell>{log.created_at}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </div>
                </Tab>
                <Tab key="videos" title={
                    <div className="flex items-center space-x-2">
                        <ChatBubbleLeftIcon className="w-4 h-4"/>
                        <span>Sms</span>
                    </div>
                }>
                    <div>

                        <Table
                            layout="fixed"
                            color="danger"
                            selectionMode="single"
                            aria-label="Example static collection table"
                        >
                            <TableHeader>
                                <TableColumn>ID</TableColumn>
                                <TableColumn>Номер телефону</TableColumn>
                                <TableColumn>Повідомлення</TableColumn>
                                <TableColumn>Статус</TableColumn>
                                <TableColumn>ID повідомлення</TableColumn>
                                <TableColumn>Дата створення</TableColumn>
                            </TableHeader>
                            <TableBody loadingContent={<Spinner color='danger' />}  loadingState={isLoadingSms ? 'loading' : 'idle'}>
                                {sms_logs?.map((log:any, index: bigint) => (
                                    <TableRow key={index}>
                                        <TableCell>{log.id}</TableCell>
                                        <TableCell>{log.phone}</TableCell>
                                        <TableCell>{log.message}</TableCell>
                                        <TableCell>{log.status}</TableCell>
                                        <TableCell>{log.message_id}</TableCell>
                                        <TableCell>{log.created_at}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default LogsPage;