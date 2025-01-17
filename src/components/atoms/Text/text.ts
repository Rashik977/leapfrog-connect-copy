import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      none: "",
      small: "text-sm leading-100",
      default: "text-regular leading-150",
      base: "text-base leading-200",
      "2xl": "text-2xl leading-350",
      "3xl": "text-3xl leading-400",
    },
    font: {
      default: "",
      serif: "font-serif",
    },
    weight: {
      default: "",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
    font: "default",
    weight: "default",
  },
});

export type textVariantsProps = VariantProps<typeof textVariants>;
