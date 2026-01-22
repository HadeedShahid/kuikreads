import { View } from "react-native";
import { cn } from "@/lib/cn";
import { Text } from "./text";

interface DividerProps {
  text?: string;
  className?: string;
}

export function Divider({ text, className }: DividerProps) {
  if (!text) {
    return <View className={cn("h-px bg-border", className)} />;
  }

  return (
    <View className={cn("flex-row items-center gap-4", className)}>
      <View className="h-px flex-1 bg-border" />
      <Text variant="caption" className="italic">
        {text}
      </Text>
      <View className="h-px flex-1 bg-border" />
    </View>
  );
}
