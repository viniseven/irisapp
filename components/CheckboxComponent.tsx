import { Checkbox } from "./ui/checkbox";
import { FieldLabel } from "./ui/field";

interface CheckboxComponentProps {
  text?: string;
  checked?: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function CheckboxComponent({
  text,
  onCheckedChange,
  checked = false,
}: CheckboxComponentProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="terms-checkbox-basic"
        name="terms-checkbox-basic"
        className="cursor-pointer"
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <FieldLabel htmlFor="terms-checkbox-basic">{text}</FieldLabel>
    </div>
  );
}
