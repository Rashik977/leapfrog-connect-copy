import { ElementType } from "react";

import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  Tag?: ElementType;
}) => {
  const baseStyles = "mx-auto px-8 md:px-12 xl:px-0";
  return <Tag className={cn(baseStyles, className)}>{children}</Tag>;
};

export default Container;
