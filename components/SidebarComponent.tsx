import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton
} from "@/components/ui/sidebar";
import { ChartNoAxesCombined, Building2, User } from "lucide-react";

import SidebarButton from "./SidebarButton";

export default function SidebarComponent() {
  return (
    <Sidebar className="bg-sidebar-bg border border-none">
      <SidebarHeader className="text-text-main font-bold text-xl p-8">
        <p>Gestão de Treinamentos</p>
      </SidebarHeader>
      <SidebarContent className="text-text-muted">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarButton href="/dashboard">
                <ChartNoAxesCombined className="size-6" />
                Dashboard
              </SidebarButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarButton href="/sector">
                <Building2 className="size-6" />
                Setores
              </SidebarButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarButton href="/employee">
                <User className="size-6" />
                Colaboradores
              </SidebarButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
