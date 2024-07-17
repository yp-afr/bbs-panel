"use client"

import {Dialog, Menu, Transition} from "@headlessui/react";
import {Fragment, useEffect, useState} from "react";
import {
    BellIcon, BuildingOfficeIcon,
    CalendarIcon, ChartBarIcon, DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon, InboxIcon,
    MagnifyingGlassIcon, PaperClipIcon, TableCellsIcon,
    UsersIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import {signOut, useSession} from "next-auth/react";
import UserButton from "@/components/layouts/user-button";
import {usePathname} from "next/navigation";
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/breadcrumbs";
import {navigation} from "@/config/navigation";
import {BreadcrumbsBlock} from "@/components/layouts/breadcrumbs";


const userNavigation = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Вихід', href: '#', onClick: () => signOut()},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const PanelLayoutComponent = ({children}: {children: React.ReactNode}) => {
    const session = useSession()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const pathname = usePathname();

    const currentRoute = navigation.sections.flatMap(section => section.links).find(link => link.href == pathname)

    // breadcrubs with section and link




    return <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >

                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button
                                    type="button"
                                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <span className="sr-only">Close sidebar</span>
                                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                </button>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 flex items-center px-4">
                            <img
                                className="h-8 w-auto"
                                src="https://i0.wp.com/bbs.ua/wp-content/uploads/2023/11/white-bbs-insurance.png?fit=640%2C234&ssl=1"
                                alt="Workflow"
                            />
                        </div>
                        <div className="mt-5 flex-1 h-0 overflow-y-auto">
                            <nav className="px-2 space-y-1">
                                {navigation.sections.map((section) => (
                                    <div key={section.title}>
                                        <p className="text-gray-600 text-sm font-semibold px-2">{section.title}</p>
                                        {section.links.map((item) => (
                                            <a
                                                key={item.title}
                                                href={item.href}
                                                className={classNames(
                                                    item.href == pathname ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.href == pathname ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-3 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.title}
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
            </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <img
                        className="h-8 w-auto"
                        src="https://i0.wp.com/bbs.ua/wp-content/uploads/2023/11/white-bbs-insurance.png?fit=640%2C234&ssl=1"
                        alt="Workflow"
                    />
                </div>
                <div className="mt-5 flex-grow flex flex-col">
                    <nav className="flex-1 px-2 pb-4 space-y-1">

                            <a
                                key={navigation.home.title}
                                href={navigation.home.href}
                                className={classNames(
                                    navigation.home.href == pathname ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}
                            >
                                <navigation.home.icon
                                    className={classNames(
                                        navigation.home.href == pathname ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                        'mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden="true"
                                />
                                {navigation.home.title}
                            </a>


                        {navigation.sections.map((section) => (
                            <div key={section.title}>
                                <p className="text-gray-500 text-sm  px-2 py-3">{section.title}</p>
                                {section.links.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        className={classNames(
                                            item.href == pathname ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.href == pathname ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        ))}


                    </nav>
                </div>
            </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
            <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                <button
                    type="button"
                    className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 md:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <FolderIcon className="h-6 w-6" aria-hidden="true"/>
                </button>
                <div className="flex-1 px-4 flex justify-between">
                    <div className="flex-1 flex items-center">
                        <BreadcrumbsBlock />
                    </div>
                    <div className="ml-4 flex items-center md:ml-6">
                        <button
                            type="button"
                            className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative">
                            <div>
                                <Menu.Button
                                    className="max-w-xs bg-white flex items-center text-sm rounded-full select-none outline-none">

                                    <UserButton name={session.data?.user?.name} phone={session.data?.user?.phone} />
                                    {/*<img*/}
                                    {/*    className="h-8 w-8 rounded-full"*/}
                                    {/*    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                                    {/*    alt=""*/}
                                    {/*/>*/}
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {userNavigation.map((item) => (
                                        <Menu.Item key={item.name}>
                                            {({active}) => (
                                                <a
                                                    onClick={item.onClick}
                                                    href={item.href}
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700'
                                                    )}
                                                >
                                                    {item.name}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>

                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>

            <main className="flex-1">
                <div className="py-6">
                    <div className="mx-auto px-4 sm:px-6 md:px-8">

                        {/* Replace with your content */}
                        <div className="py-4">


                            {children}
                        </div>
                        {/* /End replace */}
                    </div>
                </div>
            </main>
        </div>
    </div>
}