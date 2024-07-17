import {PanelLayoutComponent} from "@/components/layouts/panel";

export default function PanelLayout({
                                        children, // will be a page or nested layout
                                    }: {
    children: React.ReactNode
}) {
    return (
        <PanelLayoutComponent>
            {children}
        </PanelLayoutComponent>
    )
}