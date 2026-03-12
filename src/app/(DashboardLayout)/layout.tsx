import { AppSidebar } from "@/components/app-sidebar";
import { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getUser } from "@/services/authentication";
import { User } from "@/types";

export default async function Page({
  customer,
  admin,
  provider,
}: {
  customer: ReactNode;
  admin: ReactNode;
  provider: ReactNode;
}) {
  const user: User | null = await getUser();
  const userRole = user?.role;
  return (
    <SidebarProvider>
      <AppSidebar user={user} />

      {/* {userRole === "ADMIN" && admin}
      {userRole === "CUSTOMER" && customer}
      {userRole === "PROVIDER" && provider} */}
      <main className="flex flex-1 flex-col">
        {/* HEADER */}
        <header className="flex h-14 items-center border-b px-4">
          <SidebarTrigger />
          <h1 className="ml-2 font-semibold">Dashboard</h1>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 p-4">
          {userRole === "ADMIN" && admin}
          {userRole === "CUSTOMER" && customer}
          {userRole === "PROVIDER" && provider}
        </div>
      </main>
    </SidebarProvider>
  );
}
