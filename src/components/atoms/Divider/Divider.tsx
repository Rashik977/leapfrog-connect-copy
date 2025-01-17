import * as React from "react";

import { cn } from "@/lib/utils";

import { DividerVariantProps, DividerVariants } from "./divider";

type DividerProps = React.HTMLAttributes<HTMLDivElement> & DividerVariantProps;

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(DividerVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export default Divider;
