import * as React from "react";

import { cn } from "@/lib/utils";

import { textVariants, textVariantsProps } from "./text";

type TextTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TextElementsAttributes =
  | React.HTMLAttributes<HTMLHeadingElement>
  | React.HTMLAttributes<HTMLParagraphElement>
  | React.HTMLAttributes<HTMLSpanElement>;

type TextProps = TextElementsAttributes &
  textVariantsProps & {
    as?: TextTags;
  };

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, font, weight, as: Tag = "p", ...props }, ref) => {
    switch (Tag) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        return (
          <Tag
            className={cn(textVariants({ variant, font, weight }), className)}
            ref={ref as React.RefObject<HTMLHeadingElement>}
            {...props}
          />
        );
      case "p":
        return (
          <Tag
            className={cn(textVariants({ variant, font, weight }), className)}
            ref={ref as React.RefObject<HTMLParagraphElement>}
            {...props}
          />
        );
      case "span":
        return (
          <Tag
            className={cn(textVariants({ variant, font, weight }), className)}
            ref={ref as React.RefObject<HTMLSpanElement>}
            {...props}
          />
        );
      default:
        return null;
    }
  }
);

Text.displayName = "Text";

export default Text;
