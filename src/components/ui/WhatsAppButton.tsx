import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { buildWhatsAppLink } from "@/lib/utils/format";
import { Button, type ButtonVariants } from "./Button";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  className?: string;
  iconOnly?: boolean;
  ariaLabel?: string;
}

export function WhatsAppButton({
  message = siteConfig.ctaMessages.generalOrder,
  label = "WhatsApp us",
  variant = "whatsapp",
  size = "md",
  className,
  iconOnly = false,
  ariaLabel,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(siteConfig.contact.whatsappDigits, message);

  return (
    <Button
      href={href}
      external
      variant={variant}
      size={size}
      className={className}
      aria-label={ariaLabel ?? (iconOnly ? "WhatsApp us" : undefined)}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {!iconOnly && <span>{label}</span>}
    </Button>
  );
}
