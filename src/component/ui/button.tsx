import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from '../../libs/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "hover:opacity-70 text-gray-500",
        pink: "bg-main-pink text-white hover:opacity-70",
        "pink-flat": "bg-main-pink-lightest text-main-pink hover:opacity-70",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        "outline-primary": "border border-primary bg-background hover:bg-accent text-primary hover:bg-primary-lightest",
        "outline-success": "border border-success bg-background text-success hover:bg-success-lightest",
        "outline-destructive": "border border-destructive bg-background text-destructive hover:bg-destructive-lightest",

        flat: "bg-accent text-accent-foreground",
        "flat-primary": "text-primary bg-primary-lightest",
        "flat-destructive": "bg-destructive-lightest text-destructive-lightest-foreground",
        "flat-success": "bg-success-lightest text-success-lightest-foreground",
        "flat-warning": "bg-warning-lightest text-warning-lightest-foreground",

        outlineGray: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        outlineGreen:
          "border border-input border-emerald-500 bg-background text-emerald-500 hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        "ghost-primary": "text-primary hover:text-primary hover:bg-primary-lightest",
        "ghost-destructive":
          "hover:bg-destructive-lightest hover:text-destructive-lightest-foreground text-destructive-lightest-foreground",
        "ghost-pink": "text-main-pink hover:text-main-pink hover:bg-main-pink-lightest",
        link: "text-primary underline-offset-4 hover:underline h-fit p-0",
        blue: "bg-primary text-white hover:opacity-70",
        disabled: "bg-[#E3E8F5] text-[#A7B8C9]",
        textBlue: "hover:opacity-70 text-primary",
        primary: "bg-primary text-white",
        outlineRed:
          "border border-input border-red-500 bg-background text-red-500 hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-9 px-1",
        sm: "h-9 px-3",
        md: "h-10 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, isLoading, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={isLoading || disabled}
      >
        {isLoading ? (
          <span className="animate-spin">
            <Loader2 size={20} />
          </span>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
