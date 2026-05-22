import {
    Sidebar,
    SidebarContent,
} from "@/components/ui/sidebar";
import { AppSidebarHeader } from "@/src/app/components/sidebar/components/AppSidebarHeader";
import { AppSidebarNav } from "@/src/app/components/sidebar/components/AppSidebarNav";
import { AppSidebarUpgrade } from "@/src/app/components/sidebar/components/AppSidebarUpgrade";
import { AppSidebarFooter } from "@/src/app/components/sidebar/components/AppSidebarFooter";

export const AppSidebar = () => (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
        <AppSidebarHeader />

        <SidebarContent>
            <AppSidebarNav />
        </SidebarContent>

        <AppSidebarUpgrade />
        <AppSidebarFooter />
    </Sidebar>
);