import { View } from "react-native";
import { cn } from "@/lib/cn";
import { Text } from "./text";

type BadgeVariant = "primary" | "secondary" | "muted";

interface BadgeProps {
  children: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string }> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
  },
  muted: {
    bg: "bg-text-muted/10",
    text: "text-text-muted",
  },
};

export function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const styles = variantStyles[variant];

  // Don't render if no content
  if (!children) return null;

  return (
    <View className={cn("px-4 py-1 rounded-full", styles.bg, className)}>
      <Text
        className={cn(
          "text-sm font-sans-bold tracking-widest uppercase",
          styles.text
        )}
      >
        {children}
      </Text>
    </View>
  );
}
