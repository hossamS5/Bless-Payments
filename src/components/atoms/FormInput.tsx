import type {
  UseFormRegister,
  FieldErrors,
  Path,
  FieldValues,
} from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: "text" | "email" | "password" | "tel" | "number";
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required?: boolean;
  pattern?: {
    value: RegExp;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  className?: string;
}

export const FormInput = <T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  errors,
  required = false,
  pattern,
  minLength,
  maxLength,
  className = "",
}: FormInputProps<T>) => {
  return (
    <div className="form-control flex flex-col gap-1">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        className={`input input-bordered w-full ${className}`}
        {...register(name, {
          required: required ? `${label} is required` : false,
          pattern,
          minLength,
          maxLength,
        })}
      />
      {errors[name] && (
        <span className="text-error text-sm mt-1">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};
