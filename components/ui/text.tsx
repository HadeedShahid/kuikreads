import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { cn } from "@/lib/cn";

type TextVariant = "title" | "subtitle" | "body" | "label" | "caption" | "link";

interface TextProps extends RNTextProps {
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<TextVariant, string> = {
  title: "text-xl font-sans-bold text-text tracking-tight",
  subtitle: "text-lg font-sans-semibold text-text",
  body: "text-base font-sans text-text",
  label: "text-base font-sans-medium text-text",
  caption: "text-xs font-sans text-text-muted",
  link: "text-base font-sans-bold text-primary",
};

export function Text({
  variant = "body",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <RNText className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </RNText>
  );
}
