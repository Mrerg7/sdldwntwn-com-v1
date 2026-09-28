import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-12 px-5 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--ink)] text-white hover:bg-[var(--ink-soft)] dark:bg-[var(--accent)] dark:text-[var(--ink)] dark:hover:brightness-110",
        secondary:
          "bg-white/10 text-white border border-white/25 hover:bg-white/15 backdrop-blur-sm",
        outline:
          "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)]",
        accent:
          "bg-[var(--accent)] text-[var(--ink)] hover:brightness-110 shadow-lg shadow-[var(--accent)]/20",
        ghost: "hover:bg-[var(--muted)] text-[var(--foreground)]",
      },
      size: {
        default: "h-12 px-6",
        lg: "h-14 px-8 text-base",
        sm: "h-10 min-h-10 px-4 text-sm",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
