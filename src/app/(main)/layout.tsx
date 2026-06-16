import {ReactNode} from "react";
import {AppSidebar} from "@/components/sidebar/AppSidebar";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {ActionBar} from "@/app/(main)/dashboard/_components/header/ActionBar";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2">
                  <div className="flex items-center justify-between gap-2 px-4">
                      <SidebarTrigger className="-ml-1 text-deep-plum hover:text-graphite-text" />
                      <ActionBar />
                  </div>
              </header>
              <main className="flex pt-0 min-w-0">
                  <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min">
                      {children}
                  </div>
              </main>
          </SidebarInset>
      </SidebarProvider>
  );
}
