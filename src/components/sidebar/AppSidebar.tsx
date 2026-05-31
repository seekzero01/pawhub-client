import {
    Sidebar,
    SidebarContent,
} from "@/components/ui/sidebar";
import { AppSidebarHeader } from "@/components/sidebar/components/AppSidebarHeader";
import { AppSidebarNav } from "@/components/sidebar/components/AppSidebarNav";
import { AppSidebarUpgrade } from "@/components/sidebar/components/AppSidebarUpgrade";
import { AppSidebarFooter } from "@/components/sidebar/components/AppSidebarFooter";

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