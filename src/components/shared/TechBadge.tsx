import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  variant?: "default" | "accent" | "ghost";
  size?: "sm" | "md";
  className?: string;
}

export function TechBadge({
  label,
  variant = "default",
  size = "sm",
  className,
}: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        size === "sm" && "px-2.5 py-0.5 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        variant === "default" &&
          "bg-[var(--surface-2)] text-[var(--muted)] border border-[var(--border)]",
        variant === "accent" &&
          "bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30",
        variant === "ghost" && "bg-transparent text-[var(--muted)]",
        className
      )}
    >
      {label}
    </span>
  );
}
