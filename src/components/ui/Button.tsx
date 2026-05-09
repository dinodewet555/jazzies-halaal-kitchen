import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-brand text-cream hover:bg-emerald-brand-dark active:bg-emerald-brand-dark",
        secondary:
          "bg-terracotta text-cream hover:bg-terracotta-soft active:bg-terracotta-soft",
        outline:
          "border border-emerald-brand text-emerald-brand hover:bg-emerald-brand hover:text-cream",
        ghost: "text-emerald-brand hover:bg-emerald-brand/10",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe5a] active:bg-[#1ebe5a]",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
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
