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
      className={`hover:bg-brand-light hover:text-text-hover flex w-full justify-start py-5 text-xl ${pathname == href ? "bg-brand-light text-blue-dark" : ""}`}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
