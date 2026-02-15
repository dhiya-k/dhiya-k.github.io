import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-panel-muted px-3 py-1 text-xs font-medium text-muted-strong",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
