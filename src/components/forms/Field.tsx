import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}

export function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
  ...props
}: FieldProps) {
  const errorId = error ? `${htmlFor}-error` : undefined;
  const hintId = hint ? `${htmlFor}-hint` : undefined;
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="ml-1 text-terracotta" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={hintId} className="text-xs text-ink-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs font-medium text-terracotta" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClass =
  "h-11 w-full rounded-xl border border-edge bg-white px-3.5 text-sm text-ink placeholder:text-ink-muted/60 focus-visible:border-emerald-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand/30 aria-[invalid=true]:border-terracotta aria-[invalid=true]:ring-terracotta/30";

export const textareaClass =
  "min-h-[120px] w-full rounded-xl border border-edge bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus-visible:border-emerald-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand/30 aria-[invalid=true]:border-terracotta";

export const selectClass = inputClass + " appearance-none pr-10 bg-no-repeat";
