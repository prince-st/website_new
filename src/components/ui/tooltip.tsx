import * as React from "react";
import { cn } from "@/lib/utils";

// Lightweight, non-interactive tooltip stubs to avoid external deps during development.
// They preserve the same API surface used in the app.

type ProviderProps = React.PropsWithChildren<{ delayDuration?: number }>;
const TooltipProvider: React.FC<ProviderProps> = ({ children }) => <>{children}</>;

type RootProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;
const Tooltip: React.FC<RootProps> = ({ children }) => <>{children}</>;

type TriggerProps = React.PropsWithChildren<{
  asChild?: boolean;
} & React.HTMLAttributes<HTMLDivElement>>;
const TooltipTrigger = React.forwardRef<HTMLDivElement, TriggerProps>(({ asChild, children, ...props }, ref) => {
  if (asChild) return <>{children}</>;
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});
TooltipTrigger.displayName = "TooltipTrigger";

type ContentProps = React.PropsWithChildren<{
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
} & React.HTMLAttributes<HTMLDivElement>>;
const TooltipContent = React.forwardRef<HTMLDivElement, ContentProps>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    // Static container styling for development preview
    className={cn(
      "z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
