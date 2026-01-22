import { TextInput, TextInputProps, View } from "react-native";
import { cn } from "@/lib/cn";
import { Text } from "./text";

interface InputProps extends TextInputProps {
  label?: string;
  className?: string;
  containerClassName?: string;
}

export function Input({
  label,
  className,
  containerClassName,
  ...props
}: InputProps) {
  return (
    <View className={cn("flex flex-col", containerClassName)}>
      {label && (
        <Text variant="label" className="pb-2">
          {label}
        </Text>
      )}
      <TextInput
        className={cn(
          "w-full rounded-xl border border-border bg-parchment h-14 px-4",
          "text-base font-sans text-text placeholder:text-text-muted",
          "focus:ring-2 focus:ring-primary/50",
          className
        )}
        placeholderTextColor="#897961"
        {...props}
      />
    </View>
  );
}
