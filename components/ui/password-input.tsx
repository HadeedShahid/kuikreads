import { useState } from "react";
import { TextInput, TextInputProps, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { cn } from "@/lib/cn";
import { Text } from "./text";

interface PasswordInputProps extends Omit<TextInputProps, "secureTextEntry"> {
  label?: string;
  className?: string;
  containerClassName?: string;
}

export function PasswordInput({
  label,
  className,
  containerClassName,
  ...props
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className={cn("flex flex-col", containerClassName)}>
      {label && (
        <Text variant="label" className="pb-2">
          {label}
        </Text>
      )}
      <View
        className={cn(
          "flex-row items-center w-full rounded-xl border border-border bg-parchment",
          "focus-within:ring-2 focus-within:ring-primary/50"
        )}
      >
        <TextInput
          className={cn(
            "flex-1 h-14 px-4",
            "text-base font-sans text-text placeholder:text-text-muted",
            className
          )}
          placeholderTextColor="#897961"
          secureTextEntry={!isVisible}
          {...props}
        />
        <Pressable
          onPress={() => setIsVisible(!isVisible)}
          className="px-4 h-14 items-center justify-center"
        >
          <MaterialIcons
            name={isVisible ? "visibility" : "visibility-off"}
            size={24}
            color="#897961"
          />
        </Pressable>
      </View>
    </View>
  );
}
