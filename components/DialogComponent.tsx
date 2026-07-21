"use client";

import ButtonAction from "./ButtonAction";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

interface DialogComponentProps {
  dialogHeader?: string;
  dialogDescription?: string;

  children:
    React.ReactNode | ((props: { closeModal: () => void }) => React.ReactNode);
}

export default function DialogComponent({
  dialogHeader,
  dialogDescription,
  children,
}: DialogComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <ButtonAction>
          <Plus />
          {dialogHeader}
        </ButtonAction>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader className="text-2xl font-bold">
          {dialogHeader}
        </DialogHeader>
        <DialogDescription className="text-text-muted">
          {dialogDescription}
        </DialogDescription>

        {typeof children === "function" ? children({ closeModal }) : children}
      </DialogContent>
    </Dialog>
  );
}
