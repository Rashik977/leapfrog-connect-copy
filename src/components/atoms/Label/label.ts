import { cva, type VariantProps } from "class-variance-authority";

export const labelVariants = cva(
  "text-white leading-150 inline-flex items-center justify-center cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        underline: "border-b border-green-100",
        colored: "text-green-100",
      },
      size: {
        default: "font-regular",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type labelVariantProps = VariantProps<typeof labelVariants>;
