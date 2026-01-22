import { Pressable, PressableProps, View } from "react-native";
import { cn } from "@/lib/cn";
import { Text } from "./text";

type ButtonVariant = "primary" | "outline" | "ghost" | "social" | "social-dark";

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary active:bg-primary-hover",
  outline: "bg-white border border-border active:bg-gray-50",
  ghost: "bg-transparent",
  social: "bg-white border border-border active:bg-gray-50",
  "social-dark": "bg-black active:bg-gray-900",
};

const textStyles: Record<ButtonVariant, string> = {
  primary: "text-text font-sans-bold text-lg",
  outline: "text-text font-sans-medium text-base",
  ghost: "text-primary font-sans-bold text-base",
  social: "text-black font-sans-medium text-base",
  "social-dark": "text-white font-sans-medium text-base",
};

export function Button({
  variant = "primary",
  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      className={cn(
        "w-full flex-row items-center justify-center rounded-xl h-14",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon && <View className="mr-3">{icon}</View>}
      <Text className={textStyles[variant]}>{children}</Text>
    </Pressable>
  );
}
