import { View } from "react-native";
import { cn } from "@/lib/cn";

interface ProgressDotsProps {
  total: number;
  current: number;
  className?: string;
}

export function ProgressDots({ total, current, className }: ProgressDotsProps) {
  return (
    <View className={cn("flex-row items-center justify-center gap-3", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className={cn(
            "h-2 rounded-full",
            index === current
              ? "w-6 bg-primary"
              : "w-2 bg-[#e6e1db]"
          )}
        />
      ))}
    </View>
  );
}
