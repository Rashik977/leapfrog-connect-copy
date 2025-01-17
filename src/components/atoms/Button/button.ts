import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "font-semibold text-base font-bold leading-200 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: [
          "text-green-400 z-0 before:z-[-1] after:z-[-1]",
          "before:absolute before:inset-0 before:bg-[linear-gradient(165deg,_#F2E221_-1.22%,_#F2E221_30.92%,_#9BEF6B_67.65%,_#61F19B_100.81%)]",
          "after:absolute after:inset-0 after:bg-[#9BEF6B] after:opacity-0 hover:after:opacity-100",
          "after:transition-opacity after:duration-400 transition-transform transform-gpu hover:-translate-y-[2px] hover:shadow-lg",
          "active:animate-bounce",
        ],
        dark: "bg-dark-green text-white",
      },
      size: {
        default: "px-7 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
