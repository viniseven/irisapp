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
import { useEffect, useState } from "react";
import { getAllEmployee } from "@/app/_dataAccess/employee/getEmployee";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

interface ChangeDialogOpenProps {
  changeStatusModal: () => void;
}

interface ComboboxManagerOptionProps {
  id: string;
  name: string;
}

export const formSchema = z.object({
  sector: z
    .string()
    .trim()
    .min(1, "O nome do setor é obrigatório")
    .toLowerCase(),

  manager: z.string().trim().toLowerCase(),
});

export type FormSchema = z.infer<typeof formSchema>;

export default function FormSectorComponent({
  changeStatusModal,
}: ChangeDialogOpenProps) {
  const [employees, setEmployees] = useState<ComboboxManagerOptionProps[]>([]);
  const [valueManager, setValueManager] = useState("");

  console.log(valueManager);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sector: "",
      manager: "",
    },
  });

  useEffect(() => {
    getAllEmployee().then((data) => setEmployees(data));
  }, []);

  function handleDialogOpenchange() {
    changeStatusModal();
  }

  const onSubmit = async (data: FormSchema) => {
    try {
      const { sector } = data;

      const resultFindSector = await getFindSector(sector);

      if (resultFindSector) {
        toast.error("Já existe um setor com este nome");
        return;
      }
      await createSector(data);
      handleDialogOpenchange();
      toast.success("Setor cadastrado com sucesso");
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

        <Controller
          name="manager"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-title">
                Responsável pelo Setor
              </FieldLabel>

              <Combobox
                items={employees}
                value={field.value}
                onValueChange={(selectedId) => {
                  field.onChange(selectedId);

                  const selectedEmployee = employees.find(
                    (emp) => emp.id === selectedId,
                  );
                  if (selectedEmployee) {
                    setValueManager(selectedEmployee.name);
                  }
                }}
              >
                <ComboboxInput
                  placeholder="Selecione o gestor "
                  className="h-10 rounded-lg"
                  value={valueManager}
                  onChange={(e) => setValueManager(e.target.value)}
                />
                <ComboboxContent className="bg-white!">
                  <ComboboxEmpty>Nenhum registro encontrado</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      <ComboboxItem key={item.id} value={item.id}>
                        {item.name}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
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
