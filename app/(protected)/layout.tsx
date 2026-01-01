import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Navbar from "@/components/layout/NavBar";
import Sidebar from "@/components/layout/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

type Props = {
  children: ReactNode;
};

export default async function ProtectedLayout({ children }: Props) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  /**
   * 1. No access token → redirect to login
   */
//   if (!accessToken) {
//     redirect("/feed/");
//   }

//   /**
//    * 2. (Optional but recommended)
//    *    Validate token by calling backend
//    */
//   const res = await fetch(`${process.env.BACKEND_URL}/auth/me`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     cache: "no-store",
//   });

//   /**
//    * 3. Invalid / expired token → try refresh
//    */
//   if (res.status === 401) {
//     const refreshRes = await fetch(
//       `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/refresh`,
//       {
//         method: "POST",
//         headers: {
//           Cookie: cookieStore.toString(),
//         },
//         cache: "no-store",
//       }
//     );

//     if (!refreshRes.ok) {
//       redirect("/feed/");
//     }

//     // After refresh, reload page
//     redirect("/feed/");
//   }

  /**
   * 4. User is authenticated
   */
  return (
    <SidebarProvider>
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
          <SidebarTrigger />
          <Navbar />
        </header>
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
}
