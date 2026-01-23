import { Pressable, PressableProps, View, ActivityIndicator } from "react-native";
import { cn } from "@/lib/cn";
import { Text } from "./text";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "social" | "social-dark";

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary active:bg-primary-hover",
  secondary: "bg-secondary active:bg-secondary/80",
  outline: "bg-white border border-border active:bg-gray-50",
  ghost: "bg-transparent",
  social: "bg-white border border-border active:bg-gray-50",
  "social-dark": "bg-black active:bg-gray-900",
};

const textStyles: Record<ButtonVariant, string> = {
  primary: "text-text font-sans-bold text-lg",
  secondary: "text-white font-sans-bold text-lg",
  outline: "text-text font-sans-medium text-base",
  ghost: "text-primary font-sans-bold text-base",
  social: "text-black font-sans-medium text-base",
  "social-dark": "text-white font-sans-medium text-base",
};

const spinnerColors: Record<ButtonVariant, string> = {
  primary: "#1a1a1a",
  secondary: "#ffffff",
  outline: "#1a1a1a",
  ghost: "#ec9213",
  social: "#1a1a1a",
  "social-dark": "#ffffff",
};

export function Button({
  variant = "primary",
  className,
  children,
  icon,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      className={cn(
        "w-full flex-row items-center justify-center rounded-xl h-14",
        variantStyles[variant],
        (disabled || loading) && "opacity-80",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={spinnerColors[variant]} />
      ) : (
        <>
          {icon && <View className="mr-3">{icon}</View>}
          <Text className={textStyles[variant]}>{children}</Text>
        </>
      )}
    </Pressable>
  );
}
