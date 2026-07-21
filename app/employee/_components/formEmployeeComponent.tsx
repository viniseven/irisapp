"use client";

import z, { boolean } from "zod";
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

import { Loader2Icon } from "lucide-react";

import InfoCard from "@/components/InfoCard";

import { createEmployee } from "@/app/_actions/employee/createEmployee";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { getAllSector } from "@/app/_dataAccess/sector/getSector";
import CheckboxComponent from "@/components/CheckboxComponent";

interface SelectSectorOptionProps {
  id: string;
  name: string;
}

interface FormEmployeeComponentProps {
  onSuccess?: () => void;
}

export const formSchema = z.object({
  name: z.string().trim().min(1, "O nome é obrigatório").toLowerCase(),
  badgeId: z.number().min(1, "O número de matrícula é obrigatório").max(999999),
  sector: z.string(),
  jobTitle: z.string().min(1, "O cargo é obrigatório").toLowerCase(),
  isActive: z.boolean(),
});

export type FormSchema = z.infer<typeof formSchema>;

export default function FormEmployeeComponent({
  onSuccess,
}: FormEmployeeComponentProps) {
  const [sectors, setSectors] = useState<SelectSectorOptionProps[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      jobTitle: "",
      sector: "",
      badgeId: 0,
      isActive: isChecked,
    },
  });

  useEffect(() => {
    getAllSector().then((data) => setSectors(data));
  }, []);

  const onSubmit = async (data: FormSchema) => {
    const result = await createEmployee(data);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);
    onSuccess?.();
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
                Nome do Colaborador
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                placeholder="Ex: João Carlos"
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
          name="jobTitle"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-title">Função</FieldLabel>
              <Input
                {...field}
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                placeholder="Ex: Assistente Administrativo"
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
          name="sector"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-title">Setor</FieldLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="Selecione o Setor" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    {sectors.map((sector) => (
                      <SelectItem
                        key={sector.id}
                        value={sector.id}
                        className="cursor-pointer"
                      >
                        {sector.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          )}
        />
        <div className="flex gap-4">
          <Controller
            name="badgeId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">
                  Nº do Crachá
                </FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Ex: 600246"
                  autoComplete="off"
                  className="bg-blue-light h-10 rounded-lg"
                  type="text"
                  maxLength={6}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/\D/g, "");
                    field.onChange(
                      onlyNumbers ? Number(onlyNumbers) : undefined,
                    );
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
            name="isActive"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">Status</FieldLabel>
                <div className="mt-3">
                  <CheckboxComponent
                    text="Inativo"
                    checked={isChecked}
                    onCheckedChange={setIsChecked}
                  />
                  {fieldState.invalid && (
                    <FieldError
                      className="text-text-alert"
                      errors={[fieldState.error]}
                    />
                  )}
                </div>
              </Field>
            )}
          />
        </div>
      </FieldGroup>
      <InfoCard info="Ao cadastrar um novo colaborador, ele ficará disponível imediatamente para ser vinculado a setores e treinamentos" />
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
