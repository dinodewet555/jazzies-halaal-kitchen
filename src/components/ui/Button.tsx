import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-brand disabled:pointer-events-none disabled:opacity-60 relative overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-terracotta to-saffron text-white hover:shadow-xl hover:shadow-terracotta/30 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-white text-emerald-brand hover:bg-cream-warm hover:shadow-lg active:translate-y-0",
        outline:
          "border-2 border-white text-white hover:bg-white hover:text-emerald-brand active:translate-y-0",
        ghost: "text-white hover:bg-white/10 active:bg-white/20",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe5a] hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5 active:translate-y-0",
        dark:
          "bg-emerald-brand text-white hover:bg-emerald-brand-light hover:shadow-lg active:translate-y-0",
        cream:
          "bg-cream text-emerald-brand hover:bg-cream-warm hover:shadow-lg active:translate-y-0",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-5 text-sm",
        lg: "h-14 px-6 text-base",
        xl: "h-16 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonStyles>;

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    href?: undefined;
    external?: never;
  };

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonVariants & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    if ("href" in props && props.href) {
      const { href, external, variant, size, className, ...rest } = props;
      const classes = cn(buttonStyles({ variant, size }), className);

      if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            rel={external ? "noopener noreferrer" : undefined}
            {...rest}
          />
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}
        />
      );
    }

    const { variant, size, className, type, ...rest } =
      props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type ?? "button"}
        className={cn(buttonStyles({ variant, size }), className)}
        {...rest}
      />
    );
  }
);
