import { cva, type VariantProps } from "class-variance-authority";

export const DividerVariants = cva("border-t border-t-gray w-full", {
  variants: {
    variant: {
      default: "",
      hidden: "md:hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type DividerVariantProps = VariantProps<typeof DividerVariants>;
