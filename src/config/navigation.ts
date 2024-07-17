import {
    BuildingOfficeIcon,
    DocumentDuplicateIcon, FolderIcon,
    HomeIcon,
    PaperClipIcon, TableCellsIcon,
    UsersIcon
} from "@heroicons/react/24/outline";

const home = {
    title: 'Головна',
    href: '/panel/dashboard',
    icon: HomeIcon
}

const sections = [
    {
        title: 'Адміністрування',

        links: [
            {
                title: 'Користувачі',
                href: '/panel/users',
                icon: UsersIcon
            },
            {
                title: 'Договори',
                href: '/panel/agreements',
                icon: DocumentDuplicateIcon
            },
            {
                title: 'Звернення',
                href: '/panel/requests',
                icon: PaperClipIcon
            },
            {
                title: 'ЛПУ',
                href: '/panel/lpu',
                icon: BuildingOfficeIcon
            },
            {
                title: 'Файли',
                href: '/panel/files',
                icon: FolderIcon
            },
            {
                title: 'Логи',
                href: '/panel/logs',
                icon: TableCellsIcon
            }
        ]
    }
]

export const navigation = {
    home: home,
    sections: sections
}