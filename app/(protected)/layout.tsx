import { ReactNode } from "react";
import Navbar from "@/components/layout/NavBar";
import Sidebar from "@/components/layout/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ProtectedRoute } from "@/components/auth/AuthGuard";

type Props = {
  children: ReactNode;
};

export default function ProtectedLayout({ children }: Props) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <Sidebar/>
        <div className="flex flex-1 flex-col overflow-hidden relative">
          <header className="flex h-12 justify-between items-center gap-4 border-b bg-background/80 backdrop-blur-md px-6 lg:h-[60px] sticky top-0 z-30">
            <SidebarTrigger />
            <Navbar />
          </header>
          <main className="flex-1 overflow-auto p-4">{children}</main>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
