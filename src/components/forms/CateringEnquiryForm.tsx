"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  cateringEnquirySchema,
  eventTypes,
  type CateringEnquiryInput,
} from "@/lib/schemas/catering";
import { Button } from "@/components/ui/Button";
import { Field, inputClass, selectClass, textareaClass } from "./Field";

type Status = "idle" | "submitting" | "success" | "error";

export function CateringEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CateringEnquiryInput>({
    resolver: zodResolver(cateringEnquirySchema),
    mode: "onBlur",
    defaultValues: {
      eventType: "Wedding",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/catering-enquiry", {
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
        <h3 className="mt-4 font-display text-xl text-ink">Enquiry sent</h3>
        <p className="mt-2 text-sm text-ink-muted">
          Thanks for reaching out. We&apos;ll be in touch within one working day to
          confirm pricing and details.
        </p>
        <Button
          variant="outline"
          size="md"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-edge bg-white p-6 md:p-8"
      aria-label="Catering enquiry"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Full name"
          htmlFor="fullName"
          required
          error={errors.fullName?.message}
        >
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            className={inputClass}
            {...register("fullName")}
          />
        </Field>

        <Field
          label="Phone"
          htmlFor="phone"
          required
          hint="South African format, eg. 082 123 4567"
          error={errors.phone?.message}
        >
          <input
            id="phone"
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
          htmlFor="email"
          hint="Optional"
          error={errors.email?.message}
        >
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={inputClass}
            {...register("email")}
          />
        </Field>

        <Field
          label="Event type"
          htmlFor="eventType"
          required
          error={errors.eventType?.message}
        >
          <select
            id="eventType"
            aria-invalid={!!errors.eventType}
            className={selectClass}
            {...register("eventType")}
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Event date"
          htmlFor="eventDate"
          required
          error={errors.eventDate?.message}
        >
          <input
            id="eventDate"
            type="date"
            aria-invalid={!!errors.eventDate}
            className={inputClass}
            {...register("eventDate")}
          />
        </Field>

        <Field
          label="Number of guests"
          htmlFor="guests"
          required
          error={errors.guests?.message}
        >
          <input
            id="guests"
            type="number"
            inputMode="numeric"
            min={1}
            max={2000}
            aria-invalid={!!errors.guests}
            className={inputClass}
            {...register("guests")}
          />
        </Field>

        <Field
          label="Additional requirements"
          htmlFor="notes"
          hint="Tell us about dietary needs, venue, delivery, or anything special."
          error={errors.notes?.message}
          className="md:col-span-2"
        >
          <textarea
            id="notes"
            rows={5}
            aria-invalid={!!errors.notes}
            className={textareaClass}
            {...register("notes")}
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
            "Send enquiry"
          )}
        </Button>
        <p className="text-xs text-ink-muted">
          We&apos;ll reply within one working day.
        </p>
      </div>
    </form>
  );
}
