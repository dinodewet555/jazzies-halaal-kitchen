"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormInput,
} from "@/lib/schemas/contact";
import { Button } from "@/components/ui/Button";
import { Field, inputClass, textareaClass } from "./Field";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  });

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-brand/20 bg-emerald-brand/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-brand" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl text-ink">Message sent</h3>
        <p className="mt-2 text-sm text-ink-muted">
          Thanks. We&apos;ll get back to you within one working day.
        </p>
        <Button
          variant="outline"
          size="md"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-edge bg-white p-6 md:p-8"
      aria-label="Contact form"
    >
      <div className="grid gap-5">
        <Field
          label="Name"
          htmlFor="name"
          required
          error={errors.name?.message}
        >
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={inputClass}
            {...register("name")}
          />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Phone"
            htmlFor="contact-phone"
            required
            hint="South African format"
            error={errors.phone?.message}
          >
            <input
              id="contact-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="082 123 4567"
              aria-invalid={!!errors.phone}
              className={inputClass}
              {...register("phone")}
            />
          </Field>

          <Field
            label="Email"
            htmlFor="contact-email"
            hint="Optional"
            error={errors.email?.message}
          >
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              className={inputClass}
              {...register("email")}
            />
          </Field>
        </div>

        <Field
          label="Message"
          htmlFor="message"
          required
          error={errors.message?.message}
        >
          <textarea
            id="message"
            rows={6}
            aria-invalid={!!errors.message}
            className={textareaClass}
            {...register("message")}
          />
        </Field>
      </div>

      {status === "error" && errorMessage && (
        <p className="mt-4 rounded-lg bg-terracotta/10 p-3 text-sm text-terracotta" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            "Send message"
          )}
        </Button>
        <p className="text-xs text-ink-muted">
          We reply within one working day.
        </p>
      </div>
    </form>
  );
}
