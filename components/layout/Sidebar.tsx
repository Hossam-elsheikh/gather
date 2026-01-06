"use client";

import {
  ChevronRight,
  Home,
  LogOut,
  PlusCircle,
  Search,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/feed",
    icon: Home,
  },
  {
    title: "Popular",
    url: "/popular",
    icon: TrendingUp,
  },
  {
    title: "Explore",
    url: "/communities",
    icon: Search,
  },
  {
    title: "Start A Community",
    url: "/communities/create",
    icon: PlusCircle,
  },
 
];

const communities = [
  {
    name: "Designers",
    url: "/communities/designers",
    icon: Users,
  },
  {
    name: "Developers",
    url: "/communities/developers",
    icon: Users,
  },
  {
    name: "Gamers",
    url: "/communities/gamers",
    icon: Users,
  },
];

const MainSidebar = () => {
  const { state } = useSidebar();
  const { user, logout } = useAuth();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-white flex items-center pt-6">
        {state === "collapsed" ? (
          <Image src="/shape.svg" width={32} height={32} alt="Gather" />
        ) : (
          <Image src="/logo.svg" width={120} height={200} alt="Gather" />
        )}
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className={`${state === 'collapsed' ? '': 'px-3'}`}>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={pathname === item.url}
                  >
                    <Link href={item.url} className="font-semibold">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
<hr />
        <SidebarGroup>
          <SidebarMenu className={`${state === 'collapsed' ? '': 'px-3'}`}>
            <Collapsible defaultOpen asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip="Your Communities"
                    className="font-semibold"
                  >
                    <Users />
                    <span>Communities</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {communities.map((community) => (
                      <SidebarMenuSubItem key={community.name}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === community.url}
                        >
                          <Link href={community.url}>
                            <span>{community.name}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <SidebarMenu className="px-3">
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => logout()}
              className="text-destructive hover:text-destructive cursor-pointer font-semibold"
              tooltip="Logout"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default MainSidebar;
