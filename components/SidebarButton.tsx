"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function SidebarButton({ children, href }: SidebarButtonProps) {
  const pathname = usePathname();
  return (
    <Button
      asChild
      variant="ghost"
      className={`hover:bg-brand-light hover:text-text-hover flex w-full justify-start py-5 text-base ${pathname == href ? "bg-blue-dark text-white" : ""}`}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
