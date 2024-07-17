import {usePathname} from "next/navigation";
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/breadcrumbs";
import {navigation} from "@/config/navigation";

const findSection = (href: string) => {
    for (const section of navigation.sections) {
        for (const link of section.links) {
            if (link.href === href) {
                return section.title;
            }
        }
    }
    return null;
};

const findTitle = (href: string) => {
    for (const section of navigation.sections) {
        for (const link of section.links) {
            if (link.href === href) {
                return link.title;
            }
        }
    }
    return null;
};

export const BreadcrumbsBlock = () => {
    const pathname = usePathname();

    const sectionTitle = findSection(pathname);
    const pageTitle = findTitle(pathname);

    return (
        <Breadcrumbs>
            <BreadcrumbItem href={navigation.home.href}>{navigation.home.title}</BreadcrumbItem>
            {sectionTitle && <BreadcrumbItem>{sectionTitle}</BreadcrumbItem>}
            {pageTitle && <BreadcrumbItem>{pageTitle}</BreadcrumbItem>}
        </Breadcrumbs>
    );
}