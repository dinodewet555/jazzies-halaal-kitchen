import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { buildTelLink } from "@/lib/utils/format";
import { Button, type ButtonVariants } from "./Button";

interface CallButtonProps {
  label?: string;
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  className?: string;
  iconOnly?: boolean;
  ariaLabel?: string;
}

export function CallButton({
  label = "Call us",
  variant = "outline",
  size = "md",
  className,
  iconOnly = false,
  ariaLabel,
}: CallButtonProps) {
  const href = buildTelLink(siteConfig.contact.phoneDigits);

  return (
    <Button
      href={href}
      external
      variant={variant}
      size={size}
      className={className}
      aria-label={ariaLabel ?? (iconOnly ? `Call ${siteConfig.name}` : undefined)}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      {!iconOnly && <span>{label}</span>}
    </Button>
  );
}
