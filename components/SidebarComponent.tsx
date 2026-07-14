import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Building2, LayoutDashboard, Users } from "lucide-react";

import SidebarButton from "./SidebarButton";

export default function SidebarComponent() {
  return (
    <Sidebar className="bg-sidebar-bg border border-none">
      <SidebarHeader className="text-text-main p-8 font-bold">
        <h1 className="text-3xl">Iris</h1>
        <p className="text-text-muted font-medium">Gestão de Treinamentos</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <p className="font-semibold">MENU</p>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarButton href="/dashboard">
                <LayoutDashboard className="size-5" />
                Dashboard
              </SidebarButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarButton href="/sector">
                <Building2 className="size-5" />
                Setores
              </SidebarButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarButton href="/employee">
                <Users className="size-5" />
                Colaboradores
              </SidebarButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
