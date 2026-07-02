"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import ButtonAction from "@/components/ButtonAction";
import { createSector } from "@/app/_actions/sector/createSector";
import { Loader2Icon } from "lucide-react";
import { getFindSector } from "@/app/_dataAccess/sector/getSector";
import InfoCard from "@/components/InfoCard";
import { toast } from "sonner";

interface ChangeDialogOpenProps {
  changeStatusModal: () => void;
}

const formSchema = z.object({
  name: z.string().trim().min(1, "O nome do setor é obrigatório"),
});

export type FormSchema = z.infer<typeof formSchema>;

export default function FormSectorComponent({
  changeStatusModal,
}: ChangeDialogOpenProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function handleDialogOpenchange() {
    changeStatusModal(false);
  }

  const onSubmit = async (data: FormSchema) => {
    try {
      const findSector = await getFindSector(data.name);

      if (findSector) {
        toast.error("Já existe um setor com este nome");
        return;
      }
      await createSector(data);
      handleDialogOpenchange();
    } catch (error) {
      console.error("Erro ao criar setor:", error);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      id="formSector"
      className="flex flex-col gap-4"
    >
      <FieldGroup>
        <Controller
          name="name"
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
                  const cleanValue = inputValue.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");

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
  );
}
