import * as React from "react";

import { cn } from "@/lib/utils";

import { labelVariants, labelVariantProps } from "./label";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  labelVariantProps;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <label
        className={cn(labelVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";

export default Label;
