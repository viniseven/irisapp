"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  UpsertSectorSchema,
  upsertSectorFormSchema,
} from "@/app/schemas/sectorSchema";
import { Input } from "@/components/ui/input";
import ButtonAction from "@/components/ButtonAction";

import { Loader2Icon } from "lucide-react";

import InfoCard from "@/components/InfoCard";

import { useEffect, useState } from "react";
import { getAllEmployee } from "@/app/_dataAccess/employee/getEmployee";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { upsertSector } from "@/app/_actions/sector/upsertSector";
import { toast } from "sonner";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SelectManagerOptionProps {
  id: string;
  name: string;
}

interface UpsertDialogSectorComponentProps {
  defaultValues?: UpsertSectorSchema;
  onSuccess?: () => void;
}

export default function UpsertDialogSectorComponent({
  defaultValues,
  onSuccess,
}: UpsertDialogSectorComponentProps) {
  const [employees, setEmployees] = useState<SelectManagerOptionProps[]>([]);

  const form = useForm<UpsertSectorSchema>({
    resolver: zodResolver(upsertSectorFormSchema),
    defaultValues: defaultValues ?? {
      id: "",
      sector: "",
      managerId: "",
    },
  });

  const isEditing = !!defaultValues;

  useEffect(() => {
    getAllEmployee().then((data) => setEmployees(data));
  }, []);

  const onSubmit = async (data: UpsertSectorSchema) => {
    const result = await upsertSector({ ...data, id: defaultValues?.id ?? "" });

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);
    onSuccess?.();
  };
  return (
    <DialogContent className="bg-white">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        id="formSector"
        className="flex flex-col gap-4"
      >
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar Setor" : "Novo Setor"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Preencha as informações para editar setor"
              : "Preencha as informações para criar um novo setor"}
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Controller
            name="sector"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">
                  Nome do Setor
                </FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Ex: Diretoria Geral"
                  autoComplete="off"
                  className="bg-blue-light h-10 rounded-lg"
                  type="text"

                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const cleanValue = inputValue.replace(
                      /[^a-zA-ZÀ-ÿ\s]/g,
                      "",
                    );

                    field.onChange(cleanValue);
                  }}
                />

                {fieldState.invalid && (
                  <FieldError
                    className="text-text-alert"
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />

          <Controller
            name="managerId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">
                  Responsável pelo Setor
                </FieldLabel>

                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? undefined}
                >
                  <SelectTrigger className="w-45">
                    <SelectValue placeholder="Selecione o Gestor" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      {employees.map((employee) => (
                        <SelectItem
                          key={employee.id}
                          value={employee.id}
                          className="cursor-pointer"
                        >
                          {employee.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            )}
          />
        </FieldGroup>
        <InfoCard info="Ao criar um novo setor, ele ficará disponível imediatamente para atribuição de colaboradores e trilhas de treinamento" />
        <Field orientation="horizontal" className="justify-end gap-4">
          <ButtonAction
            type="reset"
            onClick={() => form.reset()}
            className="text-text-muted"
            variant="outline"
          >
            Limpar
          </ButtonAction>
          <ButtonAction
            type="submit"
            form="formSector"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <Loader2Icon className="animate-spin" />
            )}
            Salvar
          </ButtonAction>
        </Field>
      </form>
    </DialogContent>
  );
}
